import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="w-full mx-auto bg-sky-50 px-4 pt-4 shadow-lg shadow-sky-200/50 z-50">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-start">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <h2 className="flex items-start text-2xl font-semibold text-blue-800">
            HealthCare Wellness Center
          </h2>
        </div>
        <div>
          <button
            className="w-20 cursor-pointer py-2 font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400 rounded-xl inline-flex space-x-2 items-center justify-center"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
