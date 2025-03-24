import React, { useState } from "react";
import backIcon from "../assets/icon/back-icon.jpg";
import { useAdminFetch } from "../customHooks/useAdminFetch";
import SpecialityLists from "../components/BookAppointment/SpecialityLists";
import DoctorLists from "../components/BookAppointment/DoctorLists";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [specializationId, setSpecializationId] = useState(null);

  const { data: specialities, loading: loadingSpeciality } =
    useAdminFetch("/speciality/count");
  const { data: doctors, loading: loadingDoctor } = useAdminFetch(
    selectedSpeciality
      ? `/doctors?specializationId=${selectedSpeciality}`
      : "/doctors"
  );

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
              onClick={() => {
                setStep(2);
                setSelectedSpeciality(null);
                setSpecializationId(null);
              }}
            >
              Doctors
            </span>
          </div>
        </div>
        <form>
          {/* <!-- Step 1: Speciality --> */}
          {step === 1 && (
            <SpecialityLists
              loading={loadingSpeciality}
              data={specialities}
              setSelectedSpeciality={(id) => {
                setSelectedSpeciality(id);
                setSpecializationId(id);
                nextStep();
              }}
            />
          )}
          {/* <!-- Step 2: Doctors --> */}
          {step === 2 && (
            <DoctorLists
              loading={loadingDoctor}
              data={doctors}
              selectedSpeciality={selectedSpeciality}
              setSpecializationId={(id) => {
                setSpecializationId(id);
                nextStep();
              }}
              setSelectedDoctor={setSelectedDoctor}
            />
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
