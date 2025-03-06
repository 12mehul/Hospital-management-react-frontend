import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/img/logo.jpg";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path) => location.pathname === path;
  const role = localStorage.getItem("role");

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 flex items-center">
        <img src={logo} alt="logo" className="h-12 w-12 rounded-lg" />
      </div>
      <div className="w-60 h-px bg-gray-400 mx-2"></div>
      <nav className="mt-5 px-2">
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
        <button className="mt-1 w-full flex items-center p-2 text-base font-medium rounded-md text-gray-600 hover:bg-red-100 hover:text-rose-600">
          {/* <FaSignOutAlt className="text-xl" /> */}
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
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
