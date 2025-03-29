import React from "react";

const SlotLists = ({nextStep}) => {
  return (
    <div className="mt-2 grid gap-6 px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4">
      <div
        className="p-4 flex items-center bg-white rounded-xl shadow-md shadow-gray-300 cursor-pointer transition transform duration-500 hover:scale-105 hover:shadow-blue-500 hover:transition"
        onClick={nextStep}
      >
        <div className="bg-blue-600 p-3 rounded-full text-center">
          <p className="text-xl font-semibold text-white">05</p>
        </div>
        <div className="ml-4">
          <div className="uppercase px-2 rounded-md text-white bg-green-400 font-semibold">
            Paid
          </div>
          <p className="mt-2 text-gray-800">
            DATE:
            {/* ${new Date(val.date).toLocaleDateString()} */}2024-07-25
          </p>
          <p className="mt-2 text-gray-700">
            TIME:
            {/* ${val.time} */}07:45 AM
          </p>
          <p className="mt-2 font-semibold text-gray-600">AMOUNT: Rs. 500/-</p>
        </div>
      </div>
    </div>
  );
};

export default SlotLists;
