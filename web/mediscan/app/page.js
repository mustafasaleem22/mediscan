'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',fontFamily:'sans-serif'}}>

      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 48px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <div style={{width:48,height:48,background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>🩺</div>
          <div>
            <div style={{color:'white',fontWeight:900,fontSize:24}}>MediScan</div>
            <div style={{color:'#00d2ff',fontSize:11,letterSpacing:2}}>AI HEALTH ASSISTANT</div>
          </div>
        </div>
        <div style={{display:'flex',gap:16}}>
          <button onClick={() => router.push('/login')} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'10px 28px',borderRadius:50,cursor:'pointer',fontSize:14,fontWeight:600}}>
            Login
          </button>
          <button onClick={() => router.push('/register')} style={{background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'10px 28px',borderRadius:50,cursor:'pointer',fontSize:14,fontWeight:700}}>
            Sign Up Free
          </button>
        </div>
      </nav>

      <div style={{textAlign:'center',padding:'90px 20px 70px'}}>
        <h1 style={{fontSize:72,fontWeight:900,lineHeight:1.1,marginBottom:24,color:'white'}}>
          Your Personal<br/>
          <span style={{background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
            AI Doctor
          </span>
        </h1>
        <p style={{color:'rgba(255,255,255,0.65)',fontSize:20,maxWidth:580,margin:'0 auto 48px',lineHeight:1.7}}>
          Describe your symptoms and get instant AI-powered medical analysis, urgency levels, and specialist recommendations.
        </p>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <button onClick={() => router.push('/register')} style={{background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'18px 44px',borderRadius:50,fontSize:18,fontWeight:800,cursor:'pointer'}}>
            Get Started Free 🚀
          </button>
          <button onClick={() => router.push('/login')} style={{background:'rgba(255,255,255,0.08)',border:'2px solid rgba(255,255,255,0.2)',color:'white',padding:'18px 44px',borderRadius:50,fontSize:18,fontWeight:600,cursor:'pointer'}}>
            Login to Account →
          </button>
        </div>

        <div style={{display:'flex',gap:0,justifyContent:'center',marginTop:60,flexWrap:'wrap'}}>
          {[['❤️','10K+','Happy Users'],['⚡','2sec','Avg Response'],['🎯','95%','Accuracy'],['🔒','100%','Private']].map(([icon,num,label],i) => (
            <div key={i} style={{padding:'16px 36px',borderRight:i<3?'1px solid rgba(255,255,255,0.1)':'none',textAlign:'center'}}>
              <div style={{fontSize:24}}>{icon}</div>
              <div style={{color:'white',fontWeight:900,fontSize:26}}>{num}</div>
              <div style={{color:'rgba(255,255,255,0.45)',fontSize:12}}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{textAlign:'center',padding:'20px 20px 60px'}}>
        <h2 style={{color:'white',fontSize:36,fontWeight:800,marginBottom:8}}>How MediScan Works</h2>
        <p style={{color:'rgba(255,255,255,0.5)',marginBottom:48}}>Three simple steps to get your health insights</p>
        <div style={{display:'flex',justifyContent:'center',gap:24,flexWrap:'wrap',maxWidth:900,margin:'0 auto'}}>
          {[
            ['📝','Describe Symptoms','Type your symptoms in plain English','#00d2ff','STEP 1'],
            ['🧠','AI Analyzes','Our AI analyzes using medical knowledge','#7b2ff7','STEP 2'],
            ['📋','Get Insights','Receive conditions and doctor recommendations','#ff6b6b','STEP 3']
          ].map(([icon,title,desc,color,step],i) => (
            <div key={i} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:24,padding:32,maxWidth:260,backdropFilter:'blur(10px)'}}>
              <div style={{width:56,height:56,background:`linear-gradient(135deg,${color},${color}88)`,borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,margin:'0 auto 16px'}}>{icon}</div>
              <div style={{color,fontWeight:900,fontSize:13,letterSpacing:2,marginBottom:8}}>{step}</div>
              <h3 style={{color:'white',fontWeight:700,fontSize:18,marginBottom:10}}>{title}</h3>
              <p style={{color:'rgba(255,255,255,0.55)',fontSize:14,lineHeight:1.6}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{textAlign:'center',padding:'20px 20px 80px'}}>
        <div style={{background:'linear-gradient(135deg,rgba(0,210,255,0.12),rgba(123,47,247,0.12))',border:'1px solid rgba(255,255,255,0.1)',borderRadius:28,padding:'60px 40px',maxWidth:680,margin:'0 auto'}}>
          <div style={{fontSize:48,marginBottom:16}}>🏥</div>
          <h2 style={{color:'white',fontSize:40,fontWeight:900,marginBottom:14}}>Ready to Get Started?</h2>
          <p style={{color:'rgba(255,255,255,0.6)',fontSize:17,marginBottom:36}}>Free forever. No credit card required.</p>
          <button onClick={() => router.push('/register')} style={{background:'linear-gradient(135deg,#00d2ff,#7b2ff7)',border:'none',color:'white',padding:'18px 56px',borderRadius:50,fontSize:20,fontWeight:800,cursor:'pointer'}}>
            Create Free Account
          </button>
        </div>
      </div>

      <footer style={{borderTop:'1px solid rgba(255,255,255,0.08)',padding:'28px 48px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
        <div style={{color:'white',fontWeight:700}}>🩺 MediScan © 2026</div>
        <div style={{color:'rgba(255,255,255,0.3)',fontSize:12}}>Not a substitute for professional medical advice</div>
      </footer>

    </main>
  );
}