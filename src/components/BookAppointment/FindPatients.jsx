import React, { useState } from "react";
import Loader from "../../common/Loader";
import { CloseIcon } from "../../assets/SVGIcons";

const FindPatients = ({
  loading,
  data,
  searchInput,
  setSearchInput,
  setSelectedPatient,
  onClose,
}) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClose = () => {
    setSearchInput("");
    setSelectedId(null);
    onClose();
  };

  const handleConfirm = () => {
    const selected = data?.patients?.find((p) => p._id === selectedId);
    if (selected) {
      setSelectedPatient({ ...selected, type: "other" });
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
      <div className="container mx-auto relative w-full max-w-2xl p-6 bg-white rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition">
        <button
          type="button"
          className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-rose-600"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Find Other Patients
        </h2>
        <input
          type="text"
          className="input-profile mb-4"
          placeholder="Enter Patient Name and ID"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {loading ? (
          <div className="p-2 flex items-center justify-center bg-white rounded-xl shadow-md shadow-gray-300">
            <Loader />
          </div>
        ) : (
          <div className="w-full p-1 flex flex-col gap-2 overflow-y-auto">
            {searchInput.length > 0 && data?.patients.length > 0 ? (
              data?.patients.map((patient) => (
                <div
                  key={patient._id}
                  className={`p-2 flex justify-between border-2 rounded-xl shadow cursor-pointer transition 
                    ${
                      selectedId === patient._id
                        ? "border-blue-600 bg-blue-100 shadow-blue-300"
                        : "border-cyan-100 border-b-cyan-300 shadow-gray-300 hover:shadow-sky-300"
                    }`}
                  onClick={() => setSelectedId(patient._id)}
                >
                  <h5 className="text-xl font-semibold tracking-tight text-gray-800 capitalize">
                    {patient.firstName + " " + patient.lastName}
                  </h5>
                  <p className="font-semibold text-gray-600">
                    {patient.patientID}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-2 flex items-center justify-center bg-white rounded-xl shadow-md shadow-gray-300">
                <p className="text-gray-500 font-semibold">No Patients Found</p>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-evenly mt-4">
          <button
            className="py-3 w-40 cursor-pointer font-medium text-white bg-rose-600 shadow-lg shadow-rose-500/50 hover:bg-rose-500 rounded-xl inline-flex space-x-2 items-center justify-center"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="button w-40"
            type="button"
            disabled={!selectedId}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindPatients;
