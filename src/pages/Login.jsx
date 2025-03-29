import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { emailRegex } from "../regularExpressions/regex";
import authFetch from "../axiosbase/custom";
import { useToast } from "../context/ToastProvider";
import Loader from "../common/Loader";
import { LeftArrowBoxIcon, UpperArrowSquareIcon } from "../assets/SVGIcons";

const initialValues = { email: "", password: "" };

const Login = () => {
  const toast = useToast();
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
        toast.success(res.data.msg);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.userId);
        localStorage.setItem("role", res.data.role);
        setFormValues(initialValues);
        setTimeout(() => (window.location.href = "/appointment"), 3000);
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
          <div className="max-w-lg w-full bg-[#d7f4f9] p-8 rounded-2xl shadow-lg shadow-sky-200/50">
            <div className="flex items-center justify-center mb-2">
              <img src={logo} alt="logo" className="w-18 h-18 rounded-lg" />
            </div>
            <h2 className="relative flex items-center text-3xl font-semibold text-blue-800 mb-2">
              <span className="flex-grow border-t border-gray-400"></span>
              <span className="mx-3 text-center">Login</span>
              <span className="flex-grow border-t border-gray-400"></span>
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="py-3 flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    className={`form-input ${
                      formErrors.email ? "border--danger" : "border--primary"
                    }`}
                    placeholder="Enter your email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  <span className="text--danger">{formErrors.email}</span>
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    className={`form-input ${
                      formErrors.password ? "border--danger" : "border--primary"
                    }`}
                    placeholder="Enter your password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  <span className="text--danger">{formErrors.password}</span>
                </div>
                <button
                  className="button w-full"
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

export default Login;
