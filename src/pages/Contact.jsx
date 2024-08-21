import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHandshake,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { SiHandshake, SiLeetcode } from "react-icons/si";
const Contact = ({ handleResumeDownload }) => {
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/kushwanth-parameshwaraiah-6a176a1a4/",
      "_blank"
    );
  };
  const handleGithub = () => {
    window.open("https://github.com/kira2406", "_blank");
  };

  const handleLeetcode = () => {
    window.open("https://leetcode.com/u/user6672xL/", "_blank");
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/kush._.gowda_/", "_blank");
  };
  const handleHandshake = () => {
    window.open(
      "https://buffalo.joinhandshake.com/profiles/54389505",
      "_blank"
    );
  };

  return (
    <div
      id="contact"
      className="bg-light-secondary dark:bg-dark-secondary py-8"
    >
      <div className="mx-80 min-h-full py-8">
        <div className="flex gap-4 p-4">
          <div className="border-l-[14px] border-light-primary p-4 text-light-background text-5xl font-righteous font-bold tracking-wider">
            REACH OUT TO ME
          </div>
        </div>
        <div className="px-8 pt-8 text-3xl text-light-background font-jura">
          Feel free to reach out for internship, full-time job opportunities or
          just to connect.<br/><span className="font-bold"> I'd love to hear from you!</span>
        </div>
        <div className="p-8 text-3xl text-light-background font-jura">
        Currently available for full-time positions or internships opportunities.
        </div>
        <div className="px-8 pb-12">
          <button
            onClick={handleResumeDownload}
            className="inline-block bg-light-background text-light-primary font-semibold py-2 px-4 rounded hover:bg-light-primary hover:text-light-background font-jura"
          >
            Download Resume
          </button>
        </div>

        <div className="p-8 text-light-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-light-background">

            <div>
              <h2 className="text-2xl font-semibold mb-6 font-epilogue">
              Get in Touch
              </h2>

              <div className="flex items-center mb-4">
                <FaPhoneAlt className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">+1 716-704-0157</span>
              </div>

              <div className="flex items-center mb-4">
                <FaEnvelope className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  kush.p030.24@gmail.com
                </span>
              </div>
              <div className="flex items-center mb-4">
                <FaLocationDot className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  Buffalo, New York <br />
                  (Willing to relocate)
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 font-epilogue">
                My Digital Hangouts
              </h2>
              <div className="grid grid-cols-[2fr_1fr]">
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={handleLinkedIn}
                >
                  <FaLinkedin className="w-6 h-6 text-light-primary mr-3" />
                  <span className="text-lg font-jura">
                    Kushwanth Parameshwaraiah
                  </span>
                </div>
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={handleGithub}
                >
                  <FaGithub className="w-6 h-6 text-light-primary mr-3" />
                  <span className="text-lg font-jura">kira2406</span>
                </div>
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={handleLeetcode}
                >
                  <SiLeetcode className="w-6 h-6 text-light-primary mr-3" />
                  <span className="text-lg font-jura">
                    Kushwanth Parameshwaraiah
                  </span>
                </div>
                <div
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={handleInstagram}
                >
                  <FaInstagram className="w-6 h-6 text-light-primary mr-3" />
                  <span className="text-lg font-jura">kush._.gowda_</span>
                </div>
                <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleHandshake}
              >
                <SiHandshake className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  Kushwanth Parameshwaraiah
                </span>
              </div>
              </div>

              {/* <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleLinkedIn}
              >
                <FaLinkedin className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  @Kushwanth Parameshwaraiah
                </span>
              </div>
              <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleLeetcode}
              >
                <SiLeetcode className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  @Kushwanth Parameshwaraiah
                </span>
              </div>
              <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleHandshake}
              >
                <SiHandshake className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">
                  @Kushwanth Parameshwaraiah
                </span>
              </div>
              <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleGithub}
              >
                <FaGithub className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">@kira2406</span>
              </div>
              <div
                className="flex items-center mb-4 cursor-pointer"
                onClick={handleInstagram}
              >
                <FaInstagram className="w-6 h-6 text-light-primary mr-3" />
                <span className="text-lg font-jura">@kush._.gowda_</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
