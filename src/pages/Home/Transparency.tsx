import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLang } from "../../i18n/LanguageContext";

const TransparencySection = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-[#e3aaaa] mb-4">
            {t.transparency.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#662d91]">
            {t.transparency.heading} <span className="text-[#e3aaaa]">{t.transparency.headingHighlight}</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {t.transparency.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {t.transparency.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-[#f9f7fc] hover:bg-[#f2ecf9] transition"
              >
                <span className="font-semibold text-[#662d91] text-lg">
                  {faq.question}
                </span>

                <span className="text-[#662d91] text-2xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 py-6 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
