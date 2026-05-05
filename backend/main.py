from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import requests
import os

load_dotenv()

app = FastAPI(title="MediScan API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SECRET_KEY")
HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json"
}

class RegisterUser(BaseModel):
    email: str
    full_name: str
    role: str
    phone: str = None 
class SymptomCheck(BaseModel):
    symptoms: str
    patient_id: str = None

@app.get("/")
def root():
    return {"message": "MediScan API is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "project": "MediScan"}

@app.post("/auth/register")
def register_user(user: RegisterUser):
    response = requests.post(
        f"{SUPABASE_URL}/rest/v1/users",
        headers=HEADERS,
        json={
            "email": user.email,
            "full_name": user.full_name,
            "role": user.role,
            "phone": user.phone
        }
    )
    if response.status_code >= 400:
        raise HTTPException(status_code=400, detail=response.text)
    return {"message": "User registered successfully"}

@app.get("/users")
def get_users():
    response = requests.get(
        f"https: //pbdumehedfzndspkeigz.supabase.co/rest/v1/users?select=*",
        headers=HEADERS
    )
    return response.json()

@app.post("/symptoms/analyze")
def analyze_symptoms(data: SymptomCheck):
    try:
        grok_key = os.getenv("GROK_API_KEY")
        
        headers = {
            "Authorization": f"Bearer {grok_key}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a medical assistant. Analyze symptoms and respond with: possible conditions, urgency level (mild/moderate/emergency), recommended specialist, and advice."
                },
                {
                    "role": "user",
                    "content": f"Patient symptoms: {data.symptoms}"
                }
            ],
            "max_tokens": 500
        }
        
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers=headers,
            json=payload
        )
        
        if response.status_code != 200:
            return {"error": response.text}
        
        ai_response = response.json()["choices"][0]["message"]["content"]
        
        # Save to database
        requests.post(
            f"{SUPABASE_URL}/rest/v1/symptom_logs",
            headers=HEADERS,
            json={
                "symptoms": data.symptoms,
                "ai_response": ai_response,
                "urgency_level": "pending"
            }
        )
        
        return {"analysis": ai_response}
    
    except Exception as e:
        return {"error": str(e)} 