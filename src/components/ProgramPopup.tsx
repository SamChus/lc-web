import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

interface ProgramPopupProps {
    isOpen: boolean;
    onClose: () => void;
    program: {
        title: string;
        subtitle: string;
        date: string;
        time: string;
        image: string;
        description?: string;
        link?: string;
    };
}

const ProgramPopup = ({ isOpen, onClose, program }: ProgramPopupProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (!isOpen) return;

        const calculateTimeLeft = () => {
            const targetDate = new Date(program.date);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [isOpen, program.date]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center py-4 px-2 sm:py-8 md:py-12 sm:px-4 bg-black bg-opacity-70 animate-fadeIn overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full overflow-y-auto transform transition-all animate-slideUp my-auto max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-6rem)]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        console.log("X button clicked!");
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Close popup"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Program Image */}
                <div className="relative h-40 sm:h-52 md:h-64 overflow-hidden mt-10 sm:mt-14 md:mt-20">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Program Title */}
                    <div className="mb-4 sm:mb-6">
                        <p className="text-xs sm:text-sm uppercase tracking-wider text-[#B22E7B] font-semibold mb-1 sm:mb-2">
                            {program.subtitle}
                        </p>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                            {program.title}
                        </h2>
                        {program.description && (
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {program.description}
                            </p>
                        )}
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-4 sm:mb-6">
                        <h3 className="text-center text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2 sm:mb-3 font-semibold">
                            Countdown to Program
                        </h3>
                        <div className="grid grid-cols-4 gap-1 sm:gap-2">
                            {[
                                { value: timeLeft.days, label: "Days" },
                                { value: timeLeft.hours, label: "Hours" },
                                { value: timeLeft.minutes, label: "Mins" },
                                { value: timeLeft.seconds, label: "Secs" },
                            ].map((unit, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#9C1FDB] to-[#B22E7B] rounded-md sm:rounded-lg p-1.5 sm:p-2 text-white text-center shadow-lg transform transition-all hover:scale-105"
                                >
                                    <div className="text-base sm:text-lg md:text-xl font-bold mb-0.5">
                                        {unit.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-[10px] sm:text-xs uppercase tracking-wide opacity-90">
                                        {unit.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Date & Time Info */}
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-gray-700">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#B22E7B]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-sm sm:text-base font-medium">
                                    {new Date(program.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#B22E7B]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-sm sm:text-base font-medium">{program.time}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    {program.link && (
                        <a
                            href={program.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-[#9C1FDB] to-[#B22E7B] text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Register Now
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProgramPopup;
