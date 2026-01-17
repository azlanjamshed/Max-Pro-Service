const careLevels = [
  {
    title: "LIGHT",
    items: [
      "Light dusting of accessible surfaces",
      "Benchtops and furniture surfaces wiped",
      "Vacuum of carpeted areas",
      "Light mop of hard floors",
      "Basic bathroom refresh (toilet, basin, mirror)",
    ],
  },
  {
    title: "MEDIUM",
    note: "Includes all LIGHT tasks, plus:",
    items: [
      "More thorough dusting of accessible surfaces",
      "Proper stovetop clean (light–medium grease)",
      "Touch-point wiping (switches, handles)",
      "Full bathroom clean (toilet, basin, shower screen)",
      "Cobweb removal",
    ],
  },
  {
    title: "PREMIUM",
    note: "Includes all LIGHT + MEDIUM tasks, plus:",
    items: [
      "Deep bathroom clean (grout, taps, detailed areas)",
      "Stovetop and rangehood detailing",
      "Internal window cleaning (reachable areas)",
      "Edge detailing on floors",
      "Higher-reach dusting",
      "Heavy pet hair removal",
    ],
  },
];

const CareLevelsSection = () => {
  return (
    <section className="w-full bg-[#D8D1C6] py-24 px-6">
      {/* ===== Heading ===== */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          WE CARE AT ALL LEVELS
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* ===== Cards ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {careLevels.map((level, index) => (
          <div
            key={index}
            className="bg-[#FAFAF8] rounded-xl shadow-md p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-[#2E4A6B] tracking-wide mb-3">
              {level.title}
            </h3>

            <div className="w-full h-0.5 bg-blue-400 mb-5"></div>

            {level.note && (
              <p className="text-sm font-medium text-gray-700 mb-4">
                {level.note}
              </p>
            )}

            <ul className="space-y-3 text-gray-700">
              {level.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-500 font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== Bespoke Section ===== */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#2E4A6B] rounded-2xl px-8 py-14 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-wide mb-4">
            AND THEN WE HAVE BESPOKE
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Custom cleaning solutions tailored to your specific needs and
            requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareLevelsSection;
