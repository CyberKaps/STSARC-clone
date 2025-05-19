import React from 'react';
import tides from '../assets/tides.png';
import nec from '../assets/NEC.png';

function SupportedBy() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-12 py-8 gap-8 bg-white">
      <div className="text-center md:text-left">
        <h1 className="raleway text-xl md:text-3xl text-[#f96a50] font-black">
          Supported By
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 border rounded-md p-4 shadow-md w-full max-w-md">
        <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] flex items-center justify-center overflow-hidden">
          <img src={tides} className="w-full h-full object-contain" alt="TIDES Logo" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold">TIDES Business Incubator <hr className="my-1" /> IIT Roorkee</h2>
          <p className="text-black/60 text-sm"><strong>Stage:</strong> Incubation</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 border rounded-md p-4 shadow-md w-full max-w-md">
        <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] flex items-center justify-center overflow-hidden">
          <img src={nec} className="w-full h-full object-contain" alt="NEC Logo" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold">Nashik Engineering <hr className="my-1" /> Cluster</h2>
          <p className="text-black/60 text-sm"><strong>Stage:</strong> Incubation</p>
        </div>
      </div>
    </div>
  );
}

export default SupportedBy;
