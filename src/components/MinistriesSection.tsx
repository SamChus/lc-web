export default function MinistriesSection() {
  return (
    <section className="bg-white py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Ministries</h2>
      <MinistryIntro />
      <div className="p-4 w-[90%] mx-auto rounded-lg bg-white mt-[-60px] relative z-9">
        <ProgramsCarousel />
      </div>
    </section>
  );
}


function MinistryIntro() {
  return (
    <div className="relative overflow-hidden mb-8">
      <img
        src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433774/lwc/tbi2_foplz9.jpg"
        alt="TBI Banner"
        className="w-full h-64 object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-2">TBI</h3>
        <p className="max-w-3xl text-sm md:text-base leading-relaxed">
          TAMIC BELIEVERS INSTITUTE (TBI) is a global apostolic school with a
          mission to "Raise and Empower vessels for Apostolic and Global
          Impact." TBI provides structured ministerial, theological, and
          leadership training for Christians and ministers worldwide, regardless
          of denomination or academic background. It offers two key programs:
        </p>
      </div>
    </div>
  );
}

const programs = [
  {
    title: "BASIC BELIEVERS COURSE (BBC) & ADVANCED BELIEVERS COURSE (ABC)",
    description:
      "BBC is a basic discipleship and conversion course and ABC is an advanced empowerment and Global course.",
    image:
      "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433899/lwc/bsm2_ercrf9.png",
  },
  {
    title: "BELIEVER’S SCHOOL OF MINISTRY (BSM)",
    description:
      "BSM is a non-denominational Christian leadership school of ministry.",
    image:
      "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745419556/lwc/1742147326580_it50ft.jpg",
  },
  {
    title: "APOSTOLIC LEADERSHIP SCHOOL (ALS)",
    description:
      "Is a higher order Discipleship and Ministry course. It is a school for Global Leaders.",
    image:
      "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745419579/lwc/1742147326712_dq2dz1.jpg",
  },
];

function ProgramsCarousel() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 overflow-x-auto snap-x scroll-smooth pb-4">
      {programs.map((program, idx) => (
        <ProgramCard key={idx} {...program} />
      ))}
    </div>
  );
}   


interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

function ProgramCard({ title, description, image }: ProgramCardProps) {
  return (
    <div className=" w-[90%] h-[366px] bg-white rounded-xl shadow-md overflow-hidden snap-start ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <h4 className="text-sm font-bold mb-2">{title}</h4>
        <p className="text-xs text-gray-700 mb-4">{description}</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm w-max self-start">
          Apply Now
        </button>
      </div>
    </div>
  );
}
