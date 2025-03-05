import React from "react";
import aboutImg from "../../assets/img/about.png";

const AboutSection = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold text-blue-800">
        About Us
      </h2>
      <div className="container mx-auto px-16 py-4 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              At HealthCare Wellness Center, we believe in making healthcare
              accessible and convenient for everyone. Our mission is to connect
              patients with the right healthcare providers, ensuring that you
              receive the best care when you need it most.
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 undefined">
          <img src={aboutImg} alt="logo" className="rounded-md" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
