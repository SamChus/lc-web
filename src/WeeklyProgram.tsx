import React from 'react'
import Carousel from "./Carousel";
import ImageOne from "./assets/p1.png";
import ImageTwo from "./assets/p2.png";

const WeeklyProgram = () => {
    const slides = [
      <div key={1} className="slide">
        <img src={ImageOne} alt="Slide 1" />
        <h2>Slide 1</h2>
      </div>,
      <div key={2} className="slide">
        <img src={ImageTwo} alt="Slide 2" />
        <h2>Slide 2</h2>
      </div>,
      <div key={3} className="slide">
        <img src={ImageOne} alt="Slide 3" />
        <h2>Slide 3</h2>
      </div>,
      <div key={4} className="slide">
        <img src={ImageTwo} alt="Slide 4" />
        <h2>Slide 4</h2>
      </div>,
      <div key={5} className="slide">
        <img src={ImageOne} alt="Slide 5" />
        <h2>Slide 5</h2>
      </div>,
      <div key={6} className="slide">
        <img src={ImageTwo} alt="Slide 6" />
        <h2>Slide 6</h2>
      </div>,
      <div key={7} className="slide">
        <img src={ImageOne} alt="Slide 7" />
        <h2>Slide 7</h2>
      </div>,
      <div key={8} className="slide">
        <img src={ImageTwo} alt="Slide 8" />
        <h2>Slide 8</h2>
      </div>,
      <div key={9} className="slide">
        <img src={ImageOne} alt="Slide 9" />
        <h2>Slide 9</h2>
      </div>,
      <div key={10} className="slide">
        <img src={ImageTwo} alt="Slide 10" />
        <h2>Slide 10</h2>
      </div>,
    ];
  return (
    <div className="bg-gray-500 ">
      <h1>Programs</h1>
      <div className="flex">
        <Carousel slides={slides} classname="w-full md:w-[100%] mr-4" />
        <div className="flex flex-col justify-center w-[40%]">
          <h2>Brief Context</h2>
          <p>
            This is a brief context about the programs. You can add more details
            here to provide additional information about each program or the
            overall theme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeeklyProgram