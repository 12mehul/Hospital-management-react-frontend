import React from "react";
// image
import { AddressIcon, EmailIcon, PhoneIcon } from "../../assets/SVGIcons";
import doctorProfile from "../../assets/img/doctorProfile.jpg";
import patientProfile from "../../assets/img/patientProfile.jpg";

const ProfileDetails = ({ user, handleClick }) => {
  const role = localStorage.getItem("role");

  return (
    <>
      {user && (
        <div className="max-w-4xl w-full h-auto p-10 bg-white rounded-2xl font-normal leading-relaxed text-gray-900 shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-400 hover:transition">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <img
                src={role === "doctor" ? doctorProfile : patientProfile}
                alt="Profile Picture"
                className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-sky-600 transition-transform duration-300 hover:scale-105 ring ring-gray-300"
              />
              <button
                className="mt-4 px-4 py-2 cursor-pointer bg-sky-600 text-white rounded-lg shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-colors duration-300 ring ring-gray-300 hover:ring-sky-300"
                onClick={() => handleClick("edit")}
              >
                Edit Profile
              </button>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-2xl font-bold text-indigo-800 mb-4 capitalize">
                {user.firstName + " " + user.lastName}
              </h1>
              {role === "doctor" && (
                <>
                  <h2 className="text-xl font-semibold text-indigo-800 mb-4">
                    Specialization
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {user.specializationId.title}
                  </p>

                  <h2 className="text-xl font-semibold text-indigo-800 mb-4">
                    Experience & License
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {user.experience} / License No: {user.licenseNumber}
                  </p>
                </>
              )}
              <h2 className="text-xl font-semibold text-indigo-800 mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <EmailIcon />
                  {user.email}
                </li>
                <li className="flex items-center">
                  <PhoneIcon />
                  {user.phone}
                </li>
                <li className="flex items-center capitalize">
                  <AddressIcon />
                  {user.fullAddress.addressLine}, {user.fullAddress.city},{" "}
                  {user.fullAddress.state}, {user.fullAddress.country},{" "}
                  {user.fullAddress.pincode}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
