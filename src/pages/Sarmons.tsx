import { useState } from "react";
import { Play, Calendar, User, Download } from "lucide-react";

const Sermons = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Sunday Service",
    "Bible Study",
    "Special Events",
    "Youth",
  ];

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith: Trusting God's Plan",
      pastor: "Pastor John Smith",
      date: "December 24, 2024",
      category: "Sunday Service",
      duration: "45 min",
      description:
        "Exploring how to trust God's plan even when we can't see the full picture.",
      thumbnail:
        "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "The Power of Prayer in Daily Life",
      pastor: "Pastor Sarah Johnson",
      date: "December 17, 2024",
      category: "Bible Study",
      duration: "38 min",
      description:
        "Understanding how prayer transforms our hearts and circumstances.",
      thumbnail:
        "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Christmas Joy: The Gift of Hope",
      pastor: "Pastor Michael Brown",
      date: "December 10, 2024",
      category: "Special Events",
      duration: "42 min",
      description: "Celebrating the hope that comes through Christ's birth.",
      thumbnail:
        "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Living with Purpose: God's Calling",
      pastor: "Pastor John Smith",
      date: "December 3, 2024",
      category: "Sunday Service",
      duration: "41 min",
      description:
        "Discovering and walking in God's unique purpose for your life.",
      thumbnail:
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Faith in Action: Serving Others",
      pastor: "Pastor Emily Davis",
      date: "November 26, 2024",
      category: "Youth",
      duration: "35 min",
      description:
        "How young people can make a difference in their communities.",
      thumbnail:
        "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Gratitude: A Heart of Thanksgiving",
      pastor: "Pastor John Smith",
      date: "November 19, 2024",
      category: "Sunday Service",
      duration: "44 min",
      description: "Cultivating a grateful heart in all circumstances.",
      thumbnail:
        "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredSermons =
    selectedCategory === "All"
      ? sermons
      : sermons.filter((sermon) => sermon.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sermons
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be encouraged and inspired by God's Word through our weekly
              messages
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full">
                      <Play className="h-8 w-8" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {sermon.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {sermon.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {sermon.pastor}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {sermon.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-600">
                      {sermon.duration}
                    </span>
                    <button className="flex items-center text-blue-900 hover:text-amber-600 transition-colors">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us Live</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't make it to church? Watch our live stream every Sunday at 9:00
            AM and 11:00 AM
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Watch Live Stream
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
