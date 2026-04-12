import { useLang } from "../../i18n/LanguageContext";

const DonationTypesSection = () => {
  const { t } = useLang();

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
            {t.donationTypes.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.donationTypes.heading} <span className="text-[#e3aaaa]">{t.donationTypes.headingHighlight}</span>
          </h2>

          <p className="mt-6 text-gray-200">
            {t.donationTypes.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_003.jpg"
                alt={t.donationTypes.card1Alt}
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">{t.donationTypes.card1Title}</h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              {t.donationTypes.card1Text} <br />
              {t.donationTypes.card1Call}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_002.jpg"
                alt={t.donationTypes.card2Alt}
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">{t.donationTypes.card2Title}</h3>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              {t.donationTypes.card2Text}
            </p>

            <a href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW" target="_blank" rel="noopener noreferrer" className="bg-[#e3aaaa] text-[#662d91] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition inline-block">
              {t.donationTypes.card2Cta}
            </a>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/SC_001.jpg"
                alt={t.donationTypes.card3Alt}
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">{t.donationTypes.card3Title}</h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              {t.donationTypes.card3Text} <br />
              {t.donationTypes.card3Call}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTypesSection;
