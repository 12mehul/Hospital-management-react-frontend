import React from "react";
import doctorImg from "../../assets/img/doctor-img.jpg";
import Skelton from "../../common/Skelton";

const DoctorLists = ({
  loading,
  data,
  selectedSpeciality,
  setSelectedDoctor,
}) => {
  return (
    <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Skelton />
          </div>
        ))
      ) : data?.doctors.length > 0 ? (
        data?.doctors.map((val) => {
          // Filter chips based on selectedSpeciality
          const filteredSpecializations =
            selectedSpeciality.isFilter === "filterDoctors"
              ? val.specializationId.filter(
                  (s) => s._id === selectedSpeciality.id
                ) // Match only selected ID
              : val.specializationId; // Show all if empty;

          return (
            <div
              className="p-4 flex flex-col bg-white rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition"
              key={val._id}
            >
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between my-3">
                  <div className="relative w-full h-[4rem] flex items-center justify-end border-l-4 border-sky-600 rounded-tr-full rounded-br-full bg-sky-100">
                    <img
                      className="absolute right-2 z-30 w-12 h-12 rounded-full border-2 border-gray-200"
                      src={doctorImg}
                      alt="Profile"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-semibold capitalize mb-3">
                  {val.firstName + " " + val.lastName}
                </h2>
                <div className="mt-auto mb-2 flex flex-wrap gap-3">
                  {filteredSpecializations.map((s) => (
                    <button
                      className="px-3 py-1 rounded-md cursor-pointer text-start font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500"
                      type="button"
                      key={s._id}
                      onClick={() => setSelectedDoctor(val._id, s._id)} // both doctor and speciality id pass
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-72 h-40 p-4 flex items-center justify-center bg-white rounded-xl shadow-md shadow-gray-300">
          <p className="text-gray-500 font-semibold">No Doctors Available</p>
        </div>
      )}
    </div>
  );
};

export default DoctorLists;
