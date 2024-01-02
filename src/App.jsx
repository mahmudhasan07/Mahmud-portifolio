import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {


  return (
  
    <div className=''>
        <div>
        <NavBar></NavBar>
        </div>
        <div>
        <Outlet></Outlet>
        </div>
      
    
    </div>
  )
}

export default App
