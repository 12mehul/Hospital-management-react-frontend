import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastProvider";
// image
import logo from "../assets/img/logo.jpg";
import numberIcon from "../assets/icon/id_number-icon.jpg";
import bookedAppIcon from "../assets/icon/book_appointment-icon.jpg";
import appointmentIcon from "../assets/icon/appointment_list-icon.jpg";
import patientIcon from "../assets/icon/patient_list-icon.jpg";
import profileIcon from "../assets/icon/profile-icon.jpg";
import logoutIcon from "../assets/icon/logout-icon.jpg";
import closeIcon from "../assets/icon/back-icon.jpg";
import openIcon from "../assets/icon/arrow_next-icon.jpg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toast = useToast();
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path) => location.pathname === path;
  const role = localStorage.getItem("role");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    toast.error("Logout Successfully!");
    localStorage.clear();
    setTimeout(() => (window.location.href = "/login"), 1000);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`fixed z-50 p-2 cursor-pointer bg-white rounded-lg shadow-md md:hidden transition-all duration-300 hover:bg-gray-100
          ${isOpen ? "top-4 left-48" : "top-5"}`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <img
            src={closeIcon}
            alt="close"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <img
            src={openIcon}
            alt="open"
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block`}
      >
        <div className="p-4 flex items-center bg-gradient-to-r from-blue-600 to-indigo-500">
          <img src={logo} alt="logo" className="h-12 w-12 rounded-lg" />
        </div>
        <nav className="mt-4 px-2">
          {role === "patient" && (
            <div>
              <span className="flex items-center gap-3 p-2 text-base font-medium rounded-md hover:bg-indigo-100 hover:text-indigo-600">
                <img src={numberIcon} alt="id" className="w-7 h-7 rounded-md" />
                <span className="text-gray-600">Patient:</span>
                {user && user.patientID && (
                  <span className="text-indigo-700">{user.patientID}</span>
                )}
              </span>
            </div>
          )}
          <Link
            to="/appointment"
            className={`mt-1 flex items-center gap-3 p-2 text-base font-medium rounded-md ${
              isActive("/appointment")
                ? "text-indigo-700 bg-indigo-100"
                : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
            onClick={closeSidebar}
          >
            <img
              src={bookedAppIcon}
              alt="book-appointment"
              className="w-7 h-7 rounded-md"
            />
            <span className="flex-1 whitespace-nowrap">Book Appointment</span>
          </Link>
          <Link
            to="/appointment/lists"
            className={`mt-1 flex items-center gap-3 p-2 text-base font-medium rounded-md ${
              isActive("/appointment/lists")
                ? "text-indigo-700 bg-indigo-100"
                : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
            onClick={closeSidebar}
          >
            <img
              src={appointmentIcon}
              alt="appointment"
              className="w-7 h-7 rounded-md"
            />
            <span className="flex-1 whitespace-nowrap">Appointment Lists</span>
          </Link>
          <Link
            to="/patients"
            className={`mt-1 flex items-center gap-3 p-2 text-base font-medium rounded-md ${
              isActive("/patients")
                ? "text-indigo-700 bg-indigo-100"
                : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
            onClick={closeSidebar}
          >
            <img
              src={patientIcon}
              alt="patient"
              className="w-7 h-7 rounded-md"
            />
            <span className="flex-1 whitespace-nowrap">Patient Lists</span>
          </Link>
          <button
            className="mt-1 w-full cursor-pointer flex items-center gap-3 p-2 text-base font-medium rounded-md text-rose-500 hover:bg-red-100 hover:text-rose-600"
            onClick={handleLogout}
          >
            <img
              src={logoutIcon}
              alt="Logout"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>Logout</span>
          </button>
        </nav>
        <div className="w-60 h-px bg-gray-400 mx-2 my-2"></div>
        <div className="mt-1 p-4">
          <Link
            to="/profile"
            className={`flex items-center gap-3 p-2 text-base font-medium rounded-md ${
              isActive("/profile")
                ? "text-indigo-700 bg-indigo-100"
                : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
            }`}
            onClick={closeSidebar}
          >
            <img
              className="h-10 w-10 rounded-full"
              src={profileIcon}
              alt="User"
            />
            <div>
              {user && user.firstName && (
                <p className="text-sm font-medium capitalize">
                  {user.firstName + " " + user.lastName}
                </p>
              )}
              <p className="text-xs font-medium text-gray-500">View Profile</p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
