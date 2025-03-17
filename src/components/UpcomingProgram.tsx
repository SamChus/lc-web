import React from "react";
import Carousel from "./Carousel";
import ImageOne from "../assets/up1.png";
import ImageTwo from "../assets/up2.png";
import ImageThree from "../assets/up3.png";

const UpcomingEvent = () => {
  const slides = [
    <div key={1} className="slide h-[456px]">
      <img src={ImageOne} alt="Slide 1" />
    </div>,
    <div key={2} className="slide h-[456px]">
      <img src={ImageTwo} alt="Slide 2" />
    </div>,
    <div key={3} className="slide h-[456px]">
      <img src={ImageThree} alt="Slide 3" />
    </div>,
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        <Carousel slides={slides} classname="w-full" delay={10000}/>
        <div className="flex flex-col justify-center p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] text-[32px] py-3">UPCOMING PROGRAMS</h2>
          <p className="text-[40px]">GLOBAL CONFERENCES</p>
          <button className="w-[280px] bg-[#9C1FDB] text-white px-8 py-3  rounded-lg mt-4">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
