function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/images/SC_266.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#662d91]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-[#e3aaaa] mb-4">
            Charity Foundation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Keep Hope! United <br />
            Always! Care <span className="text-[#e3aaaa]">Together!!</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Support our mission to bring hope, care, and compassion to those who
            need it most. Together we can make a life filled with dignity.
          </p>

          <a href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW" target="_blank" rel="noopener noreferrer" className="mt-8 bg-[#e3aaaa] text-[#662d91] font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block">
            Give Care
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
