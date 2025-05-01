
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-6">
          Oops! The page you are looking for does not exist. Perhaps you
          mistyped the URL or followed a broken link.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#792F9E] text-white rounded-lg hover:bg-[#792f9e96] transition"
        >
          Go Back to Home
        </Link>
      </div>
    );
};

export default NotFound;
