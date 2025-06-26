import React, { useEffect, useReducer } from "react";
import backIcon from "../assets/icon/back-icon.jpg";
import { useAdminFetch } from "../customHooks/useAdminFetch";
import { useAuth } from "../context/AuthContext";
import SpecialityLists from "../components/BookAppointment/SpecialityLists";
import DoctorLists from "../components/BookAppointment/DoctorLists";
import SlotLists from "../components/BookAppointment/SlotLists";
import FindPatients from "../components/BookAppointment/FindPatients";
import FinalAppointmentCard from "../components/BookAppointment/FinalAppointmentCard";
import {
  bookAppointmentReducer,
  initialState,
} from "../reducers/bookAppointmentReducer";

const BookAppointment = () => {
  const { user } = useAuth();
  const role = localStorage.getItem("role");
  const [state, dispatch] = useReducer(bookAppointmentReducer, initialState);
  const {
    step,
    searchInput,
    isModalOpen,
    selectedSpeciality,
    selectedDoctor,
    selectedSlot,
    selectedPatient,
  } = state;

  const getPatientProfile = () => {
    return role === "patient" && user
      ? {
          _id: user._id,
          patientID: user.patientID,
          firstName: user.firstName,
          lastName: user.lastName,
          type: "self",
        }
      : null;
  };

  useEffect(() => {
    if (user && role === "patient") {
      dispatch({ type: "SET_SELECTED_PATIENT", payload: getPatientProfile() });
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

  const handleBack = () => dispatch({ type: "PREV_STEP" });
  const handleOpenModal = () => dispatch({ type: "TOGGLE_MODAL" });
  const handleCloseModal = () => dispatch({ type: "TOGGLE_MODAL" });
  const handleSearchInputChange = (value) =>
    dispatch({ type: "SET_SEARCH_INPUT", payload: value });

  const handleSpecialityClick = () =>
    dispatch({ type: "RESET", payload: getPatientProfile() });

  const handleDoctorsClick = () => dispatch({ type: "OPEN_DOCTOR_TAB" });

  const handleSpecialitySelect = (id) =>
    dispatch({ type: "SET_SPECIALITY", payload: id });

  const handleDoctorSelect = (doctorId, specialityId) =>
    dispatch({ type: "SET_DOCTOR", payload: { doctorId, specialityId } });

  const handleSlotSelect = (id) => dispatch({ type: "SET_SLOT", payload: id });

  const handlePatientSelect = (patient) =>
    dispatch({ type: "SET_SELECTED_PATIENT", payload: patient });

  const onCancel = () =>
    dispatch({ type: "RESET", payload: getPatientProfile() });

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
                onClick={handleBack}
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
              onClick={handleSpecialityClick}
            >
              Speciality
            </button>
            <button
              className={`px-6 py-3 text-gray-600 font-medium transition-colors cursor-pointer ${
                step === 2
                  ? "text-blue-800 border-b-2 border-blue-600"
                  : "hover:text-blue-700"
              }`}
              onClick={handleDoctorsClick}
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
              onClick={handleOpenModal}
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
              setSelectedDoctor={(doctorId, specialityId) =>
                handleDoctorSelect(doctorId, specialityId)
              }
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
              onCancel={onCancel}
            />
          )}
          {/* <!-- Find Other Patients --> */}
          {isModalOpen && (
            <FindPatients
              loading={loadingPatient}
              data={patients}
              searchInput={searchInput}
              setSearchInput={handleSearchInputChange}
              setSelectedPatient={handlePatientSelect}
              onClose={handleCloseModal}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default BookAppointment;
