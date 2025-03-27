import React from "react";
import {
  CloseIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
  ThreeDotIcon,
} from "../assets/SVGIcons";

const PatientLists = () => {
  const clearInput = () => {};

  return (
    <>
      <div className="p-2 bg-white rounded-lg shadow-md mb-5">
        <h2 className="title">Patient Lists</h2>
      </div>
      <div className="relative flex-grow mb-5">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-full px-10 py-2 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
          placeholder="Search Patients..."
        />
        <button
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-600 hover:text-rose-600 transition-opacity duration-300 opacity-100"
          onClick={clearInput}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col shadow-md shadow-gray-500/50">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full rounded-2xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize rounded-t-xl"
                    >
                      Patient ID
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize"
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize"
                    >
                      Created AT
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-base leading-6 font-semibold text-blue-900 capitalize rounded-t-xl"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white transition-all duration-500 hover:bg-gray-100">
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 capitalize">
                      {/* ${val.patientID} */}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 capitalize">
                      {/* ${val.firstName + " " + val.lastName} */}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 capitalize">
                      {/* ${val.gender} */}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {/* ${new Date(val.dob).toLocaleDateString()} */}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {/* ${val.phone} */}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {/* ${new Date(val.createdAt).toLocaleDateString()} */}
                    </td>
                    <td className="p-5 flex items-center gap-1">
                      <button className="p-2 cursor-pointer rounded-full bg-white group transition-all duration-500 flex item-center hover:bg-indigo-600">
                        <EditIcon />
                      </button>
                      <button className="p-2 cursor-pointer rounded-full bg-white group transition-all duration-500 flex item-center hover:bg-rose-600">
                        <DeleteIcon />
                      </button>
                      <button className="p-2 cursor-pointer rounded-full bg-white group transition-all duration-500 flex item-center hover:bg-gray-500">
                        <ThreeDotIcon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientLists;
