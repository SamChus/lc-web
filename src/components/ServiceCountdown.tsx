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
        className="bg-purple-700 text-white flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-8 md:py-12 min-w-full"
        >
        {/* Left Side - Service Details */}
        <div className="mb-4 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold">{service.title}</h2>
          <p className="text-gray-200 text-sm md:text-base">{service.description}</p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-4 md:mb-0">
          <Countdown targetDate={service.date} />
        </div>

        {/* Join Button */}
        <button className="border border-pink-500 text-pink-500 px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-pink-500 hover:text-white transition">
          JOIN NOW
        </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ServiceCountdown;
