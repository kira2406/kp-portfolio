import React from "react";
import Timeline from "../components/Timeline";
import { events } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-light-secondary dark:bg-dark-secondary py-8 min-h-screen h-full overflow-x-hidden">
      <div className="mx-4 md:mx-16 lg:mx-80 py-4 md:py-6 lg:py-8">
        <div className="flex gap-4 px-4 py-2 md:p-4">
          <div className="border-l-[14px] border-light-primary p-4 text-white text-3xl md:text-4xl lg:text-5xl font-righteous font-bold tracking-wider">
            ABOUT ME
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-4 md:py-6 lg:py-8">
          <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5}} className="w-full md:w-6/12 p-4 h-full">
            <p className="text-base md:text-xl font-jura text-light-background text-justify mb-4">
              I'm Kushwanth Parameshwaraiah, a graduate student from SUNY
              Buffalo with a deep understanding of machine learning and AI.
              Early in my career, I worked as a React developer, contributing to
              dynamic and responsive web applications.{" "}
            </p>
            <p className="text-base md:text-xl font-jura text-light-background text-justify mb-4">
              I have always had a keen interest in current technology trends,
              which led me to pursue my Master’s degree at the State University
              of New York at Buffalo. My goal is to leverage my skills to build
              AI-powered solutions that solve real-world problems.
            </p>
            {/* <p className="text-xl font-jura text-light-background text-justify mb-4">My goal is to leverage my skills to build AI-powered solutions to solve real-world problems.</p> */}
            <p className="text-base md:text-xl font-jura text-light-background text-justify mb-4">
            Outside of coding, I enjoy gaming on my PC and playing card games such as poker and Uno. I’m excited to connect with industry professionals and seek out new opportunities in the tech industry.
            </p>
          </motion.div>
          <div className="w-full md:w-6/12 px-4 h-full">
            <Timeline events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
