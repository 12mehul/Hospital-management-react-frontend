import React from "react";
import { Link } from "react-router-dom";
import appointmentImg from "../../assets/img/appointment_booking_home.jpg";

const AppointmentSection = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-semibold text-blue-800">
        Book Your Appointment with Ease
      </h2>
      <div className="container mx-auto px-16 py-4 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Take control of your healthcare by booking appointments that fit
              your schedule:
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will
              search for opportunities that are in reach
            </p>
            <Link to="/appointment" className="flex items-start my-5">
              <button
                className="w-40 py-2 font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400 rounded-xl inline-flex space-x-2 items-center justify-center"
                type="button"
              >
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 flex items-center justify-start order-last lg:order-first">
          <img
            src={appointmentImg}
            alt="logo"
            className="rounded-lg shadow-lg shadow-gray-300 w-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AppointmentSection;
