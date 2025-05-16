import React from "react";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/feature-4.png"; // You can split the uploaded image into these

const FeaturesSection = () => {
  return (
    <section className="bg-[#fff7f6] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-3">Features of Our Product</h2>

        {/* Underline + Dot */}
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-1 bg-[#FF6C4A] mr-2" />
          {/* <div className="w-2 h-2 bg-[#FF6C4A] rounded-full" /> */}
        </div>

        {/* Subtitle */}
        <p className="text-[#4E4E4E] text-lg max-w-3xl mx-auto mb-12">
          Leverage the power of AI to streamline your operations and boost your revenue. Our product
          offers a cost-effective solution with easy monetization options, making it simple to
          generate significant returns.
        </p>

        {/* Feature Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {[feature1, feature2, feature3, feature4].map((img, index) => (
            <div
              key={index}
              className="bg- border rounded-sm shadow- p-4 flex justify-center items-center"
            >
              <img src={img} alt={`Feature ${index + 1}`} className="max-h-[500px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
