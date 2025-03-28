import React from "react";

const FooterSection = () => {
  return (
    <footer className="container mx-auto py-4 px-12 md:px-22 lg:px-30 inset-shadow-xs inset-shadow-gray-400/50">
      <div className="flex">
        <span className="text-base font-medium text-gray-700">
          ©{new Date().getFullYear()} HealthCare Wellness Center. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
