import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
// import { Link, NavLink } from "react-router-dom"
import { Link } from "react-scroll";

const Navbar = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="flex items-center justify-end py-12 mx-44 bg-light-background dark:bg-dark-background">
      <div className="flex items-center justify-center gap-9 text-2xl font-jura tracking-tighter">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-2xl active "
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text"
        >
          About Me
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl text-light-text dark:text-dark-text "
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
      </div>
    </div>
  );
};

export default Navbar;
