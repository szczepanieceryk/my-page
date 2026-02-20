import { ProjectProps } from "@/types/types";
export const projectsData: ProjectProps[] = [
  {
    id: 1,
    slug: "farluner-page",
    title: "Farluner Apps & Games",
    description: "Landing page",
    longDescription: [
      "Landing page created for a software company specializing in web and mobile applications.",
      "The page layout was built based on dynamic components that I prepared myself (without using any external libraries).",
      "I had the most fun creating responsive, dynamic components with Tailwind CSS for the first time. It's a departure from large, hard-to-maintain CSS files where you spend more time thinking up the next class name than actually styling the element.",
    ],

    imgSrc: "/images/farluner-landing.webp",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    url: "https://farluner.com/",
  },
  {
    id: 2,
    slug: "simple-video-editor",
    title: "Simple Video Editor",
    description: "Web App for video optimization & editing",
    imgSrc: "/images/sve-web-app.webp",
    techStack: ["Python", "Flask", "CSS", "HTML", "JavaScript"],
    url: "https://www.simplevideoeditor.com/",
  },
];

export const getProjectBySlug = (slug: string): ProjectProps | undefined => {
  return projectsData?.find?.((p) => p.slug === slug);
};
