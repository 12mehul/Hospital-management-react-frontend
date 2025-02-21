import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const HeaderSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full mx-auto bg-sky-50 p-4 rounded-xl shadow-lg shadow-sky-200/50 z-50">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-start">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <h2 className="flex items-start text-2xl font-semibold text-blue-800">
            HealthCare Wellness Center
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-20 py-2 cursor-pointer font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400 rounded-xl inline-flex space-x-2 items-center justify-center focus:outline-none"
              type="button"
            >
              Register
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg block">
                <Link
                  to="/patientRegister"
                  className="block px-2 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                >
                  Patient Registration
                </Link>
                <Link
                  to="/doctorRegister"
                  className="block px-2 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                >
                  Doctor Registration
                </Link>
              </div>
            )}
          </div>
          <Link to="/login">
            <button
              className="w-20 py-2 cursor-pointer font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400 rounded-xl inline-flex space-x-2 items-center justify-center"
              type="button"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-2 md:mt-0 w-full flex items-center justify-center">
        <ul className="p-2 flex gap-4 text-2xl font-semibold bg-white rounded-md shadow-md shadow-sky-300/50">
          <li>
            <a
              className="menu-link text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-cyan-500 rounded-b-md"
              aria-current="page"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="menu-link text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-cyan-500 rounded-b-md"
              href="#appointment"
            >
              Appointment
            </a>
          </li>
          <li>
            <a
              className="menu-link text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-cyan-500 rounded-b-md"
              href="#about"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderSection;
