import React from "react";

const TechCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-6 text-center max-w-xs mx-auto">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default TechCard;
