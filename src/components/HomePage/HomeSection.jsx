import React from "react";
import doctorImg from "../../assets/img/doctor.png";

const HomeSection = () => {
  return (
    <div className="m-4 py-2 border-b-2 border-slate-500 rounded-b-md">
      <h2 className="pt-10 sm:pt-5 md:pt-4 text-center text-2xl font-semibold text-blue-800">
        Welcome to our HealthCare Wellness Center!
      </h2>
      <div className="w-full pt-2 flex flex-col md:flex-row items-center justify-center gap-4">
        <img src={doctorImg} alt="logo" className="w-96 h-96 rounded-md" />
        <div className="max-w-2xl mx-10 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-sky-500">
            Your health and convenience are our top priorities. Our
            user-friendly platform allows you to:
          </h3>
          <p className="text-base font-normal text-gray-700">
            Schedule your appointments with just a few clicks. Whether you're
            looking for a general practitioner or a specialist, we've got you
            covered.
          </p>
          <p className="text-base font-normal text-gray-700">
            Searching for the right surgeon or specialist? Our app helps you
            find the best doctors based on their available time slots, so you
            can get the care you need when it suits you best.
          </p>
          <p className="text-base font-normal text-gray-700">
            Keep track of your appointments and medical history all in one
            place. Our app is designed to make healthcare management simple and
            stress-free.
          </p>
          <span className="text-base font-normal text-gray-700">
            <b>Get Started Now!</b> <br />
            Find the right doctor, book an appointment, and take control of your
            health with ease.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
