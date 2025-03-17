import Navbar from "./Navbar";
import { image } from "../content/assets";
import Connect from "./Connect";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = [
    image.papaimg,
    image.papa1,
    image.papa2,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="slideshow">
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover slideshow-image"
            />
          ))}
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>
      <div className="absolute inset-0 bg-pink-500/30 z-9"></div>

      {/* Navbar Component - Ensure it's positioned correctly */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl mb-8">
          To Raise Ambassadors as Kings & Priests For Global And Apostolic
          Impact.
        </h1>
        <Connect bgColor="bg-pink-600" />

        <div className="flex gap-2 mt-8">
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 slideshow-dot ${
                currentSlide === index ? "bg-pink-500" : "bg-white"
              }`}
              style={{
                opacity: 0.2,
                animation: `dotHighlight 15s infinite ${index * 5}s`,
                animationFillMode: "both",
              }}
            />
          ))}
          <style>{`
            @keyframes dotHighlight {
              0% { opacity: 0.5; background-color: white; }
              20% { opacity: 1; background-color: #EB1793; }
              33.33% { opacity: 1; background-color: #EB1793; }
              53.33% { opacity: 0.5; background-color: white; }
              100% { opacity: 0.5; background-color: white; }
            }
          `}</style>
        </div>
      </div>

      {/* Add CSS styles */}
      <style>{`
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slideshow-image {
          opacity: 0;
          animation: slideshow 15s infinite;
        }

        ${backgroundImages
          .map(
            (_, index) => `
          .slideshow-image:nth-child(${index + 1}) {
            animation-delay: ${index * 5}s;
          }
        `
          )
          .join("")}

        @keyframes slideshow {
          0% { opacity: 0; }
          20% { opacity: 1; }
          33.33% { opacity: 1; }
          53.33% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;