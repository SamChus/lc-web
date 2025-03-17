import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center space-x-4">
      {["days", "hours", "minutes"].map((unit, index) => (
        <div key={index} className="flex flex-col items-center bg-transparent border border-pink-500 px-6 py-2 rounded-md text-white">
          <span className="text-3xl font-bold">
            {timeLeft[unit as keyof typeof timeLeft].toString().padStart(2, "0")}
          </span>
          <span className="text-sm uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
