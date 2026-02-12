import { ProjectProps } from "@/types/types";
export const projectsData: ProjectProps[] = [
  {
    id: 1,
    slug: "farluner-page",
    title: "Farluner Apps & Games",
    description: "Landing page",
    longDescription:
      "Software company specializing in web and mobile applications.",
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
