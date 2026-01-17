const ProfileCard = ({ image, name, role, experience, bio, stats }) => {
  return (
    <div className="w-full bg-[#FAFAF8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-400"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2E4A6B] tracking-wide">
              {name}
            </h2>

            <p className="text-blue-400 font-semibold mt-1">{role}</p>

            <p className="text-gray-600 mt-2 text-sm">{experience}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12"></div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          {bio.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((item, index) => (
            <div key={index} className="bg-[#F1F4F6] rounded-xl py-6">
              <div className="text-3xl font-semibold text-blue-400 mb-1">
                {item.value}
              </div>
              <p className="text-sm font-medium text-[#2E4A6B]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
