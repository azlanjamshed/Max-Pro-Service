const ServiceDetailCard = ({ title, description }) => {
  return (
    <div className="bg-[#F6F7F8] rounded-2xl shadow-md overflow-hidden max-w-sm group">
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2E4A6B] tracking-wide">
          {title}
        </h3>

        {/* Underline */}
        <div className="w-14 h-0.5 bg-[#6fa3cb] mt-3 mb-5 group-hover:w-20 transition-all"></div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
