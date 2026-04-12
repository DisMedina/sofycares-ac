import { BiSolidDonateHeart } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { useLang } from "../../i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN - IMAGES */}
        <div className="relative grid grid-cols-2 gap-6">
          {/* Top Image */}
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img
              src="/images/SC_245.jpg"
              alt={t.about.altVolunteers}
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/SC_58.jpg"
              alt={t.about.altCharity}
              className="w-full h-[220px] object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/SC_149.jpg"
              alt={t.about.altHelping}
              className="w-full h-[220px] object-cover"
            />
          </div>

          {/* Floating Center Card */}
          <div
            className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                bg-[#662d91] text-white
                px-10 py-8
                rounded-2xl
                text-center
                z-20
                ring-8 ring-white
            "
          >
            <p className="text-4xl font-bold">{t.about.yearsCount}</p>
            <p className="text-sm uppercase tracking-widest mt-2">
              {t.about.yearsLabel}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-[#e3aaaa] mb-4">
            {t.about.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#662d91] leading-tight">
            {t.about.heading}{" "}
            <span className="text-[#e3aaaa]">{t.about.headingHighlight}</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {t.about.description}
          </p>

          {/* Features */}
          <div className="mt-10 space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="text-[#662d91] text-3xl">
                <BiSolidDonateHeart />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#662d91]">
                  {t.about.feature1Title}
                </h4>
                <p className="text-gray-600 text-sm">{t.about.feature1Text}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="text-[#662d91] text-3xl">
                <FaDonate />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#662d91]">
                  {t.about.feature2Title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t.about.feature2Text}
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#662d91] rounded-full"></span>
              {t.about.bullet1}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#662d91] rounded-full"></span>
              {t.about.bullet2}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#662d91] rounded-full"></span>
              {t.about.bullet3}
            </li>
          </ul>

          {/* Button */}
          <a
            href="https://sofy-cares.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-[#662d91] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            {t.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
