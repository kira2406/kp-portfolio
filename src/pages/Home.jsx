import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    // <div id ="home" className="bg-gradient-to-b from-white from-20%  via-mintwhite via-50% to-[#A4F8EB] h-[85vh]">
    <div id ="home" className="dark:bg-dark-background h-[85vh] bg-light-background">
    <div className="mx-80">
      <div className="flex gap-4">
        <div className="w-1/2 p-4 ">
          <div className="h-12"></div>
          <div className="border-l-[14px] border-light-primary dark:border-dark-primary pl-4">
            <div className="m-0 font-jura text-3xl pb-3 text-light-text dark:text-dark-text">Hi, I'm</div>
            <div className=" m-0 text-light-primary dark:text-dark-primary font-epilogue text-6xl font-bold">
              Kushwanth
            </div>
            <div className="text-light-primary dark:text-dark-primary m-0 font-epilogue text-6xl font-bold">
              Parameshwaraiah
            </div>
            <div className="m-0 font-jura text-3xl text-light-text dark:text-dark-text">
              <span className="font-bold">AI/ML enthusiast</span> and{" "}
              <span className="font-bold">web developer</span>
            </div>
            <div className="pt-4">
              <button className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold py-3 px-11 font-jura text-2xl mr-4">Resume</button>
              <button className="bg-light-secondary dark:bg-dark-secondary rounded text-dark-text dark:text-dark-text font-bold py-3 px-11 font-jura text-2xl mx-4">Projects</button>
            </div>
          </div>
          <div className="grid grid-cols-4 pl-8 p-8 text-light-text dark:text-dark-text">
            <div class="flex items-center">
              <FaGithub className="text-light-primary dark:text-dark-primary text-2xl"/>
              <span className="ml-2 font-jura font-semibold text-2xl">Github</span>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-light-primary dark:text-dark-primary text-2xl"/>
              <span className="ml-2 font-jura font-semibold text-2xl">LinkedIn</span>
            </div>
            <div className="flex items-center">
              <SiLeetcode className="text-light-primary dark:text-dark-primary text-2xl"/>
              <span className="ml-2 font-jura font-semibold text-2xl">Leetcode</span>
            </div>

          </div>
          
        </div>
        <div className="w-1/2 p-4 "></div>
      </div>
    </div>
    </div>
  );
};

export default Home;
