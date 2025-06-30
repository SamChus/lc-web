import { useState } from "react";

const GivingPage = () => {
  const givingOptions = [
    {
      title: "Lightworld City Global Missions",
      bankName: "Zenith Bank",
      accountNumber: "1220 956 919",
      bankColor: "bg-red-500",
    },
    {
      title: "Lightworld City Port Harcourt",
      bankName: "Zenith Bank",
      accountNumber: "1226 444 513",
      bankColor: "bg-red-500",
    },
    {
      title: "Lightworld City Presidency",
      bankName: "Zenith Bank",
      accountNumber: "1220 956 878",
      bankColor: "bg-red-500",
    },
    {
      title: "Onyebuchi Francis Amarachukwu Ministry,",
      bankName: "GT Bank",
      accountNumber: "0598798517",
      bankColor: "bg-orange-500",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-48 md:h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            ONLINE <span className="text-purple-400">GIVING</span>
          </h1>
          <p className="text-base md:text-lg">Become a generous giver today</p>
        </div>
      </section>

      {/* Giving Options Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {givingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-medium text-gray-800">
                      {option.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                    <div
                      className={`${option.bankColor} text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium`}
                    >
                      {option.bankName}
                    </div>

                    <div className="bg-purple-100 text-purple-600 px-3 md:px-4 py-2 rounded-md font-medium text-sm md:text-base">
                      {option.accountNumber}
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(option.accountNumber, index)
                      }
                      className={`p-2 transition-all duration-300 ${
                        copiedIndex === index
                          ? "bg-green-500 text-white rounded-full scale-110"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {copiedIndex === index ? (
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 animate-pulse"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivingPage;
