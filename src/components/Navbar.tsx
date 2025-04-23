import { FC, useState } from "react";
import { icons } from "../content/assets";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  type?: string;
}

const Navbar: FC<NavLinkProps> = ({ type }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/about", label: "About" },
    { path: "/ministries", label: "Ministries" },
    { path: "/sermons", label: "Sermons" },
    { path: "/give", label: "Give Online" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`top-0 left-0 w-full flex items-center justify-between p-5 z-50 ${
        type === "others" ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <img src={icons.logo} alt="Logo" className="w-12 h-12" />
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-6 text-lg font-semibold absolute md:static top-16 left-0 w-full md:w-auto ${
          type === "others"
            ? "bg-white text-black"
            : "bg-gray-800 text-white md:bg-transparent"
        } p-5 md:p-0`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-pink-500"
                  : type === "others"
                  ? "text-black"
                  : "text-gray-300"
              } hover:text-pink-300 transition-colors`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;