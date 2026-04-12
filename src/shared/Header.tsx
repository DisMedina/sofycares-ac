import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shrink-0">
    <rect width="60" height="30" fill="#B22234" />
    <rect y="2.31" width="60" height="2.31" fill="#fff" />
    <rect y="6.92" width="60" height="2.31" fill="#fff" />
    <rect y="11.54" width="60" height="2.31" fill="#fff" />
    <rect y="16.15" width="60" height="2.31" fill="#fff" />
    <rect y="20.77" width="60" height="2.31" fill="#fff" />
    <rect y="25.38" width="60" height="2.31" fill="#fff" />
    <rect width="24" height="16.15" fill="#3C3B6E" />
  </svg>
);

const MXFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shrink-0">
    <rect width="20" height="30" fill="#006847" />
    <rect x="20" width="20" height="30" fill="#fff" />
    <rect x="40" width="20" height="30" fill="#CE1126" />
  </svg>
);

const Header = () => {
  const { lang, t, toggleLang } = useLang();

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/logo/logo-tll.svg" alt={t.header.logoAlt} className="h-10" />
        </Link>

        {/* CTA + Language Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#662d91] text-white px-6 py-2 rounded-lg hover:opacity-90 transition inline-flex items-center h-[40px]"
          >
            {t.header.giveCare}
          </a>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition text-sm font-medium text-[#662d91] h-[40px]"
            aria-label={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            {lang === "en" ? <USFlag /> : <MXFlag />}
            <span>{lang === "en" ? "EN" : "ES"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
