import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/logo/logo-tll.svg" alt="Sofy Cares" className="h-10" />
        </Link>

        {/* CTA */}
        <a href="https://www.paypal.com/donate/?hosted_button_id=N9R2MUDNQEEAW" target="_blank" rel="noopener noreferrer" className="bg-[#662d91] text-white px-6 py-2 rounded-lg hover:opacity-90 transition inline-block">
          Give Care
        </a>
      </div>
    </div>
  );
};

export default Header;
