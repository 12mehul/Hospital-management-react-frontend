import React from "react";

const FooterSection = () => {
  return (
    <footer className="container mx-auto py-4 px-16 text-gray-800">
      <div className="flex">
        <span className="text-base font-normal text-gray-700">
          ©{new Date().getFullYear()} HealthCare Wellness Center. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
