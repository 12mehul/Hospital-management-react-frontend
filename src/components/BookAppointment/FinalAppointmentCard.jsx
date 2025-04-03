import React from "react";

const FinalAppointmentCard = ({
  selectedPatient,
  selectedSpeciality,
  selectedDoctor,
  selectedSlot,
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h3 className="text-xl font-semibold mb-2">Confirm Your Appointment</h3>

      <div className="border-b pb-2 mb-2">
        <p>
          <strong>Patient Name:</strong>{" "}
          {selectedPatient?.name || "Not selected"}
        </p>
        <p>
          <strong>Patient ID:</strong> {selectedPatient?.id || "Not selected"}
        </p>
      </div>

      <div className="border-b pb-2 mb-2">
        <p>
          <strong>Speciality:</strong>{" "}
          {selectedSpeciality?.name || "Not selected"}
        </p>
      </div>

      <div className="border-b pb-2 mb-2">
        <p>
          <strong>Doctor:</strong> {selectedDoctor?.name || "Not selected"}
        </p>
      </div>

      <div className="border-b pb-2 mb-2">
        <p>
          <strong>Slot:</strong>{" "}
          {selectedSlot?.date
            ? `${selectedSlot.date} at ${selectedSlot.time}`
            : "Not selected"}
        </p>
      </div>

      <button
        onClick={onSubmit}
        className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        disabled={
          !selectedPatient?.id || !selectedDoctor?.id || !selectedSlot?.id
        }
      >
        Book Appointment
      </button>
    </div>
  );
};

export default FinalAppointmentCard;
