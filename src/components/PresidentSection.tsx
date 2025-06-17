export default function PresidentSection() {
  return (
    <section
      className="w-full relative h-screen bg-[#7E3721] text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(126, 55, 33, 0) 1.59%, #7E3721 7.16%, #7E3721 84.37%, #7E3721 97.74%)",
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
            Francis E.A Onyebuchi is an Apostle with the prophetic grace and
            teaching insights. He is the presiding Bishop of Lightworld City
            Christian Center Inc (a.k.a. The Empowerment Place International
            Ministries Inc) which is an Apostolic Kingdom-Based & Empowerment
            Commission with the Mandate to “Raise Ambassadors as Kings & Priest
            of generational relevance by his Spirit for a Global & Apostolic
            Impact, with a network of Churches & Discipleship Hubs across
            Nigeria. Having been a tool in the hands of the Almighty for more
            than a decade, His apostolic sessions & systematic teachings with
            its theological compass have been a tool in the “raising, discipling
            , equipping, reviving & prophetically empowering the Saints for
            Ministry and global impacts, accompanied with experiential
            encounters, healings, signs & wonders amongst others. As an Apostle
            of Empowerment, He strives daily for the birthing of authentic
            apostolic discipleship systems and revivals through his “Intentional
            Ministers Summits (IMS) & Apostolic Builders Networks (ABN) which
            serve as an interdenominational Apostolic Network for the birthing
            of end-time kingdom servants as vessels of the last wave, with the
            Mandate of “equipping the called for their calling through Mandate
            discovery & fulfilment“. Through his apostolic writs (books) many
            have been able to find their place in destiny of which he believes
            is the core to exploits in Life & Ministry. He consults for
            Ministries, Organizations & Institutions on life coaching,
            intentional discipleship, mandate analysis, leadership & business,
            etc. He is married to Precious and blessed with a thriving family.
          </p>

          <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#702d1d] transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
