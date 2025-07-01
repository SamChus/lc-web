import Navbar from "./Navbar";
import { image } from "../content/assets";
import Connect from "./Connect";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define slides with image and text
  const slides = [
    {
      image: image.papaimg,
      text: "To Raise Ambassadors as Kings & Priests For Global & Apostolic Impact.",
    },
    {
      image:
        "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745419579/lwc/1742147326712_dq2dz1.jpg",
      text: "Equipping the Called For His Calling, Irrespective of Background, Expertise Or Academic Discipline.",
    },
    {
      image:
        "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745422065/lwc/img26_cnrfnh.jpg",
      text: "Raising Kings, Financial Apostles in Business, Education, and Politics.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="slideshow">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Hero Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover slideshow-image ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 1s ease-in-out" }}
            />
          ))}
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>
      <div className="absolute inset-0 bg-pink-500/30 z-9"></div>

      {/* Navbar Component */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {slides.map((slide, index) => (
          <h1
            key={index}
            className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-xs sm:max-w-md md:max-w-3xl mb-4 sm:mb-6 md:mb-8 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: currentSlide === index ? "relative" : "absolute" }}
          >
            {slide.text}
          </h1>
        ))}
        <Connect bgColor="bg-pink-600" />

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-4 sm:mt-6 md:mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                currentSlide === index ? "bg-pink-500" : "bg-white"
              }`}
              style={{
                opacity: currentSlide === index ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slideshow-image {
          transition: opacity 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;