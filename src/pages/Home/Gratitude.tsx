import { useState } from "react";
import { useLang } from "../../i18n/LanguageContext";

const testimonialImages = [
  "/images/SC_A.jpg",
  "/images/SC_B.jpg",
  "/images/SC_C.jpg",
  "/images/SC_D.jpg",
];

export default function GratitudeSection() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % t.gratitude.testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? t.gratitude.testimonials.length - 1 : prev - 1));
  };

  const current = t.gratitude.testimonials[index];

  return (
    <section className="bg-[#F8F5F2] py-24 pb-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <div className="relative">
          <img
            src="/images/SC_267.jpg"
            alt={t.gratitude.altImage}
            className="rounded-3xl shadow-lg w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#662d91] text-white rounded-3xl p-8 w-[90%] shadow-2xl border-8 border-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t.gratitude.floatingHeading}
            </h3>
            <p className="text-sm opacity-90 mb-6">
              {t.gratitude.floatingText}
            </p>

            <div className="flex gap-4">
              <a href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B35] hover:bg-[#e85c2c] transition px-6 py-3 rounded-xl font-semibold inline-block">
                {t.gratitude.donateCta}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <span className="text-[#2b143d] font-semibold uppercase tracking-wide">
            {t.gratitude.tag}
          </span>

          <h2 className="text-4xl font-bold text-[#4A143C] mt-3 mb-6 leading-tight">
            {t.gratitude.heading}
          </h2>

          <p className="text-gray-600 mb-10 text-2xl">
            {t.gratitude.description}
          </p>

          {/* Carousel Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonialImages[index]}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#4A143C]">
                  {current.name}
                </h4>
                <p className="text-sm text-gray-500">{current.age} {t.gratitude.yearsOld}</p>
              </div>
            </div>

            <p className="text-gray-700 italic leading-relaxed">
              "{current.message}"
            </p>

            {/* Carousel Controls */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                className="text-sm text-[#662d91] font-medium hover:underline"
              >
                {t.gratitude.prev}
              </button>

              <button
                onClick={next}
                className="text-sm text-[#662d91] font-medium hover:underline"
              >
                {t.gratitude.next}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
