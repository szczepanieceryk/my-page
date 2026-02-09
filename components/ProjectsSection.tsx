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
      url: "https://farluner.com/",
    },
    {
      id: 2,
      title: "Simple Video Editor",
      description: "Web App for video optimization & editing",
      imgSrc: "/images/sve-web-app.webp",
      techStack: ["Python", "Flask", "CSS", "HTML", "JavaScript"],
      url: "https://www.simplevideoeditor.com/",
    },
  ];
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
