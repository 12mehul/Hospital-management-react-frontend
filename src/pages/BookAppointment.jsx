import React, { useState } from "react";
import { useAdminFetch } from "../customHooks/useAdminFetch";
// image
import specialityImg from "../assets/img/cardio-img.png";
import doctorImg from "../assets/img/doctor-img.jpg";
import backIcon from "../assets/icon/back-icon.jpg";

const BookAppointment = () => {
  const { data, loading } = useAdminFetch("/speciality/count");
  const [step, setStep] = useState(1);

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  return (
    <>
      <div className="p-2 bg-white rounded-lg shadow-md">
        <h2 className="flex items-center justify-center text-2xl font-bold text-gray-700 uppercase">
          Find Doctor & Book An Appointment
        </h2>
      </div>
      <div className="p-1">
        <div className="mt-2 mb-2 flex justify-end">
          {step > 1 && (
            <div className="w-full flex items-center justify-start gap-1">
              <img
                src={backIcon}
                alt="Back"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span
                className="text-lg cursor-pointer font-medium text-blue-800 hover:text-rose-600"
                onClick={prevStep}
              >
                Back
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
            <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
              <div className="mx-auto w-64 h-72 p-5 flex flex-col items-center justify-center gap-y-10 bg-white rounded-xl shadow-md shadow-gray-300 cursor-pointer transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition">
                <div className="flex items-center justify-center border border-transparent bg-slate-100 p-4 rounded-full">
                  <img
                    src={specialityImg}
                    alt="speciality"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <label className="text-2xl font-bold tracking-wide text-black block">
                    {/* ${val.title} */}Cardiology
                  </label>
                  <label className="text-sm font-medium tracking-wide text-slate-500 block">
                    20+ Doctors
                  </label>
                </div>
              </div>
            </div>
          )}
          {/* <!-- Step 2: Doctors --> */}
          {step === 2 && (
            <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
              <div className="p-4 flex flex-col bg-white rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition">
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
                      className="px-4 cursor-pointer py-2 rounded-md flex-1 mx-1 font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500"
                      type="button"
                      onClick={nextStep}
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
            <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
              <div
                className="p-4 flex items-center bg-white rounded-xl shadow-md shadow-gray-300 cursor-pointer transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition"
                onClick={nextStep}
              >
                <div className="bg-blue-600 p-3 rounded-full text-center">
                  <p className="text-xl font-semibold text-white">05</p>
                </div>
                <div className="ml-4">
                  <div className="uppercase px-2 rounded-md text-white bg-green-400 font-semibold">
                    Paid
                  </div>
                  <p className="mt-2 text-gray-800">
                    DATE:
                    {/* ${new Date(val.date).toLocaleDateString()} */}2024-07-25
                  </p>
                  <p className="mt-2 text-gray-700">
                    TIME:
                    {/* ${val.time} */}07:45 AM
                  </p>
                  <p className="mt-2 font-semibold text-gray-600">
                    AMOUNT: Rs. 500/-
                  </p>
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
                className="w-40 cursor-pointer py-3 font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500 rounded-xl inline-flex space-x-2 items-center justify-center"
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
