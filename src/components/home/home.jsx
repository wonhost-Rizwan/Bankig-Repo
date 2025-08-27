import { Link } from "react-router-dom";
import { FaUniversity, FaBuilding, FaLaptop } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Title */}

      {/* Cards */}
      <div className="grid gap-6 w-full max-w-md bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl  transition transform ">
        <Link
          to="/lloyds"
          className="flex items-center gap-4 border border-gray-300 py-3 px-15 "
        >
          <span className="text-lg text-center font-semibold text-gray-800">
            Lloyds Bank
          </span>
        </Link>

        {/* Halifax Bank */}
        <Link
          to="/halifax"
          className="flex items-center gap-4 border border-gray-300 py-3 px-15 "
        >
          <span className="text-lg text-center font-semibold text-gray-800">
            Halifax Bank
          </span>
        </Link>

        {/* Lloyds Bank */}

        {/* Online Banking */}
        <Link
          to="/online"
          className="flex items-center gap-4 border border-gray-300 py-3 px-15 "
        >
          <span className="text-lg text-center font-semibold text-gray-800">
            Natwest Bank
          </span>
        </Link>
        <Link className="flex items-center gap-4 border border-gray-300 py-3 px-15 ">
          <span className="text-lg text-center font-semibold text-gray-800">
            Nationwide Building
          </span>
        </Link>
        <Link className="flex items-center gap-4 border border-gray-300 py-3 px-15 ">
          <span className="text-lg text-center font-semibold text-gray-800">
            Barclays Bank
          </span>
        </Link>

        <Link className="flex items-center gap-4 border border-gray-300 py-3 px-15 ">
          <span className="text-lg text-center font-semibold text-gray-800">
            Revolut
          </span>
        </Link>
        <Link className="flex items-center gap-4 border border-gray-300 py-3 px-15 ">
          <span className="text-lg text-center font-semibold text-gray-800">
            Monzo
          </span>
        </Link>
      </div>
    </div>
  );
}
