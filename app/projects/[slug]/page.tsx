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
    <div className="max-w-7xl p-4 mx-auto text-center">
      <div>
        <h1 className="text-3xl font-bold">{project?.title}</h1>
        <p>{project?.description}</p>
        {project?.longDescription && (
          <p className="my-6">{project?.longDescription}</p>
        )}

        <Image
          src={project?.imgSrc}
          alt={project?.title}
          width={500}
          height={300}
          className="mt-3 mx-auto rounded-lg"
        />

        <a
          href={project?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Visit Project
        </a>

        <div className="my-6 flex flex-wrap gap-3 mx-auto justify-center">
          {project?.techStack?.map?.((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg text-gray-300 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default hover:scale-110"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              {tech}
            </span>
          )) || []}
        </div>
      </div>
    </div>
  );
}
