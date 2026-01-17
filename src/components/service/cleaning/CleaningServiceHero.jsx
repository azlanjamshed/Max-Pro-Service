import React from "react";

const CleaningServiceHero = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: `
      linear-gradient(to bottom right, rgba(46,74,107,0.8), rgba(30,58,89,0.85)),
      url('src/assets/cleaning.jpg')
    `,
      }}
    >
      <div className="max-w-4xl text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide mb-6">
          CLEANING SERVICES
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
          Professional cleaning solutions for every environment
        </p>
      </div>
    </section>
  );
};

export default CleaningServiceHero;
