import React from "react";
import Timeline from "../components/Timeline";
import { events } from "../constants";

const About = () => {
  return (
    <div id="about" className="bg-light-secondary dark:bg-dark-secondary py-8">
      <div className="mx-80 h-screen py-8">
        <div className="flex gap-4 p-4">
          <div className="border-l-[14px] border-light-primary p-4 text-white text-5xl font-righteous font-bold tracking-wider">
            ABOUT ME
          </div>
        </div>
        <div className="flex gap-4 py-8">
          <div className="w-6/12 p-4 h-full">
            <p className="text-xl font-jura text-light-background text-justify mb-4">
              I'm Kushwanth Parameshwaraiah, a graduate student from SUNY
              Buffalo with a deep understanding of machine learning and AI.
              Early in my career, I worked as a React developer, contributing to
              dynamic and responsive web applications.{" "}
            </p>
            <p className="text-xl font-jura text-light-background text-justify mb-4">
              I have always had a keen interest in current technology trends,
              which led me to pursue my Master’s degree at the State University
              of New York at Buffalo. My goal is to leverage my skills to build
              AI-powered solutions that solve real-world problems.
            </p>
            {/* <p className="text-xl font-jura text-light-background text-justify mb-4">My goal is to leverage my skills to build AI-powered solutions to solve real-world problems.</p> */}
            <p className="text-xl font-jura text-light-background text-justify mb-4">
              When I’m not coding, I enjoy playing a variety of card games like
              poker, Monopoly Bid, and Uno, or diving into the latest
              developments in AI. I am eager to connect with industry
              professionals and explore new opportunities in the tech field.
            </p>
          </div>
          <div className="w-6/12 px-4 h-full">
            <Timeline events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
