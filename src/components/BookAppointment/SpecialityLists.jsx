import React from "react";
import { useAdminFetch } from "../../customHooks/useAdminFetch";
import specialityImages from "../../assets/icon/speciality";

const SpecialityLists = ({ setSelectedSpeciality, nextStep }) => {
  const { data, loading } = useAdminFetch("/speciality/count");

  return (
    <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
      {data?.specialities.map((val) => (
        <div
          className="mx-auto w-64 h-72 p-5 flex flex-col items-center justify-center gap-y-10 bg-white rounded-xl shadow-md shadow-gray-300 cursor-pointer transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition"
          key={val._id}
          onClick={() => {
            setSelectedSpeciality(val._id);
            nextStep();
          }}
        >
          <div className="w-32 h-32 flex items-center justify-center border border-transparent bg-slate-100 rounded-full">
            <img
              src={specialityImages[val.title]}
              alt={val.title}
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <label className="text-lg font-bold tracking-wide text-black block">
              {val.title}
            </label>
            <label className="text-sm font-medium tracking-wide text-slate-500 block">
              {val.doctorCount} Doctors
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialityLists;
