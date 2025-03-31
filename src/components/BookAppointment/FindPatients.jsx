import React from "react";

const FindPatients = () => {
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
      <div className="w-full flex flex-col gap-1 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="flex justify-between p-2 hover:shadow-md hover:shadow-sky-400 cursor-pointer">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800 capitalize">
            {/* ${patient.firstName + " " + patient.lastName} */}
            lastName
          </h5>
          <p className="font-semibold text-gray-600">
            {/* ${patient.patientID} */}12345
          </p>
        </div>
      </div>
      <button type="submit" className="button w-full mt-4">
        Submit
      </button>
    </div>
  );
};

export default FindPatients;
