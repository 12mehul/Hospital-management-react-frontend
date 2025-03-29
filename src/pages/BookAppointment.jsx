import React, { useState } from "react";
import backIcon from "../assets/icon/back-icon.jpg";
import { useAdminFetch } from "../customHooks/useAdminFetch";
import SpecialityLists from "../components/BookAppointment/SpecialityLists";
import DoctorLists from "../components/BookAppointment/DoctorLists";
import SlotLists from "../components/BookAppointment/SlotLists";
import FindPatients from "../components/BookAppointment/FindPatients";

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
        <h2 className="title">Find Doctor & Book An Appointment</h2>
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
          {step === 3 && <SlotLists nextStep={nextStep} />}
          {/* <!-- Step 4: Patients --> */}
          {step === 4 && <FindPatients />}
        </form>
      </div>
    </>
  );
};

export default BookAppointment;
