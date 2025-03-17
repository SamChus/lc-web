const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
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
          <h3 className="text-lg font-bold mb-3">Connect with Us</h3>
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
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p>Email: info@lightworldcity.com</p>
          <p>Phone: +2347063315621</p>
          <p>Address: Plot 10 Elder Biety Nwanju Street, Isieke Housing Estate, Off Amaeke/Ukomme Road, Umuahia, Abia State, Nigeria</p>
          <div className="flex space-x-4 mt-4">
            <span className="text-2xl">📺</span>
            <span className="text-2xl">📘</span>
            <span className="text-2xl">🐦</span>
            <span className="text-2xl">📸</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">© 2025 LightWorld City International. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;