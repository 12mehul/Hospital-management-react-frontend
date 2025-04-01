import React from "react";
import Loader from "../../common/Loader";

const FindPatients = ({
  loading,
  data,
  searchInput,
  setSearchInput,
  setSelectedPatient,
}) => {
  return (
    <div className="container mx-auto max-w-2xl p-4 bg-white rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition">
      <div className="py-4">
        <input
          type="text"
          className="input-profile"
          placeholder="Enter Patient Name and ID"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="p-2 flex items-center justify-center bg-white rounded-xl shadow-md shadow-gray-300">
          <Loader />
        </div>
      ) : (
        <div className="w-full p-1 flex flex-col gap-2 overflow-y-auto">
          {data?.patients.length > 0 ? (
            data?.patients.map((patient) => (
              <div
                className="p-2 flex justify-between border-2 border-cyan-100 border-b-cyan-300 rounded-xl shadow shadow-gray-300 hover:shadow-sky-300 cursor-pointer"
                key={patient._id}
                onClick={() => setSelectedPatient(patient._id)}
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
      <button type="submit" className="button w-full mt-4">
        Submit
      </button>
    </div>
  );
};

export default FindPatients;
