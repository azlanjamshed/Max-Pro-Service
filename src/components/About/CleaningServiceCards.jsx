import {
  Building2,
  Factory,
  Hospital,
  GraduationCap,
  ShoppingCart,
  Hotel,
  Warehouse,
  Database,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "COMMERCIAL CLEANING",
    desc: "Professional cleaning services for offices and corporate spaces with tailored schedules to minimize business disruption.",
    icon: Building2,
  },
  {
    title: "INDUSTRIAL CLEANING",
    desc: "Specialized cleaning for factories and manufacturing plants using heavy-duty equipment for challenging environments.",
    icon: Factory,
  },
  {
    title: "MEDICAL FACILITY CLEANING",
    desc: "Medical-grade cleaning and disinfection for healthcare facilities with compliance to strict infection control protocols.",
    icon: Hospital,
  },
  {
    title: "EDUCATIONAL INSTITUTIONS",
    desc: "Cleaning services for schools and universities with flexible scheduling around academic calendars.",
    icon: GraduationCap,
  },
  {
    title: "RETAIL & SHOPPING CENTRES",
    desc: "Professional retail cleaning with after-hours service to avoid customer disruption and maintain brand standards.",
    icon: ShoppingCart,
  },
  {
    title: "HOSPITALITY CLEANING",
    desc: "Specialized hotel and resort cleaning with attention to guest rooms, common areas, and food service spaces.",
    icon: Hotel,
  },
  {
    title: "WAREHOUSE & LOGISTICS",
    desc: "Comprehensive cleaning for warehouses and distribution centers with special attention to high-traffic areas.",
    icon: Warehouse,
  },
  {
    title: "DATA CENTRES",
    desc: "Specialized cleaning for sensitive technology environments using ESD-safe procedures to protect electronics.",
    icon: Database,
  },
  {
    title: "STATIC SECURITY SERVICES",
    desc: "Professional security personnel for static guarding and site protection with trained officers and rapid response.",
    icon: ShieldCheck,
  },
];

const CleaningServiceCards = () => {
  return (
    <section className="w-full bg-[#FAFAF8] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-sm bg-white  hover:shadow-md transition-all duration-300 ease-out
    hover:translate-y-2"
            >
              {/* Header */}
              <div className="bg-[#2E4A6B] p-6">
                <Icon className="text-blue-300 mb-4" size={32} />
                <h3 className="text-white font-semibold tracking-wide text-lg">
                  {item.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CleaningServiceCards;
