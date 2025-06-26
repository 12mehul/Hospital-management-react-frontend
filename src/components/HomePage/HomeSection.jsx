import React from "react";
import doctorImg from "../../assets/img/doctor_home.jpg";

const HomeSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 w-full px-6 md:px-10 lg:px-14">
        <h2 className="mb-6 text-4xl md:text-5xl font-semibold text-blue-800 text-left">
          HealthCare Wellness Center!
        </h2>
        <div className="lg:pr-16 xl:pr-24">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            Quick, Easy, Reliable
          </h3>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
            - Book appointments with a few clicks.
            <br />
            - Find top doctors by availability.
            <br />
            - Manage appointments & history in one place.
            <br />
            <b>Get Started Now!</b>
            <br />
            Take charge of your health today.
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex items-center justify-center bg-[#edf2fa] rounded-xl">
        <img
          src={doctorImg}
          alt="Doctor illustration"
          className="rounded-lg shadow-lg shadow-gray-300 w-64 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
};

export default HomeSection;
