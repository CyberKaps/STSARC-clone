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
          <div class="absolute -bottom-[18%] md:-bottom-[40%] w-[350px] md:w-[670px] h-[350px] md:h-[670px] rounded-full gradient-bg-algo bg-[#2F99B3] z-10"></div>
          <div class="absolute -bottom-[18%] md:-bottom-[37%] z-[100] text-[300px] md:text-[600px] font-extralight text-white/10 rotate-180 animate-spin">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M229.832 24.166C169.087 23.868 108.817 50.45 68.12 101.72c-70.4 88.68-55.578 217.634 33.1 288.032 1.39 1.104 2.817 2.195 4.26 3.27.286.303.575.618.86.916-.118-.177-.23-.355-.348-.532 5.055 3.744 10.36 7.29 15.504 10.475-15.073-15.153-27.356-32.234-36.783-50.52-26.065-64.267-15.236-129.285 32.96-161.24 58.434-38.76 151.118-15.176 215.06 51.675-3.942-5.902-8.413-12.113-13.016-17.834-63.682-79.235-166.368-109.6-229.362-67.817-1.072.71-2.122 1.442-3.158 2.185 5.43-9.825 11.74-19.333 18.953-28.418 65.31-82.274 181.148-100.695 268.36-46.756-5.63-5.66-11.95-11.454-18.358-16.54-37.412-29.7-81.992-44.23-126.32-44.448zm160.617 82.277c45.104 42.614 67.29 102.166 63.886 161.223-5.603 29.51-20.302 57.597-44.16 80.174-58.436 55.31-151.12 57.978-215.063 9.238 3.944 4.784 8.413 9.73 13.016 14.145 49.375 47.45 122.196 58.87 181.786 33.818-65.28 61.195-164.122 72.983-242.467 27.83 5.804 5.48 12.3 11.075 18.863 15.96 90.822 67.61 219.257 48.797 286.867-42.03 67.61-90.822 48.795-219.255-42.028-286.866-6.56-4.887-13.782-9.5-20.703-13.49z"></path></svg></div>
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
