import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom"
import { Link } from "react-scroll";
import { delay, motion } from "framer-motion"

const Navbar = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="flex items-center justify-end py-12 mx-44 bg-light-background dark:bg-dark-background">
      <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.4,delay: 4}} className="flex items-center justify-center gap-9 text-2xl font-jura tracking-tighter">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-2xl active cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          About Me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text cursor-pointer"
        >
          Contact Me
        </Link>
        <button
          className="flex items-center text-2xl text-light-text dark:text-dark-text transition-colors duration-0"
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
    </div>
  );
};

export default Navbar;
