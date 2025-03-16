import React, { useState } from 'react';
import { icons } from "../content/assets";

const Connect: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="relative inline-block mt-6">
            <button 
            onClick={togglePopup}
            className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-4 w-[280px] shadow-md"
            >
            <img src={icons.play} alt="play button" className="w-5 h-5" />
            <span className="font-medium">CONNECT TO SERVICE</span>
            </button>

            {showPopup && (
            <>
                <div 
                className="fixed inset-0" 
                onClick={togglePopup}
                />
                <div className="absolute left-0 mt-2 w-full bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 z-50">
                <div className="flex flex-col">
                    <a 
                    href="https://www.youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-red-600 transition-colors duration-200"
                    >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                    </a>
                    <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                    </a>
                </div>
                </div>
            </>
            )}
        </div>
    );
};

export default Connect;