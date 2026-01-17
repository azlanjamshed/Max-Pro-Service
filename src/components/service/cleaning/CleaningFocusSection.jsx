const focusData = [
  {
    title: "COMMERCIAL EXCELLENCE",
    desc: "Professional cleaning for corporate offices and business environments",
    image: "src/assets/commercialCleaning.jpg",
  },
  {
    title: "INDUSTRIAL PRECISION",
    desc: "Specialized cleaning for warehouses, factories, and operational sites",
    image: "src/assets/industrialCleaning.jpg",
  },
  {
    title: "CLINICAL STANDARDS",
    desc: "Hygiene-focused cleaning for healthcare and wellness facilities",
    image: "src/assets/medicalCleaning.avif",
  },
];

const CleaningFocusSection = () => {
  return (
    <section className="w-full bg-[#FAFAF8] py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          LET&apos;S MAKE CLEAR & CLEAN.
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {focusData.map((item, index) => (
          <div
            key={index}
            className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A56]/90 via-[#1F3A56]/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleaningFocusSection;
