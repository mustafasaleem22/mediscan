'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setResult('');
    try {
      const response = await fetch('http://127.0.0.1:8000/symptoms/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms })
      });
      const data = await response.json();
      setResult(data.analysis);
    } catch (error) {
      setResult('Error connecting to server.');
    }
    setLoading(false);
  };

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',fontFamily:'sans-serif',padding:32}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:40}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:42,height:42,background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>🩺</div>
          <div style={{color:'white',fontWeight:900,fontSize:20}}>MediScan</div>
        </div>
        <button onClick={() => router.push('/')} style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'8px 20px',borderRadius:50,cursor:'pointer'}}>
          Logout
        </button>
      </nav>

      <div style={{maxWidth:700,margin:'0 auto'}}>
        <h1 style={{color:'white',fontSize:36,fontWeight:900,marginBottom:8}}>
          Welcome to MediScan 👋
        </h1>
        <p style={{color:'rgba(255,255,255,0.5)',marginBottom:32}}>Describe your symptoms below and get instant AI analysis</p>

        <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:24,padding:32,marginBottom:24}}>
          <label style={{color:'rgba(255,255,255,0.7)',fontWeight:600,fontSize:14,display:'block',marginBottom:12}}>
            🤒 Describe your symptoms
          </label>
          <textarea
            rows={4}
            placeholder="e.g. I have a headache, fever and sore throat for 2 days..."
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
            style={{width:'100%',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',resize:'none',boxSizing:'border-box'}}
          />
          <button
            onClick={analyzeSymptoms}
            disabled={loading}
            style={{marginTop:16,width:'100%',background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'15px',borderRadius:12,fontSize:16,fontWeight:700,cursor:'pointer',opacity:loading?0.7:1}}
          >
            {loading ? '⏳ Analyzing your symptoms...' : '🧠 Analyze Symptoms'}
          </button>
        </div>

        {result && (
          <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(0,210,255,0.3)',borderRadius:24,padding:32}}>
            <h2 style={{color:'#00d2ff',fontWeight:800,fontSize:22,marginBottom:16}}>🩺 AI Analysis</h2>
            <p style={{color:'rgba(255,255,255,0.85)',lineHeight:1.8,whiteSpace:'pre-wrap'}}>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}