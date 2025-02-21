import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <!-- Header --> */}
      <Header />
      <div className="w-full h-screen flex">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- Main content of the page --> */}
        <div className="w-full flex-1 bg-purple-50 p-5 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
