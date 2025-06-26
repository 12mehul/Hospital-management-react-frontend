import { useToast } from "../../context/ToastProvider";
import adminFetch from "../../axiosbase/interceptors";

const FinalAppointmentCard = ({
  patient,
  speciality,
  doctor,
  slot,
  onCancel,
}) => {
  const toast = useToast();

  const handleCancelAppointment = () => {
    onCancel();
    toast.error("Appointment Cancelled");
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    if (!speciality._id) {
      toast.error("Please select a speciality");
      return;
    }
    if (!doctor._id) {
      toast.error("Please select a doctor");
      return;
    }
    if (!slot._id) {
      toast.error("Please select a slot");
      return;
    }
    if (!patient?._id) {
      toast.error("Please select a patient");
      return;
    }

    const appointmentData = {
      specializationId: speciality._id,
      doctorId: doctor._id,
      slotId: slot._id,
      patientId: patient._id,
    };

    try {
      const res = await adminFetch.post("/appointments", appointmentData);
      if (res.data) {
        toast.success(res.data.msg);
        setTimeout(() => onCancel(), 1000);
      }
    } catch (error) {
      toast.error(error.response?.data.msg || "Failed to book appointment");
    }
  };

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
            onClick={handleCancelAppointment}
          >
            Cancel Appointment
          </button>
          <button
            className="button w-42 text-sm"
            type="button"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalAppointmentCard;
