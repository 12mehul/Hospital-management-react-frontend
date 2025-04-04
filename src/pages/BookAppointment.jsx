import React, { useState } from "react";
import backIcon from "../assets/icon/back-icon.jpg";
import { useAdminFetch } from "../customHooks/useAdminFetch";
import SpecialityLists from "../components/BookAppointment/SpecialityLists";
import DoctorLists from "../components/BookAppointment/DoctorLists";
import SlotLists from "../components/BookAppointment/SlotLists";
import FindPatients from "../components/BookAppointment/FindPatients";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedSpeciality, setSelectedSpeciality] = useState({
    id: null,
    isFilter: "filterDoctors",
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("id");
  const loggedInPatientId = role === "patient" ? userId : null;

  const { data: specialities, loading: loadingSpeciality } =
    useAdminFetch("/speciality/count");
  const { data: doctors, loading: loadingDoctor } = useAdminFetch(
    selectedSpeciality.id && selectedSpeciality.isFilter === "filterDoctors"
      ? `/doctors?specializationId=${selectedSpeciality.id}`
      : selectedSpeciality.isFilter === "allDoctors"
      ? `/doctors`
      : null
  );
  const { data: slots, loading: loadingSlot } = useAdminFetch(
    selectedDoctor ? `/slots?doctorId=${selectedDoctor}` : null
  );
  const { data: patients, loading: loadingPatient } = useAdminFetch(
    searchInput ? `/patients/search?name=${searchInput}` : null
  );

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  return (
    <>
      <div className="p-2 bg-white rounded-lg shadow-md">
        <h2 className="title">Find Doctor & Book An Appointment</h2>
      </div>
      <div className="p-1">
        <div className="my-2 flex justify-center">
          {step > 1 && (
            <div className="flex items-center justify-start gap-1">
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
          <div className="flex border-b border-gray-300 w-fit mx-auto">
            <button
              className={`px-6 py-3 text-gray-600 font-medium transition-colors cursor-pointer ${
                step === 1
                  ? "text-blue-800 border-b-2 border-blue-600"
                  : "hover:text-blue-700"
              }`}
              onClick={() => setStep(1)}
            >
              Speciality
            </button>
            <button
              className={`px-6 py-3 text-gray-600 font-medium transition-colors cursor-pointer ${
                step === 2
                  ? "text-blue-800 border-b-2 border-blue-600"
                  : "hover:text-blue-700"
              }`}
              onClick={() => {
                setStep(2);
                setSelectedSpeciality({ id: null, isFilter: "allDoctors" });
                setSelectedDoctor(null);
              }}
            >
              Doctors
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                step === 1
                  ? "text-gray-600 hover:text-blue-700 cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              disabled={step > 1}
              onClick={() => setIsModalOpen(true)}
            >
              Other Patients
            </button>
          </div>
        </div>
        <form>
          {/* <!-- Step 1: Speciality --> */}
          {step === 1 && (
            <SpecialityLists
              loading={loadingSpeciality}
              data={specialities}
              setSelectedSpeciality={(id) => {
                setSelectedSpeciality({ id, isFilter: "filterDoctors" });
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
              setSelectedSpeciality={(id) => {
                setSelectedSpeciality({ id, isFilter: "selectedDoctor" });
                nextStep();
              }}
              setSelectedDoctor={setSelectedDoctor}
            />
          )}
          {/* <!-- Step 3: Slots --> */}
          {step === 3 && (
            <SlotLists
              loading={loadingSlot}
              data={slots}
              doctors={doctors}
              selectedDoctor={selectedDoctor}
              setSelectedSlot={(id) => {
                setSelectedSlot(id);
                nextStep();
              }}
            />
          )}
          {/* <!-- Step 4: Final Book Appointment --> */}
          {/* <!-- Find Other Patients --> */}
          {isModalOpen && (
            <FindPatients
              loading={loadingPatient}
              data={patients}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setSelectedPatient={setSelectedPatient}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default BookAppointment;
