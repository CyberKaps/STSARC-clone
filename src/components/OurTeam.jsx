import React from 'react'
import ghanshyam from '../assets/ghanshyam.png'
import LinkedinLogo from '../assets/linkedinlogo.png'
import vaishnavi from '../assets/vaishnavi.png'
import kartikey from '../assets/kartikey.png'
import EmailLogo from '../assets/emaillogo.png'

function OurTeam() {
  return (
     <div className="bg-amber-50 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Meet the team behind our work, committed to collaboration and excellence. Together, we are
            committed to fostering collaboration, driving innovation, and delivering excellence in everything we do.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center max-w-xs w-full">
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={ghanshyam}
                  alt="Ghanshyam Chaudhari" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Ghanshyam Chaudhari</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={EmailLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center max-w-xs w-full">
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={vaishnavi} 
                  alt="Vaishnavi Shelke" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Vaishnavi Shelke</h3>
              <p className="text-gray-600">Co-Founder & CDO</p>
            </div>
        
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={EmailLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center max-w-xs w-full">
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={kartikey}
                  alt="Kumar Kartikey Pandey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Kumar Kartikey Pandey</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
        
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src={EmailLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam




