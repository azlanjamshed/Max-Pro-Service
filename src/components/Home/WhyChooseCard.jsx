import React from "react";

const WhyChooseCard = ({ index, title, description }) => {
  return (
    <div className="bg-[#FAFAF8] p-8 text-center shadow-sm" key={index}>
      <h3 className="text-lg font-semibold text-[#2E4A6B] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
