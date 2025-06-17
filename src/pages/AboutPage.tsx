import { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("apostle");

  const tabs = [
    {
      id: "apostle",
      label: "Apostle Francis E.A Onyebuchi",
      color: "text-gray-600",
    },
    { id: "mandate", label: "The Mandate", color: "text-gray-600" },
    { id: "mission", label: "Our Mission & Vision", color: "text-gray-600" },
    {
      id: "message",
      label: "The LightWorld City Message",
      color: "text-gray-600",
    },
  ];

  const tabContent = {
    apostle: (
      <div className="p-6">
        <h3 className="text-4xl font-semibold mb-4 text-[#8C2ABD]">
          Apostle Francis E.A Onyebuchi
        </h3>
        <p className="text-gray-700 text-2xl leading-relaxed">
          Francis E.A Onyebuchi is an Apostle with the prophetic grace and
          teaching insights. He is the presiding Bishop of Lightworld City
          Christian Center Inc (a.k.a. The Empowerment Place International
          Ministries Inc) which is an Apostolic Kingdom-Based & Empowerment
          Commission with the Mandate to “Raise Ambassadors as Kings & Priest of
          generational relevance by his Spirit for a Global & Apostolic Impact,
          with a network of Churches & Discipleship Hubs across Nigeria. Having
          been a tool in the hands of the Almighty for more than a decade, His
          apostolic sessions & systematic teachings with its theological compass
          have been a tool in the “raising, discipling , equipping, reviving &
          prophetically empowering the Saints for Ministry and global impacts,
          accompanied with experiential encounters, healings, signs & wonders
          amongst others. As an Apostle of Empowerment, He strives daily for the
          birthing of authentic apostolic discipleship systems and revivals
          through his “Intentional Ministers Summits (IMS) & Apostolic Builders
          Networks (ABN) which serve as an interdenominational Apostolic Network
          for the birthing of end-time kingdom servants as vessels of the last
          wave, with the Mandate of “equipping the called for their calling
          through Mandate discovery & fulfilment“. Through his apostolic writs
          (books) many have been able to find their place in destiny of which he
          believes is the core to exploits in Life & Ministry. He consults for
          Ministries, Organizations & Institutions on life coaching, intentional
          discipleship, mandate analysis, leadership & business, etc. He is
          married to Precious and blessed with a thriving family.
        </p>
      </div>
    ),
    mandate: (
      <div className="p-6">
        <h3 className="text-4xl font-semibold mb-4 text-[#8C2ABD]">
          The Mandate
        </h3>
        <p className="text-gray-700 text-2xl leading-relaxed">
          Raising Ambassadors (Apostolic Kingdom-Based Believers) of
          Generational Relevance by His Spirit; In Word, Anointing, Wonders and
          Grace; Irrespective of background or educational disciplines, and
          making them permissible tools in the hand of God for a Global impact
          and Apostolic impact.
        </p>
      </div>
    ),
    mission: (
      <div className="p-6">
        <h3 className="text-4xl font-semibold mb-4 text-[#8C2ABD]">
          Our Mission & Vision
        </h3>

        <ol className="list-decimal ml-6 space-y-4 text-gray-700 text-2xl leading-relaxed">
          <li>
            <span className="">
              Preaching the Apostolic Kingdom-Based message
            </span>{" "}
            for the empowerment of mankind across the nations of the earth and
            administering the revealed truths and mysteries of the kingdom
            in-line with the Apostolic order as delivered to this commission.
          </li>
          <li>
            <span className="">
              Planting of full gospel Apostolic Kingdom-Based and Charismatic
              Churches
            </span>{" "}
            to be known as{" "}
            <span className="font-bold">
              LIGHTWORLD CITY CHRISTIAN CENTER & THE EMPOWERMENT PLACE
              INTERNATIONAL MINISTRY WORLDWIDE
            </span>{" "}
            across the nations of the earth.
          </li>
          <li>
            <span className="">Equipping the called for his calling</span>;
            making him an apostolic vessel God can use through the establishing
            of Global Discipleship Systems (GDS), Ministerial and leadership
            institutions for the raising and empowering of kingdom giants for
            the fulfilments of their apostolic and global callings across the
            seven (7) world continents.
          </li>
          <li>
            <span className="">Reviving the elects</span> through the word of
            possibilities, anointing and edification in Christ Jesus through the
            instrumentality of Global missions and sending missionaries to all
            nations of the earth and into all works of life for the full
            redemption of the total man unto dignity in Christ.
          </li>
          <li>
            <span className="">
              Prophetically teaching and aligning the believer
            </span>{" "}
            on the present moves of God, making him relevant for kingdom
            advancement projects and establishing his faith in holiness in
            preparation of the Lord's coming which is heaven at last.
          </li>
          <li>
            <span className="">
              Spreading and Heralding the values of the gospel
            </span>{" "}
            through the establishment of educational, business & leadership
            institutional systems at all levels and encouraging the studying,
            understanding and practical application of the revealed bible truth
            for exploits in everyday life through scriptural, systematic and
            scientific discoveries.
          </li>
          <li>
            <span className="">
              Promoting and Caring for the wellbeing of humanity
            </span>{" "}
            through charity endeavors globally.
          </li>
          <li>
            <span className="">
              Publishing of the Apostolic Kingdom-Based principled teachings and
              beliefs
            </span>{" "}
            in furtherance of the Empowerment Mandate.
          </li>
        </ol>
      </div>
    ),
    message: (
      <div className="p-6">
        <h3 className="text-4xl font-semibold mb-4 text-[#8C2ABD]">
          The LightWorld City Message
        </h3>
        <p className="text-gray-700 text-2xl leading-relaxed">
          We are called, charged, instructed and commanded by the Lord to
          <span className="font-semibold"> Preach, Teach, Exposit, Testify, Proclaim, Publish, Unveil </span>
          the <span className="font-bold">APOSTOLIC KINGDOM-BASED MESSAGE</span> of the Lordship of Jesus Christ and
          His Kingdom here on earth and beyond. This is the key for
          raising Apostolic Kingdom-based believers, as we acknowledge the testimony of our Lord Jesus Christ as the Spirit of
          Prophecy, according to <span className="italic">Luke 4:17-19, Acts 2:41-47, John 1:1-5, 1 John 1:1-4, 1 Cor 2:4-5, Acts 5:12-16, Acts 2:14-47, Rev 19:10</span>.
        </p>
      </div>
    ),
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[500px] relative flex items-center lg:flex-row jus">
          <img
            src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746103075/lwc/papaPics_plkipk.png"
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full flex justify-end pr-5 lg:pr-20">
            <h1 className="text-5xl font-bold text-white">About</h1>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-[320px] rounded-lg">
              <img
                src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421970/lwc/img14_s3dfku.jpg"
                alt="Apostle Francis E.A Onyebuchi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-200 h-[320px] rounded-lg">
              <img
                src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421939/lwc/img5_ykhbns.jpg"
                alt="Apostle Francis E.A Onyebuchi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-200 h-[320px] rounded-lg">
              <img
                src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421980/lwc/img18_hwui62.jpg"
                alt="Apostle Francis E.A Onyebuchi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section with Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our History
          </h2>
          <div className="flex lg:justify-center mb-8 border-b overflow-x-auto scrollbar-hide">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 p-4 text-lg font-semibold transition-colors duration-300 text-nowrap  ${
                    activeTab === tab.id
                      ? `${tab.color} border-b-2 border-b-[#8C2ABD] text-[#8C2ABD]`
                      : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <style>{`
            .scrollbar-hide {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none; /* Chrome, Safari, and Opera */
            }
          `}</style>
          <div className="bg-gray-50 rounded-lg shadow-md">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
