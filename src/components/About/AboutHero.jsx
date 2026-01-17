import React from "react";
import banner from "../../assets/aboutBanner.jpg";
const AboutHero = () => {
  return (
    <>
      <section className=" w-full  ">
        {/* Decorative Icons (Optional) */}
        <img src={banner} alt="hero image" className="w-full h-[80vh]" />
      </section>
    </>
  );
};

export default AboutHero;
