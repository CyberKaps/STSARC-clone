import React from "react";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/feature-4.png";

const features = [
  {
    img: feature1,
    title: "AI Algorithm",
    desc: "Our AI ensures top user experiences with personalized content recommendations and smart analytics insights.",
  },
  {
    img: feature2,
    title: "Cost Effective",
    desc: "SweeBuzz is designed to be cost-effective, with no hefty fees or subscriptions required to access its full range of features.",
  },
  {
    img: feature3,
    title: "Easy Monetization",
    desc: "SweeBuzz offers effortless monetization options, allowing users to generate revenue from their content with ease.",
  },
  {
    img: feature4,
    title: "Revenue Generation",
    desc: "SweeBuzz provides users with ample opportunities to generate revenue through various channels.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#FFF3F0] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-3">Features of Our Product</h2>

        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-1 bg-[#FF6C4A] mr-2" />
          <div className="w-2 h-2 bg-[#FF6C4A] rounded-full" />
        </div>

        <p className="text-[#4E4E4E] text-lg max-w-3xl mx-auto mb-12">
          Leverage the power of AI to streamline your operations and boost your revenue. Our product
          offers a cost-effective solution with easy monetization options, making it simple to
          generate significant returns.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative group bg- rounded- border-black shadow-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-[#FF6C4A] hover:to-[#f98939] cursor-pointer"
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

export default FeaturesSection;
