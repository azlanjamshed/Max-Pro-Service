import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceDetailCard from "./ServiceDetailCard";
// import security from "../../../assets/security.jpeg";
// import accessControl from "/accessControl.webp";
const service = [
  {
    img: "src/assets/security.jpeg",
    title: "Office & Building Security",
    desc: "Comprehensive security solutions tailored for corporate offices, ensuring safety for employees, clients, and assets.",
  },
  {
    img: "src/assets/accessControl.webp",
    title: "Access Control & Monitoring",
    desc: "Advanced access control systems and 24/7 monitoring for complete security coverage in corporate settings.",
  },
];
const serviceDetails = [
  {
    title: "Professional Corporate Security Guard Services for Offices",
    desc: "Our highly trained security guards provide on-site protection for corporate offices, ensuring a safe and secure environment for employees, clients, and visitors. From monitoring access points to patrolling premises, our services are tailored to your unique needs. With a focus on professionalism and discretion, our guards seamlessly integrate into your corporate setting.",
  },
  {
    title: "Asset Protection and Loss Prevention for Corporate Environments",
    desc: "Protecting your company's assets is our priority. Our security guards specialise in preventing theft, vandalism, and unauthorised access to sensitive areas. By implementing robust loss prevention strategies, we safeguard your valuable equipment, documents, and intellectual property, giving you peace of mind.",
  },
];

const CorporateSecurityService = () => {
  return (
    <section className="w-full bg-[#e6e9eb] py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          CORPORATE SECURITY SERVICES
        </h2>
        <div className="w-20 h-1 bg-[#6fa3cb] mx-auto mt-4 mb-14"></div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2  items-center">
        {service.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.img}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2  items-center mt-10">
        {serviceDetails.map((item, index) => (
          <ServiceDetailCard
            key={index}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default CorporateSecurityService;
