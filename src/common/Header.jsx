import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <main className="p-3 bg-sky-50 shadow-lg shadow-sky-200/50 z-50">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <h2 className="flex items-center text-2xl font-semibold text-blue-800">
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
    </main>
  );
};

export default Header;
