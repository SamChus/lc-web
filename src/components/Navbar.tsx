import { FC } from "react";
import { icons } from "../content/assets";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  type?: string;
}

const Navbar:FC<NavLinkProps> = ({type}) => {
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
    <nav
      className={`top-0 left-0 w-full flex gap-[20%] items-center p-5 z-50 text-black`}
    >
      <div className="flex items-center gap-2">
        <img src={icons.logo} alt="Logo" className="w-12 h-12" /> 
      </div>
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`${
                location.pathname === link.path ? "text-pink-500" : type === "others" ? "text-black" : "text-white"}
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