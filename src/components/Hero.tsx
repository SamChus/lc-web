import Navbar from "./Navbar";
import { image, icons } from "../content/assets";



const HeroSection = () => {
  const backgroundImages = [
    image.papaimg,
    image.papa1,
    image.papa2,
  ];

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
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl">
          To Raise Ambassadors as Kings & Priests For Global And Apostolic Impact.
        </h1>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
         
          <img src={icons.play} alt="play button" />
          
          CONNECT TO SERVICE
        </button>

        <div className="flex gap-2 mt-8">
            {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 slideshow-dot`}
              style={{
              backgroundColor: 'white',
              opacity: 0.5,
              animation: `dotHighlight 15s infinite ${index * 5}s`,
              animationFillMode: 'both'
              }}
            />
            ))}
            <style jsx>{`
              @keyframes dotHighlight {
              0% { opacity: 0.5; background-color: white; }
              20% { opacity: 1; background-color: #EB1793; }
              33.33% { opacity: 1; background-color: #EB1793; }
              53.33% { opacity: 0.5; background-color: white; }
              100% { opacity: 0.5; background-color: white; }
              }
            `}</style>
        </div>
        <style jsx>{`
          @keyframes dotHighlight {
            0% { opacity: 0.5; }
            20% { opacity: 1; }
            33.33% { opacity: 1; }
            53.33% { opacity: 0.5; }
            100% { opacity: 0.5; }
          }
        `}</style>
      </div>

      {/* Add CSS styles */}
      <style jsx>{`
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slideshow-image {
          opacity: 0;
          animation: slideshow 15s infinite;
        }

        ${backgroundImages.map((_, index) => `
          .slideshow-image:nth-child(${index + 1}) {
            animation-delay: ${index * 5}s;
          }
        `).join('')}

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