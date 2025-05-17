import React from 'react';


const VisionMission = () => {
  return (
    <div className="w-full py-20 bg-white flex justify-">
      <div className="max-w-6x w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items- md:ps-20">
        
        {/* Text Section */}
        <div className="space-y-10 mt-20">
          {/* Vision */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              We got a vision from a deep passion for innovation, technological evolution, and solving real-time challenges.
              I thrive on identifying critical problems in AI for EdTech, Data Science, Cybersecurity, and Blockchain,
              then building cutting-edge solutions that drive meaningful impact. The rapid transformation of these industries
              presents both immense opportunities and pressing challenges. My motivation is to bridge gaps, create scalable
              solutions, and push the boundaries of what's possible. Through research, prototyping, and real-world validation,
              I aim to develop technology that not only advances the field but also delivers tangible value to businesses and society.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              At STSARC, we're on a mission to drive innovation and transformation in India's tech landscape.
              Specializing in pioneering technologies like AI/ML, Metaverse, and Blockchain, we're crafting
              revolutionary products that cater to the diverse needs of Indian businesses. From AI-driven social
              platforms to advanced Blockchain solutions, our focus is on empowering Indian enterprises to thrive in the digital age.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:flex flex-co gap-6 items-center ms-[5vh]">
          <img
            src={"https://www.capgemini.com/wp-content/uploads/2022/01/Capgemini_Innovation-Ecosystem-1.jpg"}
            alt="Vision"
            className="md:w-[20vw] h-[70vh] rounded shadow-lg object-cover"
          />
          <img
            src={"https://media.istockphoto.com/id/1146475545/photo/coffee-break-during-business-meeting-vertical-shot.jpg?s=612x612&w=0&k=20&c=dxhcm1sm8B6hFu7yCYn1oWFn68JHdwv-MolYRQbDl7g="}
            alt="Mission"
            className="md:w-[20vw] h-[70vh] rounded shadow-lg object-cover mt-10"
          />
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
