const ContactUs = () => {
  return (
    <section className="text-white py-12 px-4 md:px-16 " id="contact-us">
      <h2 className="text-center text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-center max-w-2xl mx-auto mb-8">
        Connect with us, we would love to read from you. To share testimonies,
        request prayer, make enquiries and support the Lord's work, fill out the
        form to reach out to us.
      </p>
      <form className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div>
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-md text-gray-900 bg-transparent border-[1px] border-[#FFEEF8]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-gray-900"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="">
          <label className="block mb-2">Your Message</label>
          <textarea
            className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-gray-900 h-[87%]"
            placeholder="Type your message"
          ></textarea>
        </div>
        <button className="md:col-span-2 bg-transparent border-[1px] my-4 text-white py-3 rounded-md font-semibold hover:bg-white hover:text-[#792F9E] transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
