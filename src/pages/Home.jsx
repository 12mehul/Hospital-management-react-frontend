import React from "react";
import HeaderSection from "../components/HomePage/HeaderSection";
import HomeSection from "../components/HomePage/HomeSection";
import AppointmentSection from "../components/HomePage/AppointmentSection";
import AboutSection from "../components/HomePage/AboutSection";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      {/* <!-- Header --> */}
      <HeaderSection />

      {/* <!-- Content Sections --> */}
      <div className="mt-40">
        {/* <!-- Home --> */}
        <section id="home">
          <HomeSection />
        </section>

        {/* <!-- Appointment --> */}
        <section id="appointment">
          <AppointmentSection />
        </section>

        {/* <!-- About Us --> */}
        <section id="about">
          <AboutSection />
        </section>
      </div>
    </div>
  );
};

export default Home;
