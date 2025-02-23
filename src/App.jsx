import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import Page from './components/Page'
import OTP from './components/OTP'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={ <Page />}/>
      <Route path='/otp'element={ <OTP />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
