import React from "react";

const Overview = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAF8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-[#2E4A6B]">
            COMPANY OVERVIEW
          </h1>
        </div>
        {/* Underline */}
        <div className="w-20 h-0.5 bg-blue-500 mx-auto my-6"></div>

        {/* Description */}
        <div className="max-w-4xl mx-auto ">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Sydney MaxPro Services AUS Pty Ltd is a professional provider of
            commercial cleaning and static security services across NSW, serving
            a diverse range of sectors including educational institutions,
            universities, data centres, warehouses, medical facilities, museums,
            and corporate environments.
          </p>
          <br />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Established in 2018 with a clear mission to show up, do the work
            properly, and respect every space entrusted to us, this principle
            continues to guide our operations, communication, and quality
            assessment. Our operations are built on compliance, reliability, and
            strong site management, ensuring minimal disruption and maximum
            safety for all clients.
          </p>
          <br />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We service residential homes, commercial offices, retail
            environments, wellness and clinical spaces, and large-scale
            industrial sites. Each category carries its own expectations,
            conditions, and standards, requiring a measured, adaptable, and
            environment-appropriate approach.
          </p>
          <br />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            While some spaces rely on consistency and routine, others demand
            precision, care, and heightened attention to detail. Where standard
            scopes are insufficient, we provide bespoke solutions shaped by the
            site, the brief, and the people who use the space.
          </p>
          <br />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Across every category, Sydney MaxPro operates with the same intent:
            clear communication, considered execution, and outcomes that hold up
            over time. This is about reliability, care, and doing the job
            right—without compromise.
          </p>
        </div>
      </section>
    </>
  );
};

export default Overview;
