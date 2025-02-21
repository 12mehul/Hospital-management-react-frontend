import React from "react";
import { Link } from "react-router-dom";
import appointmentImg from "../../assets/img/appointment.png";

const AppointmentSection = () => {
  return (
    <div className="m-4 py-2 border-b-2 border-slate-500 rounded-b-md">
      <h2 className="pt-10 sm:pt-5 md:pt-4 text-center text-2xl font-semibold text-blue-800">
        Book Your Appointment with Ease
      </h2>
      <div className="w-full pt-2 flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        <div className="max-w-2xl mx-10 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-sky-500">
            Take control of your healthcare by booking appointments that fit
            your schedule:
          </h3>
          <p className="text-base font-normal text-gray-700">
            Choose your preferred doctor, select an available time slot, and
            book your appointment in just a few steps.
          </p>
          <p className="text-base font-normal text-gray-700">
            Need specialized care? Our app makes it easy to find and schedule
            appointments with top surgeons and specialists.
          </p>
          <p className="text-base font-normal text-gray-700">
            Browse through available time slots and pick the one that works best
            for you. Whether it's for today or a future date, we've got options
            to suit your needs.
          </p>
          <p className="text-base font-normal text-gray-700">
            Receive instant confirmation and reminders about your appointments,
            so you never miss a visit.
          </p>
          <span className="text-base font-normal text-gray-700">
            <b>Start Booking Now!</b> <br />
            Your next appointment is just a click away. Find the right time and
            get the care you need.
          </span>
        </div>
        <img src={appointmentImg} alt="logo" className="w-96 h-96 rounded-md" />
      </div>
      <Link to="/appointment" className="flex items-start justify-center my-2">
        <button
          className="w-40 py-2 font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400 rounded-xl inline-flex space-x-2 items-center justify-center"
          type="button"
        >
          Book Appointment
        </button>
      </Link>
    </div>
  );
};

export default AppointmentSection;
