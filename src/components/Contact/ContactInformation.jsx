const ContactInformation = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="w-full max-w-md bg-[#FAFAF8] rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#2E4A6B] text-center mb-8">
          CONTACT INFORMATION
        </h2>

        {/* Email */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#2E4A6B] uppercase mb-1">
            Email:
          </p>
          <a
            href="mailto:admin@sydneymaxpro.com.au"
            className="text-blue-500 hover:underline break-all"
          >
            admin@sydneymaxpro.com.au
          </a>
        </div>

        {/* Contact Numbers */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#2E4A6B] uppercase mb-2">
            Contact Numbers:
          </p>
          <p className="text-gray-700">
            0410 101 081 – Bassam Masri (Director)
          </p>
          <p className="text-gray-700 mt-1">
            0466 985 612 – Japneet Dara (Finance Manager)
          </p>
        </div>

        {/* Location */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#2E4A6B] uppercase mb-1">
            Location:
          </p>
          <p className="text-gray-700">Sydney, NSW</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
