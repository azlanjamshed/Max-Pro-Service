import React from "react";
import bassamMasri from "../../assets/BASSAMMASRI.jpg";
import japneetDara from "../../assets/JAPNEETDARA.jpg";
import ProfileCard from "./ProfileCard";
const team = [
  {
    image: bassamMasri,
    name: "BASSAM MASRI",
    role: "CHIEF EXECUTIVE OFFICER",
    experience:
      "11+ Years Industry Experience | Former Head of Mathematics Department",
    bio: [
      "Bassam Masri is the Founder and Chief Executive Officer of the company, bringing over 11 years of professional experience across the cleaning and security industries.",
      "Prior to entering the facilities and security sector, Bassam served as Head of the Mathematics Department at a well-known international school in Saudi Arabia.",
      "He leads with honesty, integrity, and respect, embedding a people-first culture throughout the organisation.",
    ],
    stats: [
      { value: "11+", label: "YEARS EXPERIENCE" },
      { value: "100%", label: "COMMITMENT" },
      { value: "24/7", label: "DEDICATION" },
    ],
  },
  {
    image: japneetDara,
    name: "JAPNEET DARA",
    role: "FINANCE MANAGER | BUSINESS DEVELOPMENT MANAGER",
    experience:
      "9+ Years Business Experience | Real Estate Professional | Strategic Growth Specialist",
    bio: [
      "Japneet Dara is a driven Finance Manager and Business Development Manager with a strong foundation in sales and business growth, built over more than nine years of hands-on experience across multiple industries.",
      "Originally arriving in Australia at the age of 14, Japneet completed her high school education in Melbourne while living away from her family. This early independence shaped her strong work ethic, resilience, and maturity. From a young age, she balanced study with work, gaining valuable real-world experience and developing a deep understanding of people, responsibility, and commitment.",
      "Her professional journey began in the education sector as a Student Support Officer at a TAFE in Melbourne, where she built strong communication and relationship-management skills. From there, she progressed into a Marketing Manager role with a renowned educational institute, where her natural talent for sales, strategy, and client engagement quickly stood out.",
      "In 2020, Japneet followed her passion into real estate in Sydney. With a strong sales mindset and a clear vision for growth, she recognised the opportunity to build something of her own. Seeing a gap in the market and driven by long-term ambition, she invested in and helped run the business alongside Bassam Masri—her trusted partner, best friend, and business companion. Sharing aligned values, vision, and mindset, their partnership was built on trust, respect, and a shared commitment to excellence.",
    ],
    stats: [
      { value: "10+", label: "YEARS EXPERIENCE" },
      { value: "500+", label: "SITES MANAGED" },
      { value: "24/7", label: "SUPPORT" },
    ],
  },
];

const ProfileSection = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAF8]  ">
        {team.map((leader, index) => (
          <ProfileCard key={index} {...leader} />
        ))}
      </section>
    </>
  );
};

export default ProfileSection;
