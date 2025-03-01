import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const isActive = (path) => location.pathname === path;
  const role = localStorage.getItem("role");

  return (
    <main className="w-60 bg-white duration-200 ease-in-out rounded-b-md shadow-lg shadow-sky-400/50 z-50">
      <div className="px-3 py-4 rounded">
        <ul className="space-y-2">
          {role === "patient" && (
            <li>
              <span className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600">
                <span className="text-xl">🆔</span>
                <span className="ml-3">Patient:</span>
                {user && user.patientID && (
                  <span className="text-blue-700 ml-1">
                    {user.patientID}
                  </span>
                )}
              </span>
            </li>
          )}
          <li>
            <Link
              to="/appointment"
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600 ${
                isActive("/appointment") ? "text-blue-600 bg-purple-100" : ""
              }`}
            >
              <span className="text-xl">📅</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Book Appointment
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/appointment/lists"
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600 ${
                isActive("/appointment/lists")
                  ? "text-blue-600 bg-purple-100"
                  : ""
              } `}
            >
              <span className="text-xl">📋</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Appointment Lists
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/patients"
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600 ${
                isActive("/patients") ? "text-blue-600 bg-purple-100" : ""
              } `}
            >
              <span className="text-xl">🧑‍⚕️</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Patient Lists
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600 ${
                isActive("/profile") ? "text-blue-600 bg-purple-100" : ""
              } `}
            >
              <span className="text-xl">👤</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
