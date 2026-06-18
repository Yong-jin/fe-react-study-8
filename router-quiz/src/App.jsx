import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Info from './Info'
import { Routes, Route, useNavigate, Link } from 'react-router'

function App() {
  
  let navigate = useNavigate();

  return (
    <>
      <div>

        <div>
          {/* <button><Link to="/">Main</Link></button>
          <button><Link to="/info">/info</Link></button>
          <button><Link to="/mypage">/mypage</Link></button>
          <button><Link to="/cart">/cart</Link></button> */}
          <button onClick={()=>{ navigate("/") }}>Main</button>
          <button onClick={()=>{ navigate("/info") }}>/info</button>
          <button onClick={()=>{ navigate("/mypage") }}>/mypage</button>
          <button onClick={()=>{ navigate("/cart") }}>/cart</button>
        </div>


        <Routes>
          <Route path="/" element={<div style={{backgroundColor:'lightgray'}}>main 공간</div>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/mypage" element={<div>mypage 공간</div>}/>
          <Route path="/cart" element={<div>cart 공간</div>}/>
        </Routes>


      </div>
    </>
  )
}

export default App
