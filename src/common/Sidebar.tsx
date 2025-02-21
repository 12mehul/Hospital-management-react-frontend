import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative h-screen w-60 bg-white duration-200 ease-in-out rounded-b-md shadow-md shadow-sky-200/50 z-50">
      <div className="px-3 py-4 rounded">
        <ul className="space-y-2">
          <li>
            <span className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600">
              <span className="text-xl">🆔</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Patient: 123456
              </span>
            </span>
          </li>
          <li>
            <Link
              to="/appointment"
              className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600"
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
              className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600"
            >
              <span className="text-xl">📋</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Appointment List
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/patients"
              className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600"
            >
              <span className="text-xl">🧑‍⚕️</span>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Patients List
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center p-2 text-base font-semibold rounded-lg group hover:bg-purple-100 hover:text-blue-600"
            >
              <span className="text-xl">👤</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
