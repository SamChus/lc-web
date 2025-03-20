import logo from '../assets/logo.png';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="logo" className="w-24 mb-4" />
          {/* <p className="text-sm">
            LightWorld City International is a non-denominational ministry that is committed to raising ambassadors of generational relevance by His Spirit; Word, Anointing, Wonders and Grace; irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Charismatic and Global impact.
          </p> */}
        </div>
        <div>
          <h3 className="text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>Home</li>
            <li>Programs</li>
            <li>Upcoming Events</li>
            <li>About</li>
            <li>Ministries</li>
            <li>Sermons</li>
            <li>Give Online</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li>Join Livestream</li>
            <li>Testimonies</li>
            <li>View Gallery</li>
            <li>Locate a Branch</li>
            <li>Leadership Bio</li>
            <li>Downloadable Resources</li>
            <li>Become a Member</li>
            <li>Counselling</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-3">Contact Us</h3>
          <p>Email: info@lightworldcity.com</p>
          <p>Phone: +2347063315621</p>
          <p>
            Address: Plot 10 Elder Biety Nwanju Street, Isieke Housing Estate,
            Off Amaeke/Ukomme Road, Umuahia, Abia State, Nigeria
          </p>
        </div>
      </div>
      <div className="border-[.5px] border-[#ffffff4d] my-14 w-[98%] m-auto" />
      <div className="flex m-auto justify-center gap-10">
        <span className="text-4xl">
          <FaYoutube />
        </span>
        <span className="text-4xl">
          <FaFacebook />
        </span>
        <span className="text-4xl">
          <FaTwitter />
        </span>
        <span className="text-4xl">
          <FaInstagram />
        </span>
      </div>
      <p className='text-center my-8 text-2xl'>
        Contanct Info
      </p>
      <p className="text-center mb-10 text-2xL">
        © Copyright 2025 LightWorld City International. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;