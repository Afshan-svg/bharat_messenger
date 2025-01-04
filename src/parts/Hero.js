import React, { useState, useEffect } from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal state

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Automatically open modal on component load (already true by default)
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <section className="hero relative">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-md rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Important Notice
            </h2>
            <p className="text-gray-600 mb-6">
              The messenger is still under development, and the name "Bharat
              Secure Messenger" is not the final name. We will reveal our
              product name and logo at the time of release.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Experience Ultimate Privacy <br />
          and Security
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          Secure. Private. Feature-packed. Your data, your control—always.
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button 
            href="upi://pay?pa=vikash92083@axl&pn=YourName&mc=0000&tid=1234567890&tr=uniqueTransactionId&tn=Contribution&am=100&cu=INR"
            type="link"
            className="flex w-48 h-14 items-center px-4 py-3 text-white text-lg bg-orange-500 rounded-lg shadow-2xl hover:bg-green-500 transition duration-200"
          >
            Contribute
            <svg
              className="ml-2 w-5 h-5 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>

      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}