import React from "react";
import specialityImg from "../assets/img/speciality-icon.jpeg";
import doctorImg from "../assets/img/doctor-profile.jpg";

const BookAppointment = () => {
  return (
    <div>
      <h2 className="flex items-center justify-center text-2xl font-semibold text-gray-700 uppercase">
        Find Doctor & Book An Appointment
      </h2>
      <div className="p-1">
        <div className="mt-2 mb-2 flex gap-3 items-center justify-center">
          <span className="w-64 py-3 text-black bg-white shadow-md shadow-blue-500/50 rounded-full inline-flex space-x-2 items-center justify-center text-xl font-medium cursor-pointer">
            Speciality
          </span>
          <span className="w-64 py-3 text-black bg-white shadow-md shadow-blue-500/50 rounded-full inline-flex space-x-2 items-center justify-center text-xl font-medium cursor-pointer">
            Doctors
          </span>
        </div>
        <form>
          {/* <!-- Step 1: Speciality --> */}
          <div>
            <ul className="grid grid-cols-1 gap-8 px-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
              <li className="flex w-full gap-2 p-2 bg-slate-50 border border-gray-600 rounded hover:transition shadow-md hover:border-sky-800 hover:shadow-sky-600 cursor-pointer">
                <img
                  src={specialityImg}
                  alt="speciality"
                  className="w-16 h-16 rounded-full border-2 border-red-500 object-cover"
                />
                <h2 className="pl-2 pt-1 font-semibold md:text-xl text-black">
                  {/* ${val.title} */}Dentist
                </h2>
              </li>
            </ul>
          </div>
          {/* <!-- Step 2: Doctors --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-sky-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {/* ${val.firstName + " " + val.lastName} */}lastName
                  </h3>
                  <p className="text-gray-600 text-base mb-4 break-all">
                    {/* ${val.specializationId?.title} */}lastName
                  </p>
                </div>
                <img
                  src={doctorImg}
                  alt="Profile"
                  className="w-12 rounded-full mb-4 shadow-md"
                />
              </div>
              <div className="flex w-full">
                <button
                  className="px-4 cursor-pointer py-2 rounded-md flex-1 mx-1 font-medium text-white bg-sky-500 shadow-lg shadow-sky-500/50 hover:bg-sky-400"
                  type="button"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Step 3: Slots --> */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            <div className="flex gap-4 items-center justify-center border rounded-lg shadow-md transform transition duration-500 hover:scale-105 p-2">
              <span className="text-xl">📅</span>
              <div>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                  {/* ${new Date(val.date).toLocaleDateString()} */}lastName
                </h5>
                <h5 className="text-lg font-medium tracking-tight text-blue-600">
                  {/* ${val.time} */}lastName
                </h5>
              </div>
            </div>
          </div>
          {/* <!-- Step 4: Patients --> */}
          <div className="py-4">
            <input
              type="text"
              className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
              placeholder="Enter Patient Name and ID"
            />
          </div>
          <div className="w-full flex flex-col gap-1 bg-white rounded-lg shadow-md overflow-y-auto">
            <div className="flex justify-between p-3 hover:shadow-md hover:shadow-sky-400 cursor-pointer">
              <h5 className="text-xl font-semibold tracking-tight text-gray-800 capitalize">
                {/* ${patient.firstName + " " + patient.lastName} */}lastName
              </h5>
              <p className="font-semibold text-gray-600">
                {/* ${patient.patientID} */}12345
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="w-40 cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
            >
              Submit
            </button>
          </div>
          {/* <!-- Navigation Buttons --> */}
          <div className="flex justify-start mt-4">
            <button
              type="button"
              className="w-40 cursor-pointer py-3 font-medium text-white bg-gray-500 shadow-lg shadow-gray-500/50 hover:bg-gray-400 rounded-xl inline-flex space-x-2 items-center justify-center"
              disabled
            >
              Prev
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
