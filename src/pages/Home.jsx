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
    window.open('https://www.linkedin.com/in/kushwanth-p', '_blank');
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
      className="dark:bg-dark-background  bg-light-background min-h-[85vh] h-[85vh] overflow-x-hidden overflow-y-hidden"
    >
      <div className="mx-4 md:mx-16 lg:mx-80">
        <div className="flex gap-4">
          <div className="w-full md:w-1/2 p-4 h-screen">
            <div className="h-12"></div>
            <motion.div className="border-l-[14px] border-light-primary dark:border-dark-primary pl-4 h-max " initial={{y:-150, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:1}}>
              <motion.div initial={{x:-150, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:1.2}} className="m-0 font-jura  text-xl md:text-2xl lg:text-3xl pb-1 md:pb-3 text-light-text dark:text-dark-text">
                Hi, I'm
              </motion.div>
              <motion.div initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:2}} className=" m-0 font-righteous text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider">
                <span className="text-light-primary dark:text-dark-primary">
                  Kush
                </span>
                <span className="text-light-gray dark:text-dark-gray">
                  wanth
                </span>
              </motion.div>
              <motion.div initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:2.5}} className="text-light-gray dark:text-dark-gray m-0 font-righteous text-3xl md:text-4xl lg:text-6xl font-bold tracking-normal md:tracking-wider">
                Parameshwaraiah
              </motion.div>
              <motion.div initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, delay:3}} className="m-0 font-jura text-base md:text-2xl lg:text-3xl text-light-text dark:text-dark-text">
                <span className="font-bold">AI/ML enthusiast</span> and{" "}
                <span className="font-bold">web developer</span>
              </motion.div>
              <motion.div className="pt-4 flex flex-col md:flex-row" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:4}}>
                <a>
                <button onClick={handleResumeDownload} className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold mb-4 lg:mb-0 py-3 px-11 font-jura text-base md:text-2xl md:mr-4">
                  Resume
                </button>
                </a>
                
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <button className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold py-3 px-11 font-jura text-base md:text-2xl mx-0 md:mx-4">
                    Projects
                </button>
                  </Link>
              </motion.div>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 pt-6 md:pt-16 text-light-text dark:text-dark-text"initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:4}}>
                <div className="flex items-center cursor-pointer" onClick={handleGithub}>
                  <FaGithub className="text-light-primary dark:text-dark-primary text-xl md:text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-xl md:text-2xl">
                    Github
                  </span>
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLinkedIn}>
                  <FaLinkedin className="text-light-primary dark:text-dark-primary text-xl md:text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-xl md:text-2xl">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLeetcode}>
                  <SiLeetcode className="text-light-primary dark:text-dark-primary text-2xl" />
                  <span className="ml-2 font-jura font-semibold text-xl md:text-2xl">
                    Leetcode
                  </span>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:4}} className="font-jura text-light-text dark:text-dark-text">#CodeBlooded</motion.div>
            </motion.div>
          </div>
          <div className="hidden md:block w-1/2 p-4 text-light-text dark:text-dark-text">
            <div
              className="relative h-screen flex justify-end items-center ml-40 mt-20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.img
                initial={{opacity:0,x:300,y:300, rotate:0, scaleX:1.5, scaleY:1.5}}
                animate={{opacity:1,x:0, y:0, rotate: 23, scaleX:1, scaleY:1}}
                transition={{duration:0.2, delay:5}}
                src={King_black_ai}
                alt="Description of image"
                className="absolute top-0 left-36 transform rotate-23  h-3/6 rounded-lg shadow-xl"
              />
              <motion.img
                initial={{opacity:0,x:300,y:300,rotate:0, scaleX:1.5, scaleY:1.5}}
                animate={{opacity:1,x:0, y:0,rotate:-12, scaleX:1, scaleY:1}}
                transition={{duration:0.2, delay:5.5}}
                src={isHovered ? Kp_heart_red : Kp_heart_red_grey}
                alt="Description of image"
                className=" absolute top-20 left-0 transform -rotate-12 h-3/6 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
