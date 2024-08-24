import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
      // Check if the screen size is large
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const title = project?.title;
  const desc = project?.desc;
  const tags = project?.tags;
  const techs = project?.tech;
  const deployedLink = project?.deployedLink;
  const githubLink = project?.githubLink;
  const thumbnail = project?.thumbnail

  const handleURLClick = (link) => {
    if (link){
    window.open(link, "_blank");
    }
  }



  return (<>
    {isLargeScreen ?
    
    <motion.div initial={{opacity:0, y:70}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className="bg-light-secondary p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_10fr] hover:shadow-xl hover:-translate-y-2 duration-300 rounded-xl transform transition-all">
      {thumbnail ? <img src={thumbnail} className="mb-4 md:mb-0 pr-0 md:pr-4"/>: <div></div>}
      <div>
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[8fr_2fr] lg:grid-cols-[10fr_2fr] mb-4 md:mb-0"><h1 className="text-light-background text-xl md:text-2xl font-righteous pb-4">
          {title}
        </h1>
        {deployedLink && <button className="bg-light-red rounded-lg md:rounded-xl lg:rounded-xl font-jura text-sm md:text-base lg:text-lg py-2 px-" onClick={()=>handleURLClick(deployedLink)}>OPEN APP</button>}
        </div>
        {desc.map((content, key) => (
          <p
            key={key}
            className="text-lg md:text-xl font-jura text-gray-200 text-justify"
          >
            {content}
          </p>
        ))}
        {(githubLink || deployedLink) && (
          <div
            className="text-light-background flex flex-row items-center font-jura pt-2"
            
          >
            <FaGithub className="mr-2" />
            <span className="cursor-pointer hover:text-lightblue" onClick={() => handleURLClick(githubLink)}>{githubLink}</span>
          </div>
        )}
        <div className="pt-4 flex flex-wrap">
          {techs.map((tech, key) => (
            <span className="px-3 md:px-4 mr-2 md:mr-4 bg-lightblue rounded-lg md:rounded-xl font-jura text-sm md:text-base" key={key}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    :
    <div initial={{opacity:0, y:70}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className="bg-light-secondary p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_10fr] hover:shadow-xl hover:-translate-y-2 duration-300 rounded-xl transform transition-all">
      {thumbnail ? <img src={thumbnail} className="mb-4 md:mb-0 pr-0 md:pr-4"/>: <div></div>}
      <div>
        <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[8fr_2fr] lg:grid-cols-[10fr_2fr] mb-4 md:mb-0"><h1 className="text-light-background text-lg md:text-2xl font-righteous pb-4">
          {title}
        </h1>
        {deployedLink && <button className="bg-light-red rounded-md md:rounded-xl lg:rounded-xl font-jura text-sm md:text-base lg:text-lg py-2 px-0 m-2" onClick={()=>handleURLClick(deployedLink)}>OPEN APP</button>}
        </div>
        {desc.map((content, key) => (
          <p
            key={key}
            className="text-base md:text-xl font-jura text-gray-200 text-justify"
          >
            {content}
          </p>
        ))}
        {(githubLink || deployedLink) && (
          <div
            className="text-light-background flex flex-row items-center font-jura pt-2"
            
          >
            <FaGithub className="mr-2" />
            <span className="cursor-pointer hover:text-lightblue" onClick={() => handleURLClick(githubLink)}>{githubLink}</span>
          </div>
        )}
        <div className="pt-4 flex flex-wrap">
          {techs.map((tech, key) => (
            <span className="px-3 md:px-4 mr-2 md:mr-4 bg-lightblue rounded-lg md:rounded-xl font-jura text-sm md:text-base" key={key}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    }
    </>)
  }

export default ProjectCard;
