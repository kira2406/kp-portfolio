import React from "react";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
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
  };

  return (
    <div className="bg-light-secondary p-8 grid grid-cols-[2fr_10fr]">
      {thumbnail ? <img src={thumbnail} className="pr-4"/>: <div></div>}
      <div>
        <div className="grid grid-cols-[10fr_2fr]"><h1 className="text-light-background text-2xl font-righteous pb-4">
          {title}
        </h1>
        {deployedLink && <button className="bg-light-red rounded-2xl font-jura" onClick={()=>handleURLClick(deployedLink)}>OPEN APP</button>}
        </div>
        {desc.map((content, key) => (
          <p
            key={key}
            className=" text-xl font-jura text-gray-200 text-justify"
          >
            {content}
          </p>
        ))}
        {(githubLink || deployedLink) && (
          <div
            className="text-light-background  flex flex-row items-center font-jura pt-2"
            
          >
            <FaGithub className="mr-2" />
            <span className="cursor-pointer hover:text-lightblue" onClick={() => handleURLClick(githubLink)}>{githubLink}</span>
          </div>
        )}
        <div className="pt-4 flex flex-row">
          {techs.map((tech, key) => (
            <span className="px-4 mr-4 bg-lightblue rounded-xl font-jura" key={key}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
