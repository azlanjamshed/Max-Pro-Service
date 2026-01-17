import { Check } from "lucide-react";

const services = [
  {
    title: "Static Security Guards",
    desc: "Constant on-site presence to deter crime and protect assets",
  },
  {
    title: "Mobile Patrols",
    desc: "Regular patrols for larger sites or high-risk areas",
  },
  {
    title: "Access Control",
    desc: "Management of entry points and authorised personnel",
  },
  {
    title: "Asset & Equipment Protection",
    desc: "Safeguarding tools, machinery, and building materials",
  },
  {
    title: "24/7 Monitoring",
    desc: "Continuous vigilance and rapid response capability",
  },
];

const ConstructionSecurity = () => {
  return (
    <section className="w-full bg-[#FAFAF8] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          CONSTRUCTION SITE SECURITY – SYDNEY MAXPRO SERVICES
        </h2>
        <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-4 mb-10"></div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-14">
          Sydney MaxPro Services provides licensed and professional construction
          site security services. Our teams protect construction sites from
          theft, vandalism, and unauthorised access, ensuring peace of mind
          throughout the duration of each project.
        </p>

        {/* Sub Heading */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2E4A6B] tracking-wide">
          OUR CONSTRUCTION SECURITY SERVICES
        </h3>
        <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-3 mb-10"></div>

        {/* Services List */}
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-gray-200 pb-5 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-300  flex items-center justify-center">
                <Check
                  className="text-blue-300 group-hover:text-blue-100 "
                  size={20}
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#2E4A6B]">
                  {item.title}
                </span>{" "}
                – {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSecurity;
