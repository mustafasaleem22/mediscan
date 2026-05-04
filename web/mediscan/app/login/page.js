'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      router.push('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif'}}>
      <div style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:24,padding:40,width:400,backdropFilter:'blur(20px)'}}>
        <h1 style={{color:'white',textAlign:'center',marginBottom:32,fontSize:28,fontWeight:900}}>🩺 Login to MediScan</h1>
        
        <div style={{marginBottom:20}}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{width:'100%',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',boxSizing:'border-box'}}
          />
        </div>

        <div style={{marginBottom:28}}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{width:'100%',background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',boxSizing:'border-box'}}
          />
        </div>

        <button
        onClick={handleLogin}
          style={{width:'100%',background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'16px',borderRadius:12,fontSize:17,fontWeight:700,cursor:'pointer'}}
>
          Login →
        </button>

        <p style={{color:'rgba(255,255,255,0.5)',textAlign:'center',marginTop:20,fontSize:14}}>
          No account?{' '}
          <span onClick={() => router.push('/register')} style={{color:'#00d2ff',cursor:'pointer',fontWeight:600}}>
            Sign Up Free
          </span>
        </p>
      </div>
    </main>
  );
}