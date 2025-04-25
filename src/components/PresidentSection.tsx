export default function PresidentSection() {
  return (
    <section
      className="w-full relative h-[600px] bg-[#7E3721] text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(126, 55, 33, 0) 1.59%, #7E3721 7.16%, #7E3721 84.37%, #7E3721 97.74%)"
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745418921/lwc/IMG_20250320_164123_678_dhncix.jpg" // Replace with your actual image path
          alt="President Francis E.A Onybuchi"
          className="w-full h-full object-cover object-left "
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>

      {/* Content */}
      <div className="absolute right-0 bottom-0 z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 py-8">
        {/* Left Side: Image (hidden because already used in bg) */}
        <div className="w-full md:w-1/2 hidden md:block" />

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 text-white mt-5 md:mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="relative z-10">Meet Our President</span>
          </h2>

          <p className="text-sm md:text-base font-semibold leading-relaxed text-white mb-8 w-[80%] md:w-[100%]">
            Francis E.A Onybuchi, is an Apostle with the Prophetic Grace and
            Teaching Insight. He is the founding-President, The Apostolic
            Ambassadors Ministries Inc. (A.K.A LightWorld City Christian Center
            Inc). An Apostolic, Kingdom-Based & Empowering commission with the
            mandate of “Raising Ambassadors of Generational Relevance by God’s
            Spirit; In Word, Anointing, Wonders and Grace”. A core
            Kingdom-discipler, Life Coach and trained human resource development
            personnel. He is also the International President, International
            Ambassadors and Ministers Summit (IAMS), which is a breeding ground
            for raising Apostolic Ambassadors and ministers as Vessels of the
            last wave. He is the Coach of LeadFaith Resource Consults, which is
            a global-mentorship & real estate conglomerate.
          </p>

          <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#702d1d] transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
