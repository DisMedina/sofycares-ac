const DonationTypesSection = () => {
  return (
    <section
      className="relative w-full py-28"
      style={{
        backgroundImage: "url('/images/SC_130.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2b143d]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-widest text-[#e3aaaa] mb-4">
            Types of care
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ways you can <span className="text-[#e3aaaa]">Help</span>
          </h2>

          <p className="mt-6 text-gray-200">
            There are different ways to provide support and make a significant
            difference in the lives of our people.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_003.jpg"
                alt="Campañas de apoyo"
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">Support campaigns</h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              Campaigns seeking specific help. <br />
              Call: ##########
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_002.jpg"
                alt="Donaciones electrónicas"
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">Digital donations</h3>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              The easiest way to provide support.{" "}
            </p>

            <a href="https://www.paypal.com/ncp/payment/8XYQL4RHWPHGW" target="_blank" rel="noopener noreferrer" className="bg-[#e3aaaa] text-[#662d91] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition inline-block">
              Give Care
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_001.jpg"
                alt="Donaciones físicas"
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">In-Kind Donations</h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              We accept articles that may be useful to older adults. <br />
              For more information, call: ##########.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTypesSection;
