
import React from 'react'

function Timeline() {
    return (
      <section className="bg-white py-20">
  <div className="relative max-w-7xl mx-auto px-6">
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-red-300"></div>

    {/* Timeline Items */}
    <div className="space-y-16">

      {/* Item 1 */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end pr-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow max-w-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900">Launch of STSARC</h3>
            <p className="text-sm text-gray-600 mt-2">
              In January 2021, STSARC was founded with the aim of innovation.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="w-6 h-6 ms-3 bg-red-500 rounded-full border-4 border-white shadow"></div>
          <p className="text-xs text-gray-500 mt-2 text-center">Jan 2021</p>
        </div>
        <div className="w-1/2"></div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center w-full">
        <div className="w-1/2"></div>
        <div className="relative z-10">
          <div className="w-6 h-6 ms-3 bg-red-500 rounded-full border-4 border-white shadow"></div>
          <p className="text-xs text-gray-500 mt-2 text-center">Nov 2023</p>
        </div>
        <div className="w-1/2 flex justify-start pl-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow max-w-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900">Incorporation of STSARC</h3>
            <p className="text-sm text-gray-600 mt-2">
              By November 2023, STSARC officially incorporated as a recognized entity.
            </p>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end pr-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow max-w-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900">STSARC Incubation at NEC</h3>
            <p className="text-sm text-gray-600 mt-2">
              In February 2023, STSARC initiated its incubation program at the Nashik Engineering Cluster (NEC).
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="w-6 h-6 ms-3 bg-red-500 rounded-full border-4 border-white shadow "></div>
          <p className="text-xs text-gray-500 mt-2 text-center">Feb 2023</p>
        </div>
        <div className="w-1/2"></div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center w-full">
        <div className="w-1/2"></div>
        <div className="relative z-10">
          <div className="w-6 h-6 ms-3 bg-red-500 rounded-full border-4 border-white shadow"></div>
          <p className="text-xs text-gray-500 mt-2 text-center">Jun 2024</p>
        </div>
        <div className="w-1/2 flex justify-start pl-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow max-w-sm text-center">
            <h3 className="font-semibold text-lg text-gray-900">STSARC Incubation at IIT Roorkee</h3>
            <p className="text-sm text-gray-600 mt-2">
              By June 2024, STSARC began its incubation phase at the prestigious Indian Institute of Technology (IIT) Roorkee.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    )
  }


export default Timeline