import React from "react";
import Hero from "../components/Home/Hero";
import WhyChooseCard from "../components/Home/WhyChooseCard";
const Home = () => {
  const chooseUs = [
    {
      title: "FULLY INSURED",
      description: " Public Liability & Workers Compensation",
    },
    {
      title: "WHS / OHS COMPLIANT",
      description: " Documented policies and procedures",
    },
    {
      title: "EXPERIENCED TEAMS",
      description: "For sensitive and high-risk sites",
    },
    {
      title: "QUALITY CONTROL",
      description: "Strict procedures & reporting",
    },
    {
      title: "FLEXIBLE SCHEDULING",
      description: "Rapid response capability",
    },
    {
      title: "STRONG COMMUNICATION",
      description: "Effective contract management",
    },
  ];
  return (
    <>
      <Hero />
      <section className="w-full bg-[#FAFAF8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[#2E4A6B]">
            CLEAN SPACES. HONEST WORK. RELIABLE SERVICE.
          </h1>
        </div>
        {/* Underline */}
        <div className="w-20 h-0.5 bg-blue-500 mx-auto my-6"></div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center ">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We maintain professional environments where consistency, hygiene,
            and presentation are essential. Our work supports commercial
            operations, wellness settings, hospitality spaces, real estate, and
            managed properties across Sydney. All services are delivered to a
            clearly defined scope and adapted to the specific requirements of
            each site.
          </p>
        </div>
      </section>
      {/* why choose us */}
      <section className="w-full bg-[#D9D2C7] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2E4A6B]">
              WHY CHOOSE SYDNEY MAXPRO
            </h2>
            <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chooseUs.map((item, index) => (
              <WhyChooseCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
