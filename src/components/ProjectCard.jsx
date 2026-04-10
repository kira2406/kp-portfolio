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
  const viewDetailsBtn = Boolean(project?.viewDetails)

  const handleURLClick = (link) => {
    if (link){
    window.open(link, "_blank");
    }
  }



  return (<>
    {isLargeScreen ?
    
    <div
  className="group self-start bg-light-background dark:bg-dark-background border border-light-secondary dark:border-dark-secondary rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
>
  <div>
    <div className="grid grid-cols-[1fr_auto] md:grid-cols-[8fr_2fr] lg:grid-cols-[10fr_2fr] gap-3 mb-4">
      <h1 className="text-light-secondary text-xl md:text-2xl font-righteous pb-4">
        {title}
      </h1>


    </div>

    <div className="overflow-hidden max-h-32 group-hover:max-h-96 transition-all duration-500 ease-in-out">
      {desc.map((content, key) => (
        <p
          key={key}
          className="text-base md:text-lg font-jura text-dark-secondary leading-8 text-left mb-2"
        >
          {content}
        </p>
      ))}
    </div>

     {(githubLink || deployedLink || viewDetailsBtn) && (
      <div className="flex flex-wrap gap-3 items-center pt-4">
        {githubLink && (
          <button
            className="flex items-center gap-2 bg-light-primary border border-light-secondary rounded-lg md:rounded-xl font-jura text-sm md:text-base py-2 px-4 text-light-text hover:border-spacing-2 hover:border-dark-background hover:bg-light-secondary transition-all"
            onClick={() => handleURLClick(githubLink)}
          >
            <FaGithub />
            GitHub
          </button>
        )}

        {deployedLink && (
          <button
            className="bg-light-primary border border-light-secondary text-light-text hover:border-spacing-2 hover:border-dark-background hover:bg-light-secondary rounded-lg md:rounded-xl font-jura text-sm md:text-base py-2 px-4"
            onClick={() => handleURLClick(deployedLink)}
          >
            OPEN APP
          </button>
        )}

        {viewDetailsBtn && (
          <button
            className="bg-light-primary border border-light-secondary text-light-text hover:border-spacing-2 hover:border-dark-background hover:bg-light-secondary rounded-lg md:rounded-xl font-jura text-sm md:text-base py-2 px-4"
            onClick={() => handleURLClick(`/projects/${project?.viewDetails}`)}
          >
            View Details
          </button>
        )}
      </div>
    )}

  </div>
</div>
    :
    <div className="bg-light-background p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_10fr] hover:shadow-xl hover:-translate-y-2 duration-300 rounded-xl transform transition-all border border-light-secondary">
      <div>
        <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[8fr_2fr] lg:grid-cols-[10fr_2fr] mb-4 md:mb-0"><h1 className="text-light-background text-lg md:text-2xl font-righteous pb-4">
          {title}
        </h1>
        {deployedLink && <button className="bg-light-red rounded-md md:rounded-xl lg:rounded-xl font-jura text-sm md:text-base lg:text-lg py-2 px-0 m-2" onClick={()=>handleURLClick(deployedLink)}>OPEN APP</button>}
        {viewDetailsBtn && <button className="bg-light-red rounded-md md:rounded-xl lg:rounded-xl font-jura text-sm md:text-base lg:text-lg py-2 px-0 m-2" onClick={()=>handleURLClick(deployedLink)}>View Details</button>}
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
        {/* <div className="pt-4 flex flex-wrap">
          {techs.map((tech, key) => (
            <span className="px-3 md:px-4 mr-2 md:mr-4 bg-lightblue rounded-lg md:rounded-xl font-jura text-sm md:text-base" key={key}>
              {tech}
            </span>
          ))}
        </div> */}
      </div>
    </div>
    }
    </>)
  }

export default ProjectCard;
