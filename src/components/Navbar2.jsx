import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom"

import { delay, motion } from "framer-motion"
import { Link } from "react-router-dom";

const Navbar2 = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="w-full md:w-auto flex items-center justify-center py-4 lg:py-10 md:mx-20 lg:mx-44 bg-light-background dark:bg-dark-background">
      <div
      className="flex items-center justify-center gap-4 lg:gap-9 font-jura tracking-tighter">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl active cursor-pointer"
        >
          Home
        </Link>
        
        <button
          className="flex items-center text-base md:text-2xl text-light-text dark:text-dark-text transition-colors duration-0"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <>
              <IoSunnyOutline className="mr-2" />
              Light Mode
            </>
          ) : (
            <>
              <IoMoonOutline className="mr-2" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
