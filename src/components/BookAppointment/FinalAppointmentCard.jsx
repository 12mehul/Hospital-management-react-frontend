import React from "react";

const FinalAppointmentCard = ({
  patient,
  speciality,
  doctor,
  slot,
  onCancel,
}) => {
  return (
    <div className="mt-6">
      <div className="max-w-lg mx-auto h-auto p-6 bg-white rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition">
        <h2 className="title mb-3">CONFIRM YOUR APPOINTMENT</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm min-w-[80px]">Patient ID:</p>
            <p className="text-lg font-semibold text-indigo-500">
              {patient?.patientID || "Not Selected"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm min-w-[80px]">Patient:</p>
            <p className="text-lg font-semibold text-blue-700 capitalize">
              {patient?.firstName || patient?.lastName
                ? `${patient.firstName + " " + patient.lastName}`
                : "Not Selected"}
            </p>
            {patient?.type === "other" && (
              <p className="text-base text-gray-700 font-semibold">
                (Other Patient)
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm min-w-[80px]">Doctor:</p>
            <p className="text-lg font-semibold capitalize">
              Dr. {doctor?.firstName + " " + doctor?.lastName},
            </p>
            <p className="text-base text-gray-700 font-semibold">
              {speciality?.title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm min-w-[80px]">Slot:</p>
            <p>
              {new Date(slot?.date).toLocaleDateString()} at {slot?.time}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly mt-6">
          <button
            className="button--danger w-42 text-sm"
            type="button"
            onClick={onCancel}
          >
            Cancel Appointment
          </button>
          <button className="button w-42 text-sm" type="submit">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalAppointmentCard;
