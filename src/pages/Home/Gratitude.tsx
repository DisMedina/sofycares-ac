import { useState } from "react";

const gratitudeData = [
  {
    name: "Margaret Thompson",
    age: 82,
    image: "/images/SC_A.jpg",
    message:
      "Thanks to Sofy Cares, I wake up every day feeling safe, cared for, and surrounded by kindness. Your generosity truly gives us comfort and dignity.",
  },
  {
    name: "Dorothy Williams",
    age: 76,
    image: "/images/SC_B.jpg",
    message:
      "The support we receive here is more than help — it is love. Every donation makes our days brighter and our hearts lighter.",
  },
  {
    name: "Eleanor Hayes",
    age: 88,
    image: "/images/SC_C.jpg",
    message:
      "I never imagined I would find a second family at this stage of life. Thank you for giving us warmth, care, and hope.",
  },
  {
    name: "Betty Anderson",
    age: 79,
    image: "/images/SC_D.jpg",
    message:
      "Your kindness provides us with meals, activities, and medical support. But most importantly, it gives us joy and companionship.",
  },
];

export default function GratitudeSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % gratitudeData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? gratitudeData.length - 1 : prev - 1));
  };

  const current = gratitudeData[index];

  return (
    <section className="bg-[#F8F5F2] py-24 pb-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <div className="relative">
          <img
            src="/images/SC_267.jpg"
            alt="Senior residents smiling"
            className="rounded-3xl shadow-lg w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#662d91] text-white rounded-3xl p-8 w-[90%] shadow-2xl border-8 border-white">
            <h3 className="text-2xl font-semibold mb-4">
              Your Generosity Brings Smiles Every Day
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Every contribution helps provide meals, healthcare, emotional
              support, and daily activities for our beloved seniors.
            </p>

            <div className="flex gap-4">
              <a href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B35] hover:bg-[#e85c2c] transition px-6 py-3 rounded-xl font-semibold inline-block">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <span className="text-[#2b143d] font-semibold uppercase tracking-wide">
            Gratitude
          </span>

          <h2 className="text-4xl font-bold text-[#4A143C] mt-3 mb-6 leading-tight">
            Heartfelt Words From Our Beloved Residents
          </h2>

          <p className="text-gray-600 mb-10 text-2xl">
            At Sofy Cares, every donation becomes comfort, dignity, and joy.
            Here are a few words of gratitude from the wonderful individuals
            whose lives you help brighten every single day.
          </p>

          {/* Carousel Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#4A143C]">
                  {current.name}
                </h4>
                <p className="text-sm text-gray-500">{current.age} years old</p>
              </div>
            </div>

            <p className="text-gray-700 italic leading-relaxed">
              “{current.message}”
            </p>

            {/* Carousel Controls */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                className="text-sm text-[#662d91] font-medium hover:underline"
              >
                ← Previous
              </button>

              <button
                onClick={next}
                className="text-sm text-[#662d91] font-medium hover:underline"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
