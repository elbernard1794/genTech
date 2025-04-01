import React from "react";
import logo from "../assets/images/logo.png";

const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            {title}
          </h1>
          <p className="text-2xl font-extralight text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
