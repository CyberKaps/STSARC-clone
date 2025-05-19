import React from "react";
import feature1 from "../assets/ailearning.png";
import feature2 from "../assets/gamifiedexp.png";
import feature3 from "../assets/collablearning.png";
import feature4 from "../assets/smartcontent.png";

const features = [
  {
    img: feature1,
    title: "AI-Powered Learning",
    desc: "Get 24/7 guidance with our AI Tutor and active bots, offering personalized course generation and adaptive learning paths tailored to each student.",
  },
  {
    img: feature2,
    title: "Gamified Experience",
    desc: "Boost motivation with points, badges, and leaderboards, making learning fun and interactive while reinforcing key concepts.",
  },
  {
    img: feature3,
    title: "Collaborative Learning",
    desc: "Explore AR/VR-powered virtual labs, multilingual collaboration zones, and research labs for an engaging hands-on learning experience.",
  },
  {
    img: feature4,
    title: "Smart Content & Community",
    desc: "Access real-time adaptive study material, micro-learning modules, and interactive community rooms for peer-to-peer engagement and knowledge sharing.",
  },
];

const AlgoFeatures = () => {
  return (
    <section className="bg-[#e6f4f7] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-3">Features of Our Product</h2>

        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-1 bg-black mr-2" />
         
        </div>

        <p className="text-[#4E4E4E] text-lg max-w-3xl mx-auto mb-12">
         Experience AI-driven, personalized learning with adaptive paths, immersive AR/VR, gamification, and real-time progress tracking—making education engaging, interactive, and accessible
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative group bg- rounded- border-black shadow-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-[#42a3bb] hover:to-[#42a3bb] cursor-pointer"
            >

              <img
                src={item.img}
                alt={item.title}
                className="transition-opacity duration-500 group-hover:opacity-0"
              />

           
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgoFeatures;
