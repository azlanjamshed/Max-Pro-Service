import { Check } from "lucide-react";

const services = [
  {
    desc: "Static licensed security officers on site",
  },
  {
    desc: "Access control and monitoring of entry and exit points",
  },
  {
    desc: "Student, staff, and visitor safety oversight",
  },
  {
    desc: "Incident prevention, reporting, and escalation",
  },
  {
    desc: "Support during peak periods, drop-off and pick-up times, and school events",
  },
  {
    desc: "Full compliance with school policies and WHS requirements",
  },
];

const SecurityServiceCapability = () => {
  return (
    <section className="w-full bg-[#e6e9eb] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          SECURITY SERVICES CAPABILITY – SCHOOL SECURITY (STATIC GUARDING)
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-10"></div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-14">
          Sydney MaxPro provides static school security services focused on
          student safety, staff protection, and effective site control during
          school hours and events.
        </p>

        {/* Sub Heading */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2E4A6B] tracking-wide">
          Scope of services includes:
        </h3>
        <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-3 mb-10"></div>

        {/* Services List */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-gray-300 pb-5 group"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-300  flex items-center justify-center">
                <Check
                  className="text-blue-300 group-hover:text-blue-100 "
                  size={20}
                />
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#dce5e8] py-10 flex flex-col gap-5 border-t-4 rounded-2xl border-[#537ea2] mt-10">
          <h4 className="text-base sm:text-xl font-semibold text-[#2E4A6B] tracking-wide">
            Current / Recent Site:
          </h4>
          <p>School Security – Collaroy, NSW</p>
        </div>
      </div>
    </section>
  );
};
export default SecurityServiceCapability;
