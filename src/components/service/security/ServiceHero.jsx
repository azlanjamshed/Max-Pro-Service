const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#5E7E9B] to-[#2E4A6B] px-6">
      {/* Decorative Icons (Optional) */}
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <svg width="120" height="120" fill="white" viewBox="0 0 24 24">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
        <svg width="120" height="120" fill="white" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide mb-6">
          SECURITY SERVICES
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
          Professional protection for construction sites, schools, warehouses,
          and corporate environments
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
