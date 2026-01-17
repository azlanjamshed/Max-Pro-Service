import React from "react";
import hero from "../../assets/contactBanner.jpg";
const ContactHero = () => {
  return (
    <>
      <section className=" w-full  ">
        {/* Decorative Icons (Optional) */}
        <img src={hero} alt="hero image" className="w-full h-[80vh]" />
      </section>
    </>
  );
};

export default ContactHero;
