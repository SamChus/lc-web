import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";


const ServiceCountdown: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getNextServiceDate = (dayOfWeek: number, hour: number, minute: number) => {
    const now = new Date(); // Automatically get the current date and time
    const result = new Date(now);
    result.setDate(now.getDate() + ((7 + dayOfWeek - now.getDay()) % 7));
    result.setHours(hour, minute, 0, 0);
    if (result <= now) {
      result.setDate(result.getDate() + 7);
    }
    return result.toISOString();
  };

  const services = [
    {
      title: "Discipleship Service",
      description: "Grow more through discipleship classes",
      date: getNextServiceDate(1, 17, 0), // Monday at 5:00 PM (4 days from Thursday)
    },
    {
      title: "Sunday Service",
      description: "Join us for weekly worship",
      date: getNextServiceDate(0, 8, 0), // Sunday at 8:00 AM (3 days from Thursday)
    },
    {
      title: "WordFeast Communion Service",
      description: "Join us for Mid Week Service",
      date: getNextServiceDate(3, 17, 0), // Wednesday at 5:00 PM
    },
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
            className="bg-purple-700  text-white flex flex-col md:flex-row md:justify-between items-center px-6 py-8 md:px-8 md:py-12 min-w-full"
          >
            {/* Left Side - Service Details */}
            <div className="mb-4 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold">{service.title}</h2>
              <p className="text-gray-200 text-sm md:text-base">
                {service.description}
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-0 md:mb-0 ">
              <Countdown targetDate={service.date} />
            </div>



            {/* <div className="">
              <Connect bgColor="bg-[#B22E7B]" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCountdown;
