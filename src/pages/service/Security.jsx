import React from "react";
import ServiceHero from "../../components/service/security/ServiceHero";
import ConstructionSecurity from "../../components/service/security/ConstructionSecurity";
import ScopeofSecurity from "../../components/service/security/SecurityServiceCapability";
import AssetProtection from "../../components/service/security/AssetProtection";
import CorporateSecurityService from "../../components/service/security/CorporateSecurityService";

const Security = () => {
  return (
    <>
      <ServiceHero />
      <ConstructionSecurity />
      <ScopeofSecurity />
      <AssetProtection />
      <CorporateSecurityService />
    </>
  );
};

export default Security;
