const contracts = [
  {
    title: "WESTERN SYDNEY UNIVERSITY – PARRAMATTA CAMPUS",
    desc: "Commercial & institutional cleaning services",
  },
  {
    title: "MUSEUM OF ILLUSIONS SYDNEY",
    desc: "Public venue & high-foot-traffic cleaning",
  },
  {
    title: "IRFAN COLLEGE – CECIL PARK CAMPUS",
    desc: "Educational facility cleaning services",
  },
  {
    title: "AUSTRALIAN PHARMACEUTICAL INDUSTRIES – MARSDEN PARK, NSW",
    desc: "Warehouse & pharmaceutical-grade cleaning",
  },
  {
    title: "Fujitsu – Data Centre Services & Solutions (Australia)",
    desc: "High-security & technical environment cleaning",
  },
  {
    title: "Medical Centre – Revesby, NSW",
    desc: "Clinical & healthcare cleaning services",
  },
];

const CleaningContracts = () => {
  return (
    <section className="w-full bg-[#D8D1C6] py-24 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          OUR CURRENT & RECENT CLEANING CONTRACTS
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* Contract Cards */}
      <div className="max-w-5xl mx-auto space-y-6">
        {contracts.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#FAFAF8] rounded-xl px-8 py-6 shadow-sm  transition-transform duration-300 ease-out
    hover:translate-x-2"
          >
            {/* Left Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#2E4A6B] rounded-l-xl"></div>

            <h3 className="text-sm sm:text-base font-semibold text-[#2E4A6B] tracking-wide mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleaningContracts;
