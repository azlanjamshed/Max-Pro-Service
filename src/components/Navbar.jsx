import { useState } from "react";
import { Menu, X } from "lucide-react";
import maxproLogo from "../assets/maxpro.jpeg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-3">
          <img
            src={maxproLogo}
            alt="MAXPRO"
            className="w-20 h-20 object-contain"
          />
          <span className="text-sm font-semibold text-gray-800  ">
            SYDNEY MAXPRO SERVICES AUS PTY LTD
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>

          {/* Services */}
          <div className="relative group">
            <button className="hover:text-blue-600 flex items-center gap-1">
              Services ▾
            </button>
            <div className="absolute top-full left-0  w-48 bg-white  rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <Link
                to={"/security-service"}
                className="hover:text-blue-600 block px-4 py-2 hover:bg-gray-100"
              >
                Security Service
              </Link>
              <Link
                to={"/cleaning-service"}
                className="hover:text-blue-600 block px-4 py-2 hover:bg-gray-100"
              >
                Cleaning Service
              </Link>
            </div>
          </div>

          {/* Who We Are */}
          <div className="relative group">
            <button className="hover:text-blue-600 flex items-center gap-1">
              Who We Are ▾
            </button>
            <div className="absolute top-full left-0  w-44 bg-white  rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <Link
                to={"/about"}
                className="hover:text-blue-600 block px-4 py-2 hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                to={"/our-team"}
                className="hover:text-blue-600 block px-4 py-2 hover:bg-gray-100"
              >
                Our Team
              </Link>
            </div>
          </div>

          <Link to={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>

          <span className="font-semibold text-gray-900">📞 0410 101 081</span>

          <button className="ml-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Admin Login
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3 text-sm">
          <a href="#" className="block py-2">
            Home
          </a>

          {/* Services Mobile */}
          <div>
            <button
              className="flex justify-between w-full py-2"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2 text-gray-600 flex flex-col">
                <a href="#">Securith Service</a>
                <a href="#">Cleaning Service</a>
              </div>
            )}
          </div>

          {/* Who We Are Mobile */}
          <div>
            <button
              className="flex justify-between w-full py-2"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              Who We Are
              <span>{aboutOpen ? "−" : "+"}</span>
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-2 text-gray-600 flex flex-col">
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-2">
            Contact
          </a>

          <div className="pt-2 font-semibold">📞 0410 101 081</div>

          <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">
            Admin Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
