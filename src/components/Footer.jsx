import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100 bg-opacity-90 px-4 md:px-36 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <img
            src="https://i.ibb.co/YBRVysZN/logo1.png"
            alt="Logo"
            className="w-12 mb-2"
          />
          <h2 className="text-2xl font-bold font-serif mb-4">
            Espresso Emporium
          </h2>
          <p className="mb-4 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhone /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-4">
            Connect with Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-[#331A15] text-white rounded hover:bg-[#4a2c22] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div
        className="text-white text-center text-sm py-4"
        style={{
          backgroundImage: "url('https://i.ibb.co/q3B3YTLQ/15.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Copyright © Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
