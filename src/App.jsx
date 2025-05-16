import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCard from './components/TechCard'
import { ShieldCheck } from "lucide-react";
import TechSlider from './components/TechSlider'
import SweeBuzzIntro from './components/SweeBuzzIntro'
import FeaturesSection from './components/FeaturesSection'

function App() {
  

  return (
    <>
      <div>
        {/* <h1 className='bg-red-400'>Hii Kalpesh</h1> */}
        <Navbar />
        <Hero />

        {/* <div className='text-[80px]'>
         <marquee>hiii</marquee>
        </div> */}
  
        <div className='md:flex md:mt-10 md:ms-5'>
           <TechSlider />
            <TechSlider />
        </div>

        <h1 className='raleway-heading text-8xl text-[#fdcca9] mt-4'>SWEEBUZZ</h1>
        <SweeBuzzIntro />

        <FeaturesSection />

      </div>
    </>
  )
}

export default App
