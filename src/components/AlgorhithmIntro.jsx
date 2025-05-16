import React from "react";
import appImage from "../assets/algorhithm.png"; 

const AlgorhithmIntro = () => {
  return (
    <section className="bg-[#e6f4f7] py-20 flex justify-around">
      <div className="max-w-7xl mx-ato px-6 flex justify-between items-center gap-">
        

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <img
            src={appImage}
            alt="Algorhithm App"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
          <div className="absolute bg-[#FF6C4A] rounded-full w-72 h-72 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Introducing Algorhithm: Your AI- <br />
            Driven{" "}
            <span className="text-[#0891b2]">Revolution in Education</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Education needs a revolution, and our AI-driven EdTech platform is here to lead it. By combining AI, AR/VR, and gamification, we offer personalized, immersive, and interactive learning experiences tailored to diverse learners. The global EdTech market is set to reach $404 billion by 2025, and we're uniquely positioned with a scalable, innovative platform that engages students, enhances outcomes, and partners seamlessly with institutions. Join us to shape the future of learning smarter, more impactful, and accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlgorhithmIntro;
