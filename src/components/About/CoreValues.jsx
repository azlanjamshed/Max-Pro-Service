const coreValues = [
  {
    number: "01",
    title: "CLARITY",
    desc: "Transparent communication and clear processes in every interaction, ensuring mutual understanding and trust.",
  },
  {
    number: "02",
    title: "CONSISTENCY",
    desc: "Reliable, predictable service delivery that meets the highest standards every single time.",
  },
  {
    number: "03",
    title: "ACCOUNTABILITY",
    desc: "Taking ownership and responsibility for all outcomes, ensuring commitments are always met.",
  },
  {
    number: "04",
    title: "RESPECT",
    desc: "For people, spaces, property, and the environment we operate within.",
  },
  {
    number: "05",
    title: "INTEGRITY",
    desc: "Doing what's right, not what's easy or convenient, maintaining the highest ethical standards.",
  },
];

const CoreValues = () => {
  return (
    <section className="w-full bg-[#ECEEEF] py-24 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          OUR CORE VALUES
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coreValues.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAFAF8] rounded-2xl p-10 text-center shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Number */}
            <div className="text-5xl font-semibold text-blue-300 mb-6">
              {item.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#2E4A6B] tracking-wide mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
