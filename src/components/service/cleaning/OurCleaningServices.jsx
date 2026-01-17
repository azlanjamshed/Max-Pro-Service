const services = [
  {
    title: "COMMERCIAL & CORPORATE CLEANING",
    desc: "Professional office cleaning services",
  },
  {
    title: "EDUCATIONAL & UNIVERSITY CLEANING",
    desc: "Campus and facility cleaning services",
  },
  {
    title: "MEDICAL & CLINICAL CLEANING",
    desc: "Healthcare facility cleaning",
  },
  {
    title: "DATA CENTRES & HIGH-SECURITY ENVIRONMENTS",
    desc: "Specialized technical environment cleaning",
  },
  {
    title: "PHARMACEUTICAL & WAREHOUSE CLEANING",
    desc: "Industrial and pharmaceutical-grade cleaning",
  },
  {
    title: "PUBLIC VENUES & HIGH-FOOT-TRAFFIC SITES",
    desc: "Museum and public space cleaning",
  },
  {
    title: "DAY, NIGHT & WEEKEND CLEANING",
    desc: "Flexible scheduling to suit your needs",
  },
  {
    title: "AD-HOC & EMERGENCY CLEANING",
    desc: "Rapid response cleaning services",
  },
];

const OurCleaningServices = () => {
  return (
    <section className="w-full bg-[#FAFAF8] py-24 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          OUR CLEANING SERVICES
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="
              relative pl-6 pr-4 py-6 cursor-pointer
              transition-all duration-300 ease-out
              hover:bg-[#E9ECEF]
              hover:-translate-y-2
            "
          >
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500"></div>

            {/* Content */}
            <h3 className="text-sm font-semibold text-[#2E4A6B] tracking-wide mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCleaningServices;
