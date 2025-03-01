import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useAuth();
  const role = localStorage.getItem("role");

  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="max-w-2xl w-full h-auto bg-white p-3 rounded-xl shadow-lg shadow-sky-200/50">
        <h2 className="my-3 flex items-center justify-center text-xl font-semibold text-blue-800">
          Welcome,{" "}
          {role === "patient" ? "Patient" : role === "doctor" ? "Doctor" : ""}.
          Here is your profile information
        </h2>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your first name"
                  name="firstName"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your last name"
                  name="lastName"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your experience"
                  name="experience"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your license number"
                  name="licenseNumber"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                placeholder="Enter your phone"
                name="phone"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                placeholder="Enter your address"
                name="fullAddress.addressLine"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your city"
                  name="fullAddress.city"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your state"
                  name="fullAddress.state"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your country"
                  name="fullAddress.country"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                  placeholder="Enter your pincode"
                  name="fullAddress.pincode"
                />
              </div>
            </div>
            <button
              className="w-full py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
