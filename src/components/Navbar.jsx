import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom"

import { delay, motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink} from 'react-router-dom'

const Navbar = ({ handleThemeSwitch, theme, isHome=true }) => {
  return (
    <div className="w-full md:w-auto flex items-center justify-center py-4 lg:py-10 md:mx-20 lg:mx-44 bg-light-background dark:bg-dark-background">
      {isHome ? <motion.div
      initial={{y:-100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.6,delay: 0}} 
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 lg:gap-9 font-jura tracking-tighter">
         <ScrollLink
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl active cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          Contact Me
        </ScrollLink>
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
      </motion.div>
      :
      <div className="flex items-center justify-center gap-4 lg:gap-9 font-jura tracking-tighter">
        <RouterLink
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          viewport={{ once: true }}
          className="text-base md:text-2xl active cursor-pointer"
        >
          Home
        </RouterLink>
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
        }
        
    </div>
  );
};

export default Navbar;
