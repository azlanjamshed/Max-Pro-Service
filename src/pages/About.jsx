import React from "react";
import AboutHero from "../components/About/AboutHero";
import CoreValues from "../components/About/CoreValues";
import Overview from "../components/About/Overview";
import CleaningServiceCards from "../components/About/CleaningServiceCards";

const About = () => {
  return (
    <>
      <AboutHero />
      <Overview />
      <CoreValues />
      <CleaningServiceCards />
    </>
  );
};

export default About;
