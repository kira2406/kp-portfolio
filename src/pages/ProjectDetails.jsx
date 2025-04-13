import { useParams } from "react-router-dom";
import { projectDetails } from "../constants";
import { FaGithub } from "react-icons/fa6";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails.find((proj) => proj.id === id);

  if (!project) return <div className="p-4">Project not found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-light-secondary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-righteous tracking-wider">{project.title}</h1>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          <FaGithub className="text-xl" />
          View on GitHub
        </a>
      )}
      <div className="mt-5 mb-5 font-jura text-dark-background dark:text-light-background text-justify">
      {project.description.map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ))}
      </div>
      <div className="pt-4 flex flex-wrap">
          {project.techStack.map((tech, index) => 
              <img
                key={index}
                src={tech}
                alt={tech}
                title={tech}
                className="h-8 mr-2 mb-2"
              />
          )}
        </div>

      <div className="mt-5 mb-5">
        {Array.from({ length: project.imageCount }).map((_, index) => (
          <img
            key={index}
            src={`/assets/projects/${project.id}/${index + 1}.png`}
            alt={`Screenshot ${index + 1}`}
            className="rounded-lg shadow-md my-4"
          />
        ))}
      </div>

    </div>
  );
}
