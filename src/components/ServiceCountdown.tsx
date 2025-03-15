import React from "react";
import Countdown from "./Countdown";

const ServiceCountdown: React.FC = () => {
  return (
    <div className="bg-purple-700 text-white flex justify-between items-center px-8 py-12">
      {/* Left Side - Service Details */}
      <div>
        <h2 className="text-xl font-bold">Discipleship Service</h2>
        <p className="text-gray-200">Grow more through discipleship classes</p>
      </div>

      {/* Countdown Timer */}
      <Countdown targetDate="2025-03-16T18:00:00" />

      {/* Join Button */}
      <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white transition">
        JOIN NOW
      </button>
    </div>
  );
};

export default ServiceCountdown;
