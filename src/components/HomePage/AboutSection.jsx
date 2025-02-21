import React from "react";
import aboutImg from "../../assets/img/about.png";

const AboutSection = () => {
  return (
    <>
      <div className="m-4 py-2 border-b-2 border-slate-500 rounded-b-md">
        <h2 className="pt-10 sm:pt-5 md:pt-4 text-center text-2xl font-semibold text-blue-800">
          About Us
        </h2>
        <div className="w-full pt-2 flex flex-col md:flex-row items-center justify-center gap-4">
          <img src={aboutImg} alt="logo" className="w-96 h-96 rounded-md" />
          <div className="max-w-2xl mx-10 flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-sky-500">
              At HealthCare Wellness Center, we believe in making healthcare
              accessible and convenient for everyone. Our mission is to connect
              patients with the right healthcare providers, ensuring that you
              receive the best care when you need it most.
            </h3>
            <p className="text-base font-normal text-gray-700">
              To revolutionize the way people manage their health by providing a
              seamless, user-friendly platform that brings doctors and patients
              closer together.
            </p>
            <p className="text-base font-normal text-gray-700">
              We are committed to making your healthcare journey as smooth as
              possible. From booking appointments to finding the right
              specialist, we prioritize your needs every step of the way.
            </p>
            <span className="pl-2 text-base font-normal text-gray-700">
              <b>Why Choose Us?</b> <br />
              Your health and satisfaction are our top priorities. We tailor our
              services to meet your unique healthcare needs.
            </span>
            <p className="pl-2 text-base font-normal text-gray-700">
              We work with a network of highly qualified doctors, surgeons, and
              specialists to ensure you receive top-notch medical care.
            </p>
            <p className="pl-2 text-base font-normal text-gray-700">
              Our platform is designed to be intuitive and easy to use, so you
              can focus on what really matters—your health.
            </p>
            <span className="text-base font-normal text-gray-700">
              <b>Join Us on Our Journey</b> <br />
              Experience a new way of managing your health with HealthCare
              Wellness Center. Together, we can make healthcare simpler, more
              efficient, and more personalized.
            </span>
          </div>
        </div>
      </div>
      <div className="my-4">
        <span className="pl-5 text-base font-normal text-gray-700">
          ©{new Date().getFullYear()} HealthCare Wellness Center. All rights
          reserved.
        </span>
      </div>
    </>
  );
};

export default AboutSection;
