import React, { useState } from "react";
import specialityImg from "../assets/img/speciality-icon.jpeg";
import doctorImg from "../assets/img/doctor-profile.jpg";
import { useFetch } from "../customHooks/useFetch";

const BookAppointment = () => {
  const { data, loading } = useFetch("/speciality");

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <h2 className="flex items-center justify-center text-2xl font-semibold text-gray-700 uppercase">
        Find Doctor & Book An Appointment
      </h2>
      <div className="p-1">
        <div className="mt-2 mb-2 flex justify-end">
          {step > 1 && (
            <div className="w-full flex p-3">
              <span
                className="text-xl cursor-pointer font-semibold text-blue-800 hover:text-red-600"
                onClick={prevStep}
              >
                Back ↩️
              </span>
            </div>
          )}
          <div className="flex gap-3 justify-end">
            <span
              className={`w-24 py-3 hover:text-blue-700 bg-white shadow-md shadow-blue-500/50 rounded-2xl inline-flex space-x-2 items-center justify-center text-base font-medium cursor-pointer ${
                step === 1
                  ? "text-blue-800 underline"
                  : "text-black no-underline"
              }`}
              onClick={() => setStep(1)}
            >
              Speciality
            </span>
            <span
              className={`w-24 py-3 hover:text-blue-700 bg-white shadow-md shadow-blue-500/50 rounded-2xl inline-flex space-x-2 items-center justify-center text-base font-medium cursor-pointer ${
                step === 2
                  ? "text-blue-800 underline"
                  : "text-black no-underline"
              }`}
              onClick={() => setStep(2)}
            >
              Doctors
            </span>
          </div>
        </div>
        <form>
          {/* <!-- Step 1: Speciality --> */}
          {step === 1 && (
            <>
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
            </>
          )}
          {/* <!-- Step 2: Doctors --> */}
          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-sky-600 group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between my-3">
                    <div className="relative w-full h-[4rem] flex items-center justify-end border-l-4 border-sky-600 rounded-tr-full rounded-br-full bg-sky-100">
                      <img
                        className="absolute right-2 z-30 w-12 h-12 rounded-full border-2 border-gray-200"
                        src={doctorImg}
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <h2 className="pl-4 text-xl font-semibold capitalize">
                    {/* ${val.firstName + " " + val.lastName} */}lastName
                  </h2>
                  <p className="pl-4 text-gray-800 mb-3 break-all">
                    {/* ${val.specializationId?.title} */}lastName
                  </p>
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
            </div>
          )}
          {/* <!-- Step 3: Slots --> */}
          {step === 3 && (
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
          )}
          {/* <!-- Step 4: Patients --> */}
          {step === 4 && (
            <>
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
                    {/* ${patient.firstName + " " + patient.lastName} */}
                    lastName
                  </h5>
                  <p className="font-semibold text-gray-600">
                    {/* ${patient.patientID} */}12345
                  </p>
                </div>
              </div>
            </>
          )}
          {/* <!-- Submit Buttons --> */}
          {step === 4 && (
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="w-40 cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default BookAppointment;
