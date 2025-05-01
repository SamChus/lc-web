import { useState } from "react";


const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("apostle");

  const tabs = [
    {
      id: "apostle",
      label: "Apostle Francis E.A Onyebuchi",
      color: "text-blue-600",
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
        <h3 className="text-2xl font-semibold mb-4">
          Apostle Francis E.A Onyebuchi
        </h3>
        <p className="text-gray-600">
          Francis E.A Onyebuchi, Is an Apostle with the Prophetic Grace and
          Teaching Insight. He is the founding-President, The Apostolic
          Ambassadors Ministries Inc. (A.K.A LightWorld City Christian Center
          Inc). An Apostolic, Kingdom-Based & Empowering commission with the
          mandate of “Raising Ambassadors of Generational Relevance by God’s
          Spirit; In Word, Anointing, Wonders and Grace”. He holds a B.Sc. in
          Surveying and Geo-informatics, from the Nnamdi Azikiwe University,
          Awka. & B.A in Religious & Cultural Studies, an alumnus of the
          Assemblies of God Divinity (Bible School) Old Umuahia. A core
          Kingdom-discipler, Life Coach and trained human resource development
          personnel. He is also the International President, International
          Ambassadors and Ministers Summit (IAMS), which is a breeding ground
          for raising Apostolic Ambassadors and ministers as Vessels of the last
          wave. He is the Coach of LeadFaith Resource Consults, which is a
          global-mentorship & real estate conglomerate. Having been a tool in
          the hand of the Almighty for more than a decade, His Apostolic call
          and systematic teachings with its theological compass has been a trend
          tool in the discipleings, transformations, reviving and prophetically
          empowering the saints for service, accompanied with instant
          encounters, Healings, signs and wonders. He is a vessel for global &
          National Transformations and a certified graduate of Leadership
          Diploma Course (WOFBI). He is happily married to Precious Kosisochukwu
          Francis-Onyebuchi and they are blessed with a Son, Jason-Daniels and
          numerous Spiritual Sons & Daughters.
        </p>
      </div>
    ),
    mandate: (
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">The Mandate</h3>
        <p className="text-gray-600">
          <strong>THE COMMISSION THREE-FOLD MANDATE</strong>
        </p>
        <p className="text-gray-600">
          <strong>THE THREE TIERS OF THE COMMISSION'S EMPOWERMENT MANDATE:</strong>
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>
            <strong>Apostolic Impact Mandate – 21st March 2013:</strong> Raising Ambassadors of Generational Relevance by His Spirit; In Word, Anointing, Wonders, and Grace; Irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Charismatic and Global impact.
          </li>
          <li>
            <strong>Discipleship-Building Mandate – 21st March 2013:</strong> Equipping the Called For His Calling, Irrespective Of Background, Expertise, Or Academic Discipline – Making Him The Man (A Vessel) God Can Use.
          </li>
          <li>
            <strong>Global Impact / National Transformations Mandate (B.E.P) – 18th September 2017:</strong> Raise Me Kings, Raise Me Financial Apostles In Business, Education, And Politics. Create And Establish Platforms In These Areas For Global Impacts.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          Therefore, in:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>
            <strong>Apostolic Impacts Mandate:</strong> We set the pace in ministry through Signs and Wonders.
          </li>
          <li>
            <strong>Discipleship Mandate:</strong> We Raise and Equip Men for Exploits.
          </li>
          <li>
            <strong>Global Impacts Mandate:</strong> We light up the world.
          </li>
        </ul>
      </div>
    ),
    mission: (
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Our Mission & Vision</h3>
        <p className="text-gray-600">
          <strong>Mission:</strong> We are called, charged, instructed, and
          commanded by the Lord to ‘Preach, Teach, Exposit, Testify, Proclaim,
          Publish, Unveil the APOSTOLIC KINGDOM-BASED MESSAGE of the Lordship of
          Jesus Christ and His Kingdom here on earth and beyond the earth. This
          is the key to raising Apostolic Kingdom-based believers, as we
          acknowledge the testimony of our Lord Jesus Christ as the Spirit of
          Prophecy, according to Luke 4:17-19, Acts 2:41-47, John 1:1-5, 1 John
          1:1-4, 1 Cor 2:4-5, Acts 5:12-16, Acts 2:14-47, Rev 19:10.
          <br />
          <strong>Vision:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Teaching and empowering students from the Word and academic
              discipline.
            </li>
            <li>
              Raising and building indomitable Bible scholars, teachers, and
              ministers of the Word irrespective of their academic discipline.
            </li>
            <li>
              Building capacity, re-ordering corrupted social values, and
              positioning youths to Christ.
            </li>
            <li>
              Lending and impacting creative support to the urgent need of
              rediscovering the identity and place of youths in the church as
              the fire and force of evangelism.
            </li>
            <li>
              Raising worthy ambassadors who are sound in academics and
              excellent in wisdom.
            </li>
            <li>
              Unlocking the leadership potential in youths that will help them
              throughout their lives.
            </li>
          </ul>
        </p>
      </div>
    ),
    message: (
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">
          The LightWorld City Message
        </h3>
        <p className="text-gray-600">
          We are called, charged, instructed and commanded by the Lord to
          ‘Preach, Teach, Exposit, Testify, Proclaim, Publish, Unveil the
          APOSTOLIC KINGDOM-BASED MESSAGE of the Lordship of Jesus Christ and
          His Kingdom Here on earth and Beyond the earth for that is the key for
          the raising of the Apostolic Kingdom-based believers, as We
          acknowledge the testimony of our Lord Jesus Christ as the Spirit of
          Prophecy, according to Luke 4:17-19, Acts 2:41-47, John 1:1-5, 1john
          1:1-4, 1Cor 2:4-5, Acts 5:12-16, Acts 2:14-47, Rev 19:10.
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