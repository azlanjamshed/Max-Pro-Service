import {
  Home,
  Building2,
  ShoppingCart,
  Factory,
  HeartPulse,
} from "lucide-react";

const serviceTypes = [
  {
    title: "RESIDENTIAL",
    description: (
      <>
        Sydney MaxPro services private homes, apartments, and managed
        residences. Work is delivered with care, discretion, and respect for
        personal spaces and daily routines.
      </>
    ),
    icon: Home,
  },
  {
    title: "COMMERCIAL",
    description: (
      <>
        We support offices and professional workplaces where{" "}
        <span className="font-semibold text-[#2E4A6B]">consistency</span>,{" "}
        <span className="font-semibold text-[#2E4A6B]">presentation</span>, and
        minimal <span className="font-semibold text-[#2E4A6B]">disruption</span>{" "}
        are essential to ongoing operations.
      </>
    ),
    icon: Building2,
  },
  {
    title: "RETAIL",
    description: (
      <>
        Retail environments are maintained to align with{" "}
        <span className="font-semibold text-[#2E4A6B]">brand standards</span>,
        customer experience, and trading requirements across varying hours.
      </>
    ),
    icon: ShoppingCart,
  },
  {
    title: "INDUSTRIAL",
    description: (
      <>
        Industrial and operational sites are serviced with{" "}
        <span className="font-semibold text-[#2E4A6B]">attention</span> to
        safety, access requirements, and practical execution suited to site
        conditions.
      </>
    ),
    icon: Factory,
  },
  {
    title: "WELLNESS & CLINICAL",
    description: (
      <>
        We operate within wellness, allied health, and clinical spaces where
        hygiene standards and controlled processes are critical.
      </>
    ),
    icon: HeartPulse,
  },
];

const ServiceTypes = () => {
  return (
    <section className="w-full bg-[#ECEEEF] py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {serviceTypes.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div
                  className={`w-15 h-15 p-4 rounded-full flex items-center justify-center bg-[#2E4A6B]`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-[#2E4A6B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index !== serviceTypes.length - 1 && (
                <div className="border-b border-gray-300 mt-10"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceTypes;
