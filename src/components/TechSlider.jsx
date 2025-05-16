import React from "react";
import TechCard from "./TechCard";
import { Tech } from "../utils";

const TechSlider = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Tech.map((Tech, index) => (
            <TechCard
              key={index}
              icon={Tech.icon}
              title={Tech.title}
              description={Tech.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
