import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { useFetch } from "../customHooks/useFetch";
import { LeftArrowBoxIcon, UpperArrowSquareIcon } from "../assets/SVGIcons";

const DoctorRegister = () => {
  const { data, loading } = useFetch("/speciality");

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-cover bg-[url('./assets/img/bg-img.PNG')]">
      <div className="w-full h-screen flex flex-col">
        <div className="w-full p-4">
          <Link to="/" className="flex gap-2 justify-start items-center">
            <img src={logo} alt="logo" className="w-9 h-9 rounded-lg" />
            <span className="text-base font-medium text-blue-600 hover:text-blue-500">
              Home
            </span>
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-2xl w-full h-auto bg-[#d7f4f9] p-3 rounded-2xl shadow-lg shadow-sky-200/50">
            <div className="flex items-center justify-center mb-2">
              <img src={logo} alt="logo" className="w-18 h-18 rounded-lg" />
            </div>
            <h2 className="relative flex items-center text-3xl font-semibold text-blue-800 mb-2">
              <span className="flex-grow border-t border-gray-400"></span>
              <span className="mx-3 text-center">Dr. Registration</span>
              <span className="flex-grow border-t border-gray-400"></span>
            </h2>
            <form>
              {/* <!-- Step 1 --> */}
              {step === 1 && (
                <div className="py-3 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your first name"
                        name="firstName"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your last name"
                        name="lastName"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <span className="pl-2 text-red-500"></span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="password"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your password"
                        name="password"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your confirm password"
                        name="confirmPassword"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- Step 2 --> */}
              {step === 2 && (
                <div className="py-3 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <select
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        name="specializationId"
                        id="specialization"
                      >
                        <option value="">Select Speciality</option>
                      </select>
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your license number"
                        name="licenseNumber"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your experience"
                        name="experience"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your phone"
                        name="phone"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="date"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your dob"
                        name="dob"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <div className="w-full flex gap-3 p-3 border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md">
                        <div className="flex items-center justify-center gap-3">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="accent-blue-300 focus:accent-blue-500 w-4 h-4"
                          />
                          <label
                            htmlFor="male"
                            className="text-lg text-gray-700 font-normal"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="accent-blue-300 focus:accent-blue-500 w-4 h-4"
                          />
                          <label
                            htmlFor="female"
                            className="text-lg text-gray-700 font-normal"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      <span className="pl-2 text-red-500 empty:hidden"></span>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- Step 3 --> */}
              {step === 3 && (
                <div className="py-3 flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your address"
                      name="addressLine"
                    />
                    <span className="pl-2 text-red-500"></span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your city"
                        name="city"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your state"
                        name="state"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your country"
                        name="country"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your pincode"
                        name="pincode"
                      />
                      <span className="pl-2 text-red-500"></span>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={`flex ${
                  step === 1 ? "justify-end" : "justify-between"
                }`}
              >
                {step > 1 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="button"
                    onClick={prevStep}
                  >
                    Prev
                  </button>
                )}
                {step < 3 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="button"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="submit"
                  >
                    <LeftArrowBoxIcon />
                    <span>Submit</span>
                  </button>
                )}
              </div>
            </form>
            <p className="mt-2 flex gap-1 items-center justify-center">
              Registered yet?
              <Link
                to="/login"
                className="text-teal-400 font-medium inline-flex space-x-1 items-center hover:text-purple-600"
              >
                <span>Login now</span>
                <span>
                  <UpperArrowSquareIcon />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
