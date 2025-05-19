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
import AlgorhithmIntro from './components/AlgorhithmIntro'
import AlgoFeatures from './components/AlgoFeatures'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Timeline from './components/Timeline'
import SupportedBy from './components/SupportedBy'
import OurTeam from './components/OurTeam'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className='raleway'>
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

        <h1 className='raleway-heading text-end text-8xl text-[#a9d8e4] mt-20'>ALGORHITHM</h1>
        
        <AlgorhithmIntro />

        <AlgoFeatures />

        <About />
        <VisionMission />
        <Timeline />
        <SupportedBy />
        <OurTeam />
        <Footer />

      </div>
    </>
  )
}

export default App
