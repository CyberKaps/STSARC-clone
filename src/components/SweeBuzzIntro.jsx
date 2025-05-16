import React from "react";
import appImage from "../assets/sweebuzz.png"; // replace with actual path

const SweeBuzzIntro = () => {
  return (
    <section className="bg-[#FFF7F5] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Introducing SweeBuzz: Your <br />
            Ultimate{" "}
            <span className="text-[#FF6C4A]">Blogging Social Media App</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            SweeBuzz is your go-to destination for effortless blogging and
            social media sharing. With AI at its core, SweeBuzz not only
            streamlines content creation but also offers a dedicated platform
            for users to monetize their content and maximize revenue. Also,
            users can effortlessly create, share, and discover engaging content
            while leveraging AI-driven insights for maximum impact.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <img
            src={appImage}
            alt="SweeBuzz App"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
          <div className="absolute bg-[#FF6C4A] rounded-full w-72 h-72 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default SweeBuzzIntro;
