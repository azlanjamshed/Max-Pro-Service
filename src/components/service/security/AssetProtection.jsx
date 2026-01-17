import { Check } from "lucide-react";

const services = [
  {
    desc: "Static guarding for warehouses and logistics facilities",
  },
  {
    desc: "Asset protection and loss-prevention patrols",
  },
  {
    desc: "Monitoring of deliveries, dispatch, and loading docks",
  },
  {
    desc: "Access control for staff, contractors, and visitors",
  },
  {
    desc: "Incident reporting and coordination with site management",
  },
  {
    desc: "Compliance with WHS, site inductions, and security protocols",
  },
];

const AssetProtection = () => {
  return (
    <section className="w-full bg-[#FAFAF8] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2E4A6B] tracking-wide">
          ASSET PROTECTION – WAREHOUSE SECURITY
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-10"></div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-14">
          Sydney MaxPro delivers asset protection and loss-prevention security
          services for industrial and warehouse environments, ensuring the
          safety of goods, infrastructure, and daily operations.
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
        <div className="bg-[#eef3f5]  py-10 flex flex-col gap-5 border-t-4 rounded-2xl border-[#537ea2] mt-10">
          <h4 className="text-base sm:text-xl font-semibold text-[#2E4A6B] tracking-wide">
            Current / Recent Site:
          </h4>
          <p>Asset Protection – Warehouse Facility, Kurnell, NSW</p>
        </div>
      </div>
    </section>
  );
};
export default AssetProtection;
