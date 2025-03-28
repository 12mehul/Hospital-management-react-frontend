import React from "react";
import { Link } from "react-router-dom";
import appointmentImg from "../../assets/img/appointment_booking_home.jpg";

const AppointmentSection = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 px-6 md:px-10 lg:px-14 flex items-center justify-center lg:justify-start">
        <img
          src={appointmentImg}
          alt="Appointment illustration"
          className="rounded-lg shadow-lg shadow-gray-300 w-64 md:w-80 lg:w-96"
        />
      </div>
      <div className="lg:w-1/2 w-full px-6 md:px-10 lg:px-14">
        <h2 className="mb-6 text-4xl md:text-5xl font-semibold text-blue-800 text-left">
          Book Appointment
        </h2>
        <div className="lg:pr-16 xl:pr-24">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            Quick & Easy Appointments
          </h3>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
            - Choose your doctor & time slot.
            <br />
            - Find top specialists with ease.
            <br />
            - Get instant confirmations & reminders.
            <br />
            <b>Start Booking Now!</b>
            <br />
            Your next appointment is a click away.
          </p>
          <Link to="/appointment" className="flex items-start my-5">
            <button className="button w-40" type="button">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
