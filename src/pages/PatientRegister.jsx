import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import authFetch from "../axiosbase/custom";
import { showErrorToast, showSuccessToast } from "../toastContainer/Toastify";
import Loader from "../common/Loader";
import { validateField } from "../utils/validation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  phone: "",
  fullAddress: {
    addressLine: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
};

const PatientRegister = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);

  // Validate all fields before submission
  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      const error = validateField(
        key,
        formValues[key],
        formValues,
        step,
        "patient"
      );
      if (error) acc[key] = error;
      return acc;
    }, {});
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (!validateForm()) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    // Validate field dynamically
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value, formValues, step, "patient"),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoader(true);
    console.log("Successfully");
  };

  console.log("@@@", formValues);
  console.log("###", formErrors);

  return (
    <div className="bg-cover bg-[url('./assets/img/patient-bg.jpg')]">
      <div className="w-full h-screen flex flex-col">
        <div className="w-full flex justify-end p-4">
          <Link
            className="text-xl font-semibold text-blue-800 hover:text-red-600"
            to="/"
          >
            Home ↩️
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-2xl w-full h-auto bg-sky-50 p-3 rounded-2xl shadow-lg shadow-sky-200/50">
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-20 h-20" />
            </div>
            <h2 className="mb-3 flex items-center justify-center text-3xl font-semibold text-blue-800">
              Patient Registration
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* <!-- Step 1 --> */}
              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.firstName}
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.lastName}
                      </span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      onBlur={handleInputChange}
                    />
                    <span className="pl-2 text-red-500">
                      {formErrors.email}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="password"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your password"
                        name="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.password}
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your confirm password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.confirmPassword}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- Step 2 --> */}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="date"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your dob"
                      name="dob"
                      value={formValues.dob}
                      onChange={handleInputChange}
                      onBlur={handleInputChange}
                    />
                    <span className="pl-2 text-red-500">{formErrors.dob}</span>
                  </div>
                  <div>
                    <div className="w-full flex gap-3 p-3 border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md">
                      <div className="flex items-center justify-center gap-3">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="accent-blue-300 focus:accent-blue-500 w-4 h-4"
                          checked={formValues.gender === "male"}
                          onChange={handleInputChange}
                          onBlur={handleInputChange}
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
                          checked={formValues.gender === "female"}
                          onChange={handleInputChange}
                          onBlur={handleInputChange}
                        />
                        <label
                          htmlFor="female"
                          className="text-lg text-gray-700 font-normal"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <span className="pl-2 text-red-500 empty:hidden">
                      {formErrors.gender}
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputChange}
                    />
                    <span className="pl-2 text-red-500">
                      {formErrors.phone}
                    </span>
                  </div>
                </div>
              )}
              {/* <!-- Step 3 --> */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                      placeholder="Enter your address"
                      name="addressLine"
                      value={formValues.fullAddress.addressLine}
                      onChange={handleInputChange}
                      onBlur={handleInputChange}
                    />
                    <span className="pl-2 text-red-500">
                      {formErrors.addressLine}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your city"
                        name="city"
                        value={formValues.fullAddress.city}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.city}
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your state"
                        name="state"
                        value={formValues.fullAddress.state}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.state}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your country"
                        name="country"
                        value={formValues.fullAddress.country}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.country}
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                        placeholder="Enter your pincode"
                        name="pincode"
                        value={formValues.fullAddress.pincode}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                      />
                      <span className="pl-2 text-red-500">
                        {formErrors.pincode}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={`flex ${
                  step === 1 ? "justify-end" : "justify-between"
                } my-5`}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
