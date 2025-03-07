import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// image
import logo from "../assets/img/logo.jpg";
import numberIcon from "../assets/icon/id_number-icon.jpg";
import bookedAppIcon from "../assets/icon/book_appointment-icon.jpg";
import appointmentIcon from "../assets/icon/appointment_list-icon.jpg";
import patientIcon from "../assets/icon/patient_list-icon.jpg";
import profileIcon from "../assets/icon/profile-icon.jpg";
import logoutIcon from "../assets/icon/logout-icon.jpg";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path) => location.pathname === path;
  const role = localStorage.getItem("role");

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 flex items-center bg-gradient-to-r from-blue-600 to-indigo-500">
        <img src={logo} alt="logo" className="h-12 w-12 rounded-lg" />
      </div>
      <nav className="mt-4 px-2">
        {role === "patient" && (
          <div>
            <span className="flex items-center p-2 text-base font-medium rounded-md hover:bg-indigo-100 hover:text-indigo-600">
              <span className="text-xl">🆔</span>
              <span className="ml-3 text-gray-600">Patient:</span>
              {user && user.patientID && (
                <span className="text-indigo-700 ml-1">{user.patientID}</span>
              )}
            </span>
          </div>
        )}
        <Link
          to="/appointment"
          className={`mt-1 flex items-center p-2 text-base font-medium rounded-md ${
            isActive("/appointment")
              ? "text-indigo-700 bg-indigo-100"
              : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <span className="text-xl">📅</span>
          <span className="flex-1 ml-3 whitespace-nowrap">
            Book Appointment
          </span>
        </Link>
        <Link
          to="/appointment/lists"
          className={`mt-1 flex items-center p-2 text-base font-medium rounded-md ${
            isActive("/appointment/lists")
              ? "text-indigo-700 bg-indigo-100"
              : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <span className="text-xl">📋</span>
          <span className="flex-1 ml-3 whitespace-nowrap">
            Appointment Lists
          </span>
        </Link>
        <Link
          to="/patients"
          className={`mt-1 flex items-center p-2 text-base font-medium rounded-md ${
            isActive("/patients")
              ? "text-indigo-700 bg-indigo-100"
              : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <span className="text-xl">🧑‍⚕️</span>
          <span className="flex-1 ml-3 whitespace-nowrap">Patient Lists</span>
        </Link>
        <button className="mt-1 w-full cursor-pointer flex items-center p-2 text-base font-medium rounded-md text-gray-600 hover:bg-red-100 hover:text-rose-600">
          <img
            src={logoutIcon}
            alt="Logout"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="ml-3">Logout</span>
        </button>
      </nav>
      <div className="w-60 h-px bg-gray-400 mx-2 my-2"></div>
      <div className="mt-1 p-4">
        <Link
          to="/profile"
          className={`flex items-center p-2 text-base font-medium rounded-md ${
            isActive("/profile")
              ? "text-indigo-700 bg-indigo-100"
              : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <img
            className="h-10 w-10 rounded-full"
            src={profileIcon}
            alt="User"
          />
          <div className="ml-3">
            <p className="text-sm font-medium">Rajesh Maheshwari</p>
            <p className="text-xs font-medium text-gray-500">View Profile</p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
