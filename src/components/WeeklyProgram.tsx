import Carousel from "./Carousel";

import Connect from "./Connect";

const WeeklyProgram = () => {
  const slides = [
    <div
      key={1}
      className="slide relative font-[Poppins] font-semibold h-[425px]"
    >
      <img
        src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745418921/lwc/IMG_20250320_164114_569_oeebab.jpg"
        alt="Slide 2"
      />
      <div className="absolute p-6 inset-0 flex flex-col h-full justify-between items-start text-white bg-black bg-opacity-50">
        <h3 className="text-left text-xl">
          <span className="text-sm">Discipleship Service</span>
          <br />
          Equipping the called
        </h3>
        <p className="text-left text-[15.15px]">
          Monday <br /> 5PM (WAT)
        </p>
      </div>
    </div>,
    <div
      key={2}
      className="slide relative font-[Poppins] font-semibold h-[425px]"
    >
      <img
        src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745418921/lwc/IMG_20250320_164111_669_tnfbfy.jpg"
        alt="Slide 2"
        className="object-cover h-48"
      />
      <div className="absolute p-6 inset-0 flex flex-col h-full justify-between items-start text-white bg-black bg-opacity-50">
        <h3 className="text-left text-xl">
          <span className="text-sm">Apostolic (mid -week) Hour Service</span>
          <br />
          Raising Kingdom Ambassadors
        </h3>
        <p className="text-left text-[15.15px]">
          Wednesday <br /> 5PM (WAT)
        </p>
      </div>
    </div>,
    <div
      key={3}
      className="slide relative font-[Poppins] font-semibold h-[425px]"
    >
      <img
        src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745418921/lwc/IMG_20250320_164116_283_b8zfkw.jpg"
        alt="Slide 2"
        className="object-cover h-48"
      />

      <div className="absolute p-6 inset-0 flex flex-col h-full justify-between items-start text-white bg-black bg-opacity-50">
        <h3 className="text-left text-xl">
          <span className="text-sm">Sunday Mega Service</span>
          <br />
          Apostolic Kingdom Service
        </h3>
        <p className="text-left text-[15.15px]">
          Monday <br /> 5PM (WAT)
        </p>
      </div>
    </div>,
  ];
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-[48px] text-center my-8">Programs</h1>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        <Carousel slides={slides} classname="w-full " fill delay={3000} />
        <div className="flex flex-col justify-center p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] text-[32px] py-3">WEEKLY SERVICES</h2>
          <p className="text-[40px]">THE APOSTOLIC KINGDOM BASED TEACHINGS</p>
          <Connect bgColor="bg-[#9C1FDB]" />
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgram;
