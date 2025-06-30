import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mzzgodlk");

  if (state.succeeded) {
    return (
      <section className="text-white py-12 px-4 md:px-16" id="contact-us">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="text-white py-12 px-4 md:px-16 " id="contact-us">
      <h2 className="text-center text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-center max-w-2xl mx-auto mb-8">
        Connect with us, we would love to read from you. To share testimonies,
        request prayer, make enquiries and support the Lord's work, fill out the
        form to reach out to us.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2"
      >
        <div>
          <div>
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full p-3 rounded-md text-white bg-transparent border-[1px] border-[#FFEEF8]"
              placeholder="Enter your name"
            />
            <ValidationError
              prefix="Full Name"
              field="fullName"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-white"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-white"
              placeholder="Enter your phone number"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="message" className="block mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 rounded-md bg-transparent border-[1px] border-[#FFEEF8] text-white h-[87%]"
            placeholder="Type your message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="md:col-span-2 bg-transparent border-[1px] my-4 text-white py-3 rounded-md font-semibold hover:bg-white hover:text-[#792F9E] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
