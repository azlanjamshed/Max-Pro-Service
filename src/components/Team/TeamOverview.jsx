import React from "react";

const TeamOverview = () => {
  return (
    <section className="w-full bg-[#FAFAF8] px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[#2E4A6B]">
          WHO WE ARE
        </h1>
      </div>
      {/* Underline */}
      <div className="w-20 h-0.5 bg-blue-500 mx-auto my-6"></div>

      {/* Description */}
      <div className="max-w-4xl mx-auto ">
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Our leadership team combines extensive industry experience with a
          values-driven approach, ensuring every client receives exceptional
          service built on trust, integrity, and professional excellence.
        </p>
      </div>
    </section>
  );
};

export default TeamOverview;
