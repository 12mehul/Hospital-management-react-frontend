import React from "react";
import doctorImg from "../../assets/img/doctor.png";

const HomeSection = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold text-blue-800">
        Welcome to our HealthCare Wellness Center!
      </h2>
      <div className="container mx-auto px-16 py-4 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Your health and convenience are our top priorities. Our
              user-friendly platform allows you to:
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 undefined">
          <img src={doctorImg} alt="logo" className="rounded-md" />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
