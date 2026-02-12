import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projectsData } from "@/lib/projects";

export const generateStaticParams = async () => {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return (
    <div>
      <div>
        <span>Projekct page</span>
        <h1>{project?.title}</h1>
      </div>
    </div>
  );
}
