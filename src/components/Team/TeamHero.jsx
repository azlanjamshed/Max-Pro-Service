import React from "react";

const TeamHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#5E7E9B] to-[#2E4A6B] px-6">
      {/* Content */}
      <div className="max-w-4xl text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide mb-6">
          OUR LEADERSHIP TEAM
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
          Guided by experienced professionals with over two decades of combined
          expertise in security and cleaning services, we deliver excellence
          through principled leadership and unwavering commitment to our clients
          and team.
        </p>
      </div>
    </section>
  );
};

export default TeamHero;
