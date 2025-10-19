import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import HeaderLink from "./HeaderLink";
import Logo from "./Logo";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/works", label: "Works" },
  { id: 4, path: "/contact", label: "Contact" },
];

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="flex justify-between items-center h-16 pb-2 px-4 md:px-0">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <HeaderLink name={link.label} />
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray hover:text-primary transition-colors duration-300 z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg border-l border-gray-600 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={closeMenu}
              className="block py-2 border-b border-gray-700/50 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <span className="text-primary text-lg">#</span>
                <span className="text-gray hover:text-white text-lg font-medium transition-colors duration-300">
                  {link.label}
                </span>
              </div>
            </NavLink>
          ))}

          {/* Mobile Menu Footer */}
          <div className="pt-8 mt-8 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm text-center">
              Samudcha Portfolio
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavHeader;
