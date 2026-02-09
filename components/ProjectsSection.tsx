import { ProjectProps } from "@/types/types";
import { Project } from "./Project";

export const ProjectsSection = () => {
  const projectsData: ProjectProps[] = [
    {
      id: 1,
      title: "Farluner Apps & Games",
      description: "Landing page",
      imgSrc: "/images/farluner-landing.webp",
      techStack: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Sanity - Headless CMS",
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="my-6 text-4xl">Commercial projects</h2>

      {projectsData?.map?.((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};
