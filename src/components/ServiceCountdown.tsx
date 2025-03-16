import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

const ServiceCountdown: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Discipleship Service",
      description: "Grow more through discipleship classes",
      date: "2025-05-20T18:00:00",
    },
    {
      title: "Sunday Service",
      description: "Join us for weekly worship",
      date: "2025-05-21T10:00:00",
    },
    {
      title: "WordFeast Communion Service",
      description: "Join us for Mid Week Service",
      date: "2025-05-22T19:00:00",
    },
    // {
    //   title: "Bible Study",
    //   description: "Deep dive into God's word",
    //   date: "2025-05-23T18:30:00",
    // },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-700 text-white flex justify-between items-center px-8 py-12 min-w-full"
          >
            {/* Left Side - Service Details */}
            <div>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-gray-200">{service.description}</p>
            </div>

            {/* Countdown Timer */}
            <Countdown targetDate={service.date} />

            {/* Join Button */}
            <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white transition">
              JOIN NOW
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-pink-500" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
      
    </div>
  );
};

export default ServiceCountdown;
