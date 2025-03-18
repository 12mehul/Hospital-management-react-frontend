import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import authFetch from "../axiosbase/custom";
import { useToast } from "../context/ToastProvider";
import Loader from "../common/Loader";
import { validateField } from "../utils/validation";
import { LeftArrowBoxIcon, UpperArrowSquareIcon } from "../assets/SVGIcons";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  phone: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

const PatientRegister = () => {
  const toast = useToast();
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

  const prevStep = () => setStep(step - 1);
  const nextStep = () => {
    if (!validateForm()) return;
    setStep(step + 1);
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

    const data = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      dob: formValues.dob,
      gender: formValues.gender,
      phone: formValues.phone,
      fullAddress: {
        addressLine: formValues.addressLine,
        city: formValues.city,
        state: formValues.state,
        country: formValues.country,
        pincode: formValues.pincode,
      },
    };

    try {
      const res = await authFetch.post("/patients", data);
      if (res.status === 201) {
        setLoader(false);
        toast.success(res.data.msg);
        setFormValues(initialValues);
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data.msg);
    }
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
              <span className="mx-3 text-center">Registration</span>
              <span className="flex-grow border-t border-gray-400"></span>
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* <!-- Step 1 --> */}
              {step === 1 && (
                <div className="py-3 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.firstName
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.lastName
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
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
                      className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                        formErrors.email
                          ? "border border-red-500"
                          : "border-2 border-cyan-300"
                      }`}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.password
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.confirmPassword
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
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
                <div className="py-3 flex flex-col gap-4">
                  <div>
                    <input
                      type="date"
                      className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                        formErrors.dob
                          ? "border border-red-500"
                          : "border-2 border-cyan-300"
                      }`}
                      placeholder="Enter your dob"
                      name="dob"
                      value={formValues.dob}
                      onChange={handleInputChange}
                      onBlur={handleInputChange}
                    />
                    <span className="pl-2 text-red-500">{formErrors.dob}</span>
                  </div>
                  <div>
                    <div
                      className={`w-full flex gap-3 p-3 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                        formErrors.gender
                          ? "border border-red-500"
                          : "border-2 border-cyan-300"
                      }`}
                    >
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
                      className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                        formErrors.phone
                          ? "border border-red-500"
                          : "border-2 border-cyan-300"
                      }`}
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
                <div className="py-3 flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                        formErrors.addressLine
                          ? "border border-red-500"
                          : "border-2 border-cyan-300"
                      }`}
                      placeholder="Enter your address"
                      name="addressLine"
                      value={formValues.addressLine}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.city
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
                        placeholder="Enter your city"
                        name="city"
                        value={formValues.city}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.state
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
                        placeholder="Enter your state"
                        name="state"
                        value={formValues.state}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.country
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
                        placeholder="Enter your country"
                        name="country"
                        value={formValues.country}
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
                        className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                          formErrors.pincode
                            ? "border border-red-500"
                            : "border-2 border-cyan-300"
                        }`}
                        placeholder="Enter your pincode"
                        name="pincode"
                        value={formValues.pincode}
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
                }`}
              >
                {step > 1 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="button"
                    onClick={prevStep}
                  >
                    Prev
                  </button>
                )}
                {step < 3 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="button"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    className="w-40 cursor-pointer py-3 font-medium text-white bg-sky-600 shadow-lg shadow-sky-500/50 hover:bg-sky-500 rounded-xl inline-flex space-x-2 items-center justify-center"
                    type="submit"
                    disabled={loader}
                  >
                    {loader ? (
                      <Loader />
                    ) : (
                      <>
                        <LeftArrowBoxIcon />
                        <span>Submit</span>
                      </>
                    )}
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

export default PatientRegister;
