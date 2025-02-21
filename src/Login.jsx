import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo.png";

const Login = () => {
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
            <form>
              <div className="py-3 flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <span className="pl-2 text-red-500"></span>
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    className="w-full p-3 text-lg text-gray-700 font-normal border-2 border-cyan-100 border-b-cyan-300 focus:border-cyan-500 focus:outline-none hover:shadow-md bg-transparent rounded-md"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <span className="pl-2 text-red-500"></span>
                </div>
                <button
                  className="w-full py-3 font-medium text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-400 rounded-xl inline-flex space-x-2 items-center justify-center"
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
