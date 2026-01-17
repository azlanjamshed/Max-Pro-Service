import React from "react";
import heroimage from "../../assets/home.jpg";
const Hero = () => {
  return (
    <>
      <section className=" w-full  ">
        {/* Decorative Icons (Optional) */}
        <img src={heroimage} alt="hero image" className="w-full h-[90vh]" />
      </section>
    </>
  );
};

export default Hero;
