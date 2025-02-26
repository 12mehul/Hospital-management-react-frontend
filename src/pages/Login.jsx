import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { emailRegex } from "../regularExpressions/regex";
import authFetch from "../axiosbase/custom";
import { showErrorToast, showSuccessToast } from "../toastContainer/Toastify";
import Loader from "../common/Loader";

const initialValues = { email: "", password: "" };

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const validateField = (name, value) => {
    if (name === "email") {
      if (!value) return "Email is required";
      if (!emailRegex.test(value)) return "Invalid email format";
    }
    if (name === "password" && !value) {
      return "Password is required";
    }
    return "";
  };

  // Validate all fields before submission
  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      const error = validateField(key, formValues[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    // Validate field dynamically
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoader(true);

    try {
      const res = await authFetch.post("/accounts/login", formValues);
      if (res.status === 200) {
        setLoader(false);
        showSuccessToast(res.data.msg);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.userId);
        localStorage.setItem("role", res.data.role);
        setFormValues(initialValues);
        setTimeout(() => {
          window.location.href = "/appointment";
        }, 3000);
      }
    } catch (error) {
      setLoader(false);
      showErrorToast(error.response?.data.msg);
    }
  };

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
          <div className="max-w-lg w-full bg-sky-50 p-8 rounded-2xl shadow-lg shadow-sky-200/50">
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-20 h-20" />
            </div>
            <h2 className="flex items-start text-3xl font-semibold text-blue-800">
              Login Form
            </h2>
            <p className="mb-1 text-slate-500">Hi, Welcome back 👋</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="py-3 flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                      formErrors.email
                        ? "border border-red-500"
                        : "border-2 border-cyan-100 border-b-cyan-300"
                    }`}
                    placeholder="Enter your email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  <span className="pl-2 text-red-500">{formErrors.email}</span>
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    className={`w-full p-3 text-lg text-gray-700 font-normal focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md ${
                      formErrors.password
                        ? "border border-red-500"
                        : "border-2 border-cyan-100 border-b-cyan-300"
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
                <button
                  className="w-full cursor-pointer py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
                  type="submit"
                  disabled={loader}
                >
                  {loader ? (
                    <Loader />
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
              </div>
            </form>
            <p className="flex gap-1 items-center justify-center">
              Not registered yet?
              <Link
                to="/patientRegister"
                className="text-teal-400 font-medium inline-flex space-x-1 items-center hover:text-purple-600"
              >
                <span>Register now</span>
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

export default Login;
