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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        console.log("X button clicked!");
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Close popup"
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
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
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Program Title */}
                    <div className="mb-6">
                        <p className="text-sm uppercase tracking-wider text-[#B22E7B] font-semibold mb-2">
                            {program.subtitle}
                        </p>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            {program.title}
                        </h2>
                        {program.description && (
                            <p className="text-gray-600 leading-relaxed">
                                {program.description}
                            </p>
                        )}
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-6">
                        <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                            Countdown to Program
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                            {[
                                { value: timeLeft.days, label: "Days" },
                                { value: timeLeft.hours, label: "Hours" },
                                { value: timeLeft.minutes, label: "Minutes" },
                                { value: timeLeft.seconds, label: "Seconds" },
                            ].map((unit, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#9C1FDB] to-[#B22E7B] rounded-xl p-4 text-white text-center shadow-lg transform transition-all hover:scale-105"
                                >
                                    <div className="text-3xl font-bold mb-1">
                                        {unit.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-xs uppercase tracking-wide opacity-90">
                                        {unit.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Date & Time Info */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-center gap-6 text-gray-700">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 text-[#B22E7B]"
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
                                <span className="font-medium">
                                    {new Date(program.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 text-[#B22E7B]"
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
                                <span className="font-medium">{program.time}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    {/* <Link
                        to="/minister-summit-registration"
                        className="block w-full bg-gradient-to-r from-[#9C1FDB] to-[#B22E7B] text-white py-4 rounded-lg font-semibold text-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        Register Now
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default ProgramPopup;
