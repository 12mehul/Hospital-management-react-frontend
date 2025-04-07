import React, { useEffect, useState } from "react";
import backIcon from "../assets/icon/back-icon.jpg";
import { useAdminFetch } from "../customHooks/useAdminFetch";
import { useToast } from "../context/ToastProvider";
import { useAuth } from "../context/AuthContext";
import SpecialityLists from "../components/BookAppointment/SpecialityLists";
import DoctorLists from "../components/BookAppointment/DoctorLists";
import SlotLists from "../components/BookAppointment/SlotLists";
import FindPatients from "../components/BookAppointment/FindPatients";
import FinalAppointmentCard from "../components/BookAppointment/FinalAppointmentCard";

const BookAppointment = () => {
  const { user } = useAuth();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = localStorage.getItem("role");

  const [selectedSpeciality, setSelectedSpeciality] = useState({
    id: null,
    isFilter: "filterDoctors",
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  console.log(selectedPatient);

  useEffect(() => {
    if (user && role === "patient") {
      setSelectedPatient({
        _id: user._id,
        patientID: user.patientID,
        firstName: user.firstName,
        lastName: user.lastName,
        type: "self",
      });
    }
  }, [user, role]);

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

  const prevStep = () => setStep((prev) => prev - 1);
  const nextStep = () => setStep((prev) => prev + 1);

  const handleSpecialitySelect = (id) => {
    setSelectedSpeciality({ id, isFilter: "filterDoctors" });
    nextStep();
  };

  const handleDoctorSelect = (id) => {
    setSelectedSpeciality({ id, isFilter: "selectedDoctor" });
    nextStep();
  };

  const handleSlotSelect = (id) => {
    setSelectedSlot(id);
    nextStep();
  };

  const handleStepOneClick = () => {
    setStep(1);
    setSelectedSpeciality({ id: null, isFilter: "filterDoctors" });
  };

  const handleStepTwoClick = () => {
    setStep(2);
    setSelectedSpeciality({ id: null, isFilter: "allDoctors" });
    setSelectedDoctor(null);
  };

  const onCancel = () => {
    setSelectedSpeciality({ id: null, isFilter: "filterDoctors" });
    setSelectedDoctor(null);
    setSelectedSlot(null);
    setSelectedPatient(null);
    setStep(1);
  };

  const handleCancelAppointment = () => {
    onCancel();
    toast.error("Appointment Cancelled");
  };

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
              onClick={handleStepOneClick}
            >
              Speciality
            </button>
            <button
              className={`px-6 py-3 text-gray-600 font-medium transition-colors cursor-pointer ${
                step === 2
                  ? "text-blue-800 border-b-2 border-blue-600"
                  : "hover:text-blue-700"
              }`}
              onClick={handleStepTwoClick}
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
              setSelectedSpeciality={handleSpecialitySelect}
            />
          )}
          {/* <!-- Step 2: Doctors --> */}
          {step === 2 && (
            <DoctorLists
              loading={loadingDoctor}
              data={doctors}
              selectedSpeciality={selectedSpeciality}
              setSelectedSpeciality={handleDoctorSelect}
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
              setSelectedSlot={handleSlotSelect}
            />
          )}
          {/* <!-- Step 4: Final Book Appointment --> */}
          {step === 4 && (
            <FinalAppointmentCard
              patient={selectedPatient}
              speciality={specialities?.specialities.find(
                (s) => s._id === selectedSpeciality.id
              )}
              doctor={doctors?.doctors.find((d) => d._id === selectedDoctor)}
              slot={slots?.slots.find((s) => s._id === selectedSlot)}
              onCancel={handleCancelAppointment}
            />
          )}
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
