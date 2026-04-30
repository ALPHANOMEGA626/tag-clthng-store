export default function Home() {
  return (
    <main style={{background:"#0D0D0F",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"80px 48px",color:"#E8E6DF",fontFamily:"sans-serif"}}>
      <p style={{color:"#C9A84C",fontSize:"11px",letterSpacing:"0.4em",marginBottom:"24px",textTransform:"uppercase"}}>SS26 — Providence Collection</p>
      <h1 style={{fontSize:"clamp(72px,12vw,160px)",lineHeight:"0.9",marginBottom:"32px",fontFamily:"sans-serif"}}>WEAR<br/>THE <span style={{color:"#C9A84C"}}>WORD</span></h1>
      <p style={{opacity:0.5,maxWidth:"380px",marginBottom:"48px",lineHeight:"1.8"}}>Not your typical faith brand. Truth woven into every thread.</p>
      <button style={{background:"#C9A84C",color:"#0D0D0F",border:"none",padding:"16px 40px",width:"fit-content",fontSize:"11px",letterSpacing:"0.25em",cursor:"pointer",textTransform:"uppercase",fontWeight:"bold"}}>SHOP THE DROP</button>
    </main>
  )
}
