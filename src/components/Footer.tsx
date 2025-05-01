import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className=" text-white px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="logo" className="w-24 mb-4" />
          {/* <p className="text-sm">
            LightWorld City International is a non-denominational ministry that is committed to raising ambassadors of generational relevance by His Spirit; Word, Anointing, Wonders and Grace; irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Charismatic and Global impact.
          </p> */}
        </div>
        <div>
          <h3 className="text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/events">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ministries">Ministries</Link>
            </li>
            <li>
              <a href="#sermons">Sermons</a>
            </li>
            <li>
              <Link to="/give">Give Online</Link>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/livestream">Join Livestream</Link>
            </li>
            <li>
              <Link to="/testimonies">Testimonies</Link>
            </li>
            <li>
              <Link to="/gallery">View Gallery</Link>
            </li>
            <li>
              <a href="#branches">Locate a Branch</a>
            </li>
            <li>
              <Link to="/leadership">Leadership Bio</Link>
            </li>
            <li>
              <Link to="/resources">Downloadable Resources</Link>
            </li>
            <li>
              <Link to="/membership">Become a Member</Link>
            </li>
            <li>
              <Link to="/counselling">Counselling</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-3">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@lightworldcity.com">info@lightworldcity.com</a>
          </p>
          <p>
            Phone: <a href="tel:+2347063315621">+2347063315621</a>
          </p>
          <p>
            Address: Plot 10 Elder Biety Nwanju Street, Isieke Housing Estate,
            Off Amaeke/Ukomme Road, Umuahia, Abia State, Nigeria
          </p>
        </div>
      </div>
      <div className="border-[.5px] border-[#ffffff4d] my-14 w-[98%] m-auto" />
      <div className="flex m-auto justify-center gap-10">
        <Link
          to="https://www.youtube.com/@lightworldairforce2023"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaYoutube />
        </Link>
        <Link
          to="facebook.com/lcheadquaters?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://x.com/LightworldCity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaTwitter />
        </Link>
        <Link
          to="instagram.com/invites/contact/?i=3m70x1n9fsrz&utm_content=1xodo58"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl"
        >
          <FaInstagram />
        </Link>
      </div>
      <p className="text-center my-8 text-2xl">Contanct Info</p>
      <p className="text-center mb-10 text-2xL">
        © Copyright 2025 LightWorld City International. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
