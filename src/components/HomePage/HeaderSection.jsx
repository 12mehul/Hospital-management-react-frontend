import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

const HeaderSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col gap-2 sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-18 h-18 rounded-lg" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="anchor-btn group">
            Home
            <span className="anchor-btn__underline"></span>
          </a>
          <a href="#appointment" className="anchor-btn group">
            Appointment
            <span className="anchor-btn__underline"></span>
          </a>
          <a href="#about" className="anchor-btn group">
            About
            <span className="anchor-btn__underline"></span>
          </a>
          <a href="#contact" className="anchor-btn group">
            Contact
            <span className="anchor-btn__underline"></span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-32 px-4 py-2 cursor-pointer font-semibold text-white bg-sky-600 rounded-xl shadow-lg shadow-sky-300/50 transition-all duration-300 ease-in-out transform hover:bg-sky-500 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2"
              type="button"
            >
              <span>Registration</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg block z-50">
                <Link
                  to="/patientRegister"
                  className="block text-center px-2 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                >
                  Patient
                </Link>
                {/* Horizontal Divider */}
                <div className="w-28 h-px bg-gray-400 mx-2"></div>
                <Link
                  to="/doctorRegister"
                  className="block text-center px-2 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                >
                  Doctor
                </Link>
              </div>
            )}
          </div>
          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-400"></div>
          {/* Horizontal Divider */}
          <div className="block md:hidden w-28 h-px bg-gray-400"></div>
          <Link to="/login">
            <button
              className="w-28 px-4 py-2 cursor-pointer font-semibold text-white bg-sky-600 rounded-xl shadow-lg shadow-sky-300/50 transition-all duration-300 ease-in-out transform hover:bg-sky-500 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2"
              type="button"
            >
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
