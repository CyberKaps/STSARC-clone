import React from 'react'
import tides from '../assets/tides.png'
import nec from '../assets/NEC.png'


function SupportedBy() {
  return (
    <div className='flex  gap-2 justify-around items-center h-[30vh] '>
        <div>
         <h1 className ="w-full md:w-fit raleway text-lg md:text-[30px] text-primary text-center text-[#f96a50] opacity-100 font-black">Supported By</h1>
        </div>
        <div className = "flex border-[1px] gap-4 mt-4 p-3 raleway">
          <div className="h-[100px] w-[100px] flex items-center justify-center overflow-hidden">
            <img src={tides} class="w-full h-full object-contain" alt="" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl raleway text-start font-semibold">TIDES Business Incubator <hr />IIT Roorkee</h1>
            <p class="text-start mt-1 text-black/60 text-[15px] w-full"><strong>Stage:</strong> Incubation</p>
          </div>
        </div>
        <div className = "flex gap-4 mt-4 border-[1px] p-3 ">
          <div className="h-[100px] w-[100px] flex items-center justify-center overflow-hidden">
            <img src={nec} class="w-full h-full object-contain" alt="" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl raleway text-start font-semibold">Nashik Engineering <hr/> Cluster</h1>
            <p className="text-start mt-1 text-black/60 text-[15px] w-full"><strong>Stage:</strong> Incubation</p>
          </div>
        </div>
    </div>
  
  )
}

export default SupportedBy