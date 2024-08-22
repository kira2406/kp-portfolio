import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import Kp_heart_red from "./../assets/kp_heart_red.png";
import Kp_heart_red_grey from "./../assets/kp_heart_red_grey.png";
import King_black_ai from "./../assets/king_black_ai.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const Home = ({handleResumeDownload}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kushwanth-parameshwaraiah-6a176a1a4/', '_blank');
  };
  const handleGithub = () => {
    window.open('https://github.com/kira2406', '_blank');
  };

  const handleLeetcode = () => {
    window.open('https://leetcode.com/u/kira2402/', '_blank');
  };

  return (
    <div
      id="home"
      className="dark:bg-dark-background  bg-light-background min-h-[85vh] h-[85vh]"
    >
      <div className="mx-80">
        <div className="flex gap-4">
          <div className="w-1/2 p-4 h-screen">
            <div className="h-12"></div>
            <div className="border-l-[14px] border-light-primary dark:border-dark-primary pl-4 h-max">
              <div className="m-0 font-jura text-3xl pb-3 text-light-text dark:text-dark-text">
                Hi, I'm
              </div>
              <motion.div initial={{x:-150, opacity:0}} animate={{x:0, opacity:1}} className=" m-0 font-righteous text-6xl font-bold tracking-wider">
                <span className="text-light-primary dark:text-dark-primary">
                  Kush
                </span>
                <span className="text-light-gray dark:text-dark-gray">
                  wanth
                </span>
              </motion.div>
              <div className="text-light-gray dark:text-dark-gray m-0 font-righteous text-6xl font-bold tracking-wider">
                Parameshwaraiah
              </div>
              <div className="m-0 font-jura text-3xl text-light-text dark:text-dark-text">
                <span className="font-bold">AI/ML enthusiast</span> and{" "}
                <span className="font-bold">web developer</span>
              </div>
              <div className="pt-4">
                <button onClick={handleResumeDownload} className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold py-3 px-11 font-jura text-2xl mr-4">
                  Resume
                </button>
                
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <button className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold py-3 px-11 font-jura text-2xl mx-4">
                    Projects
                </button>
                  </Link>
              </div>
              <div className="grid grid-cols-3 pt-16 text-light-text dark:text-dark-text">
                <div className="flex items-center cursor-pointer" onClick={handleGithub}>
                  <FaGithub className="text-light-primary dark:text-dark-primary text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-2xl">
                    Github
                  </span>
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLinkedIn}>
                  <FaLinkedin className="text-light-primary dark:text-dark-primary text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-2xl">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLeetcode}>
                  <SiLeetcode className="text-light-primary dark:text-dark-primary text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-2xl">
                    Leetcode
                  </span>
                </div>
              </div>
              <div className="font-jura text-light-text dark:text-dark-text">#CodeBlooded</div>
            </div>
          </div>
          <div className="w-1/2 p-4 text-light-text dark:text-dark-text">
            <div
              className="relative h-screen flex justify-end items-center ml-40 mt-20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={King_black_ai}
                alt="Description of image"
                className="absolute top-0 left-36 transform rotate-17  h-3/6 rounded-lg shadow-lg"
              />
              <img
                src={isHovered ? Kp_heart_red : Kp_heart_red_grey}
                alt="Description of image"
                className=" absolute top-20 left-0 transform -rotate-12 h-3/6 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
