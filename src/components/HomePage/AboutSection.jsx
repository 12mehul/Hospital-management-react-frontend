import React from "react";
import aboutImg from "../../assets/img/about_home.jpg";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 w-full px-6 md:px-10 lg:px-14">
        <h2 className="mb-6 text-4xl md:text-5xl font-semibold text-blue-800 text-left">
          About Us
        </h2>
        <div className="lg:pr-16 xl:pr-24">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            At HealthCare Wellness Center, we believe in making healthcare
            accessible and convenient for everyone. Our mission is to connect
            patients with the right healthcare providers, ensuring that you
            receive the best care when you need it most.
          </h3>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how
            your company stacks against the closest competitors
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={aboutImg}
          alt="About illustration"
          className="rounded-lg shadow-lg shadow-gray-300 w-64 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
};

export default AboutSection;
