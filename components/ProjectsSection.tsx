import { Project } from "./Project";
import { projectsData } from "@/lib/projects";

export const ProjectsSection = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="my-6 text-4xl">Commercial projects</h2>
      <div className="flex flex-wrap">
        {projectsData?.map?.((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
