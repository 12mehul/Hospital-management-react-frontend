import React from "react";
import Skelton from "../../common/Skelton";

const SlotLists = ({ doctors, selectedDoctor, setSelectedSlot }) => {
  const singleDoctor = doctors?.doctors.find(
    (doc) => doc._id === selectedDoctor
  );

  return (
    <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Skelton />
          </div>
        ))
      ) : data?.slots.length > 0 ? (
        data?.slots.map((val, index) => {
          const isAvailable = val.isAvailable;

          return (
            <div
              className={`p-4 flex items-center rounded-xl shadow-md shadow-gray-300 transition transform duration-500 hover:scale-105 hover:transition ${
                isAvailable
                  ? "cursor-pointer bg-white hover:shadow-blue-500"
                  : "cursor-not-allowed bg-gray-200 opacity-50 hover:shadow-gray-500"
              }`}
              key={val._id}
              onClick={() => isAvailable && setSelectedSlot(val._id)}
            >
              <div className="bg-blue-600 p-3 rounded-full text-center">
                <p className="text-xl font-semibold text-white">0{index + 1}</p>
              </div>
              <div className="ml-4">
                <div
                  className={`uppercase px-2 rounded-md text-center text-white font-semibold ${
                    isAvailable ? "bg-green-400" : "bg-gray-400"
                  }`}
                >
                  {isAvailable ? "Available" : "Booked"}
                </div>
                <p className="mt-2 text-gray-800">
                  DATE: {new Date(val.date).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700">TIME: {val.time}</p>
                <p className="mt-2 font-semibold text-gray-600">
                  AMOUNT: Rs. {singleDoctor.fees}/-
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-72 h-40 p-4 flex items-center justify-center bg-white rounded-xl shadow-md shadow-gray-300">
          <p className="text-gray-500 font-semibold">No Slots Available</p>
        </div>
      )}
    </div>
  );
};

export default SlotLists;
