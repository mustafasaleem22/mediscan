# 🩺 MediScan — AI-Powered Medical Symptom Checker

> An intelligent healthcare platform that uses AI to analyze symptoms and provide medical insights, built with a modern full-stack architecture.

![MediScan Banner](https://img.shields.io/badge/MediScan-AI%20Health%20Assistant-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0tMS0xM3Y2bDUgMC04Ni0xLjUtNS0zVjd6Ii8+PC9zdmc+)
[![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)](https://python.org)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Flutter](https://img.shields.io/badge/Flutter-3.x-blue?style=flat-square&logo=flutter)](https://flutter.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-green?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=flat-square&logo=supabase)](https://supabase.com)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)

---

## 🌟 Overview

MediScan is a full-stack AI-powered healthcare application that allows patients to describe their symptoms in plain language and receive instant medical analysis. The platform provides possible conditions, urgency levels, and specialist recommendations powered by Groq's LLaMA AI model.

The project demonstrates a complete production-ready architecture including a REST API backend, a responsive web application, and a cross-platform mobile app.

---

## ✨ Features

- 🤖 **AI Symptom Analysis** — Describe symptoms in plain English, get instant AI-powered medical insights
- 🎯 **Urgency Assessment** — Automatically categorizes as mild, moderate, or emergency
- 👨‍⚕️ **Specialist Recommendations** — Suggests the right type of doctor for your condition
- 📋 **Health History** — All symptom checks saved to database for future reference
- 🔐 **User Authentication** — Separate patient and doctor roles
- 📱 **Cross-Platform** — Available as both web app and mobile app
- 🔒 **Secure** — Environment variables, CORS protection, encrypted data

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| Python 3.11 | Core language |
| FastAPI | REST API framework |
| Groq API (LLaMA 3.3) | AI symptom analysis |
| Supabase (PostgreSQL) | Database |
| Uvicorn | ASGI server |

### Frontend (Web)
| Technology | Purpose |
|-----------|---------|
| Next.js 15 | React framework |
| Tailwind CSS | Styling |
| JavaScript | Language |

### Mobile
| Technology | Purpose |
|-----------|---------|
| Flutter 3.x | Cross-platform mobile |
| Dart | Language |
| HTTP package | API communication |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────┐
│              USERS                      │
│   Patients            Doctors           │
└────────┬──────────────────┬─────────────┘
         │                  │
    ┌────▼────┐        ┌────▼────┐
    │ Flutter │        │ Next.js │
    │  App    │        │ Web App │
    └────┬────┘        └────┬────┘
         │                  │
         └────────┬──────────┘
                  │ REST API
         ┌────────▼────────┐
         │  Python FastAPI  │
         │   Backend        │
         └────────┬─────────┘
                  │
     ┌────────────┼────────────┐
     │            │            │
┌────▼───┐  ┌────▼────┐  ┌────▼──────┐
│Supabase│  │  Groq   │  │   Auth    │
│   DB   │  │  API    │  │  System   │
└────────┘  └─────────┘  └───────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 20+
- Flutter SDK 3.x
- Git

### 1. Clone the repository
```bash
git clone https://github.com/mustafasaleem22/mediscan.git
cd mediscan
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

Create `.env` file in backend folder:
```
SUPABASE_URL=your_supabase_url
SUPABASE_SECRET_KEY=your_supabase_secret_key
GROK_API_KEY=your_groq_api_key
```

Run the backend:
```bash
uvicorn main:app --reload
```
API will be available at `http://localhost:8000`

### 3. Web App Setup
```bash
cd web/mediscan
npm install
npm run dev
```
Web app will be available at `http://localhost:3000`

### 4. Mobile App Setup
```bash
cd mobile/mediscan_app
flutter pub get
flutter run -d chrome
```

---

## 📡 API Documentation

Once the backend is running, visit:
```
http://localhost:8000/docs
```

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API health check |
| GET | `/health` | Detailed health status |
| POST | `/auth/register` | Register new user |
| GET | `/users` | Get all users |
| POST | `/symptoms/analyze` | AI symptom analysis |

### Example Request
```json
POST /symptoms/analyze
{
  "symptoms": "I have a headache, fever and sore throat for 2 days"
}
```

### Example Response
```json
{
  "analysis": "Possible Conditions: Viral Pharyngitis, Strep Throat...\nUrgency Level: Moderate\nRecommended Specialist: Primary Care Physician..."
}
```

---

## 🗄 Database Schema

```sql
users (id, email, full_name, role, phone, created_at)
doctor_profiles (id, user_id, specialization, experience_years, available)
symptom_logs (id, patient_id, symptoms, ai_response, urgency_level, created_at)
appointments (id, patient_id, doctor_id, appointment_date, status, notes)
```

---

## 👨‍💻 Developer

**Mustafa Saleem**
- GitHub: [@mustafasaleem22](https://github.com/mustafasaleem22)

---

## ⚠️ Disclaimer

MediScan is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.