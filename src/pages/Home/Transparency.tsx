import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How are donations used at the retirement home?",
    answer:
      "All donations directly support the daily needs of our residents, including food, medical supplies, hygiene products, recreational activities, and facility maintenance. Every contribution is allocated responsibly to improve quality of life.",
  },
  {
    question: "Do you provide financial transparency reports?",
    answer:
      "Yes. We maintain internal accountability records and provide financial summaries upon request. Transparency and responsible management are core values of our organization.",
  },
  {
    question: "Can I choose how my donation is used?",
    answer:
      "Absolutely. Donors may specify if their contribution is intended for medical care, food programs, recreational activities, or infrastructure improvements.",
  },
  {
    question: "Are electronic donations secure?",
    answer:
      "Yes. We use secure and encrypted payment gateways to ensure all electronic transactions are protected and confidential.",
  },
  {
    question: "How can I verify the impact of my contribution?",
    answer:
      "We regularly share updates, photos, and reports about our programs. Donors are also welcome to contact us directly for more detailed information about ongoing initiatives.",
  },
];

const TransparencySection = () => {
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
            Transparency
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#662d91]">
            Frequently Asked <span className="text-[#e3aaaa]">Questions</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We believe transparency builds trust. Here are answers to the most
            common questions about how donations are managed and used within our
            retirement home.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
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
