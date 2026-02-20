export interface ProjectProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string[];
  imgSrc: string;
  techStack: string[];
  url: string;
}
