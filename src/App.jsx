import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes,Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import Page from './components/Page'
import OTP from './components/OTP'
import Email from './components/Email'
import Home from './components/Home'
function App() {
  
  return (
    <>
  <BrowserRouter>
<Routes>
  <Route path='/'element={ <Page />}/>
  <Route path='/email'element={ <Email />}/>
  <Route path='/otp'element={ <OTP />}/>
  <Route path='/home'element={ <Home />}/>
</Routes>
</BrowserRouter> 
    </>
  )
}

export default App



















