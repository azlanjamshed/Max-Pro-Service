import React from "react";
import CleaningServiceHero from "../../components/service/cleaning/CleaningServiceHero";
import CleaningFocusSection from "../../components/service/cleaning/CleaningFocusSection";
import ServiceTypes from "../../components/service/cleaning/ServiceTypes";
import CareLevelsSection from "../../components/service/cleaning/CareLevelsSection";
import OurCleaningServices from "../../components/service/cleaning/OurCleaningServices";
import CleaningContracts from "../../components/service/cleaning/CleaningContracts";

const Cleaning = () => {
  return (
    <>
      <CleaningServiceHero />
      <CleaningFocusSection />
      <ServiceTypes />
      <CareLevelsSection />
      <OurCleaningServices />
      <CleaningContracts />
    </>
  );
};

export default Cleaning;
