import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import logo from "../assets/maxpro.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#2E4A6B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img src={logo} alt="MAXPRO" className="w-20 h-20 object-contain" />
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              SYDNEY MAXPRO
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sydney Maxpro Services Pty Ltd provides professional cleaning and
              facility services with reliability, safety, and consistency.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to={"/"} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/security-service"} className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} /> 0410 101 081
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> admin@sydneymaypro.com.au
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              FOLLOW US
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Sydney Maxpro Services Pty Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
