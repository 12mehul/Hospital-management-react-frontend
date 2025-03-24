import React from "react";

const Skelton = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center rounded-xl shadow-md animate-pulse bg-white shadow-gray-300">
      <div className="p-4 flex items-center justify-center space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-300"></div>
      </div>
      <div className="p-4 flex flex-col items-center justify-center space-y-4 sm:px-8">
        <div className="w-3/4 h-3.5 rounded bg-gray-300"></div>
        <div className="w-5/6 h-3.5 rounded bg-gray-300"></div>
        <div className="w-full h-3.5 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Skelton;
