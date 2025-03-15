import { icons } from "../content/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 z-20 text-white">
      <div className="flex items-center gap-2">
        <img src={icons.logo} alt="Logo" className="w-12 h-12" />
      </div>
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${
                location.pathname === link.path ? "text-pink-500" : "text-white"
              } hover:text-pink-300 transition-colors`}
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
