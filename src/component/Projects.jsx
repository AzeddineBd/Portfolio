import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32"
      >
        <h1 className="text-center text-5xl font-light">Projects</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              teck={project.tech}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
