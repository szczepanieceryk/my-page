import Link from "next/link";

import { Project } from "./Project";
import { projectsData } from "@/lib/projects";

export const ProjectsSection = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="my-6 text-4xl">Commercial projects</h2>
      <div className="flex flex-wrap justify-center">
        {projectsData?.map?.((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <Project key={project.id} {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
};
