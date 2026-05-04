'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: name, email, password, role })
      });

      localStorage.setItem('user', JSON.stringify({ name, email, role }));
      router.push('/dashboard');
    } catch (err) {
      localStorage.setItem('user', JSON.stringify({ name, email, role }));
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif',padding:20}}>
      <div style={{width:'100%',maxWidth:460}}>

        <div style={{textAlign:'center',marginBottom:28}}>
          <div onClick={() => router.push('/')} style={{cursor:'pointer',display:'inline-flex',alignItems:'center',gap:12,marginBottom:8}}>
            <div style={{width:48,height:48,background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>🩺</div>
            <div>
              <div style={{color:'white',fontWeight:900,fontSize:24}}>MediScan</div>
              <div style={{color:'#00d2ff',fontSize:11,letterSpacing:2}}>AI HEALTH ASSISTANT</div>
            </div>
          </div>
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:14,marginTop:8}}>Create your free account in seconds</p>
        </div>

        <div style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:24,padding:36,backdropFilter:'blur(20px)'}}>
          <h2 style={{color:'white',fontWeight:800,fontSize:26,marginBottom:24,textAlign:'center'}}>Create Account ✨</h2>

          {error && (
            <div style={{background:'rgba(255,100,100,0.15)',border:'1px solid rgba(255,100,100,0.3)',borderRadius:12,padding:'12px 16px',color:'#ff6b6b',fontSize:14,marginBottom:20,textAlign:'center'}}>
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div style={{marginBottom:16}}>
              <label style={{color:'rgba(255,255,255,0.7)',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{width:'100%',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',boxSizing:'border-box'}}
              />
            </div>

            <div style={{marginBottom:16}}>
              <label style={{color:'rgba(255,255,255,0.7)',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{width:'100%',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',boxSizing:'border-box'}}
              />
            </div>

            <div style={{marginBottom:16}}>
              <label style={{color:'rgba(255,255,255,0.7)',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>Password</label>
              <input
                type="password"
                placeholder="Min 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{width:'100%',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,padding:'14px 16px',color:'white',fontSize:15,outline:'none',boxSizing:'border-box'}}
              />
            </div>

            <div style={{marginBottom:24}}>
              <label style={{color:'rgba(255,255,255,0.7)',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>I am a</label>
              <div style={{display:'flex',gap:12}}>
                {['patient','doctor'].map(r => (
                  <div key={r} onClick={() => setRole(r)} style={{flex:1,padding:'12px',borderRadius:12,border:`2px solid ${role===r?'#00d2ff':'rgba(255,255,255,0.15)'}`,background:role===r?'rgba(0,210,255,0.1)':'transparent',color:role===r?'#00d2ff':'rgba(255,255,255,0.5)',textAlign:'center',cursor:'pointer',fontWeight:600,fontSize:14,textTransform:'capitalize'}}>
                    {r === 'patient' ? '🙋 Patient' : '👨‍⚕️ Doctor'}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{width:'100%',background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'15px',borderRadius:12,fontSize:16,fontWeight:700,cursor:'pointer',opacity:loading?0.7:1}}
            >
              {loading ? '⏳ Creating account...' : '🚀 Create Free Account'}
            </button>
          </form>

          <div style={{textAlign:'center',marginTop:20}}>
            <span style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>Already have an account? </span>
            <span onClick={() => router.push('/login')} style={{color:'#00d2ff',fontSize:14,fontWeight:600,cursor:'pointer'}}>Login</span>
          </div>
        </div>

        <div style={{textAlign:'center',marginTop:20,color:'rgba(255,255,255,0.25)',fontSize:12}}>
          🔒 Free forever. No credit card required.
        </div>
      </div>
    </main>
  );
}