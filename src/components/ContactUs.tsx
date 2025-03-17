const ContactUs = () => {
  return (
    <section className="bg-purple-700 text-white py-12 px-6 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-center max-w-2xl mx-auto mb-8">
        Connect with us, we would love to read from you. To share testimonies,
        request prayer, make enquiries and support the Lord's work, fill out the
        form to reach out to us.
      </p>
      <form className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
        <div>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-3 rounded-md border-none text-gray-900"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 rounded-md border-none text-gray-900"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full p-3 rounded-md border-none text-gray-900"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2">Your Message</label>
          <textarea
            className="w-full p-3 rounded-md border-none text-gray-900 h-32"
            placeholder="Type your message"
          ></textarea>
        </div>
        <button className="md:col-span-2 bg-white text-purple-700 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
