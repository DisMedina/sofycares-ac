import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/sofycaressma/?locale=es_LA",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/sofycaressma/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@SofyCaresSMA",
    icon: FaYoutube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#662d91] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="mb-6">
              <img src="/logo/logo-tll.svg" alt="Sofy Cares" className="h-10" />
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              We provide personal care and professional companionship services
              with the love and attention your family deserves.
            </p>

            <a
              href="https://sofy-cares.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e3aaaa] text-[#662d91] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Visit Official Website
            </a>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-[#e3aaaa] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <p className="text-white/80">
                  Juan José Torres Landa Torre A
                  <br />
                  37797 San Miguel de Allende, Gto.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#e3aaaa]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  href="tel:+524151177643"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  +52 415 117 7643
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#e3aaaa]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:sofycaressma@gmail.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  sofycaressma@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Mission</h4>

            <p className="text-[#e3aaaa] font-medium mb-2">
              Compassion With Purpose
            </p>

            <p className="text-white/80 text-sm leading-relaxed">
              We are dedicated to providing dignity, respect, and personalized
              care to every resident. Our mission is to create a safe, loving
              environment where older adults feel valued, supported, and at
              home.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sofy Cares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
