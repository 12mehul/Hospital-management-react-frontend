import React from "react";
import HeaderSection from "../components/HomePage/HeaderSection";
import HomeSection from "../components/HomePage/HomeSection";
import AppointmentSection from "../components/HomePage/AppointmentSection";
import AboutSection from "../components/HomePage/AboutSection";
import FooterSection from "../components/HomePage/FooterSection";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      {/* <!-- Header --> */}
      <HeaderSection />

      {/* <!-- Content Sections --> */}
      <div>
        {/* <!-- Home --> */}
        <section id="home" className="pt-5">
          <HomeSection />
        </section>

        {/* <!-- Appointment --> */}
        <section id="appointment" className="pt-5">
          <AppointmentSection />
        </section>

        {/* <!-- About --> */}
        <section id="about" className="pt-5">
          <AboutSection />
        </section>

        {/* <!-- Footer --> */}
        <FooterSection />
      </div>
    </div>
  );
};
export default Home;
