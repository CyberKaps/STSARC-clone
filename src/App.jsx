import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
      <div>
        {/* <h1 className='bg-red-400'>Hii Kalpesh</h1> */}
        <Navbar />
        <Hero />

        <div className='text-[80px]'>
         <marquee>hiii</marquee>
        </div>
      </div>
    </>
  )
}

export default App
