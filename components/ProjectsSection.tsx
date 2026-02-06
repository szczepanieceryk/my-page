import Image from "next/image";
export const ProjectsSection = () => {
  const landingPageStack: string[] = [
    "React",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "Sanity - Headless CMS",
  ];
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="my-6 text-4xl">Commercial projects</h2>

      <div className="mt-8 p-3 w-[95%] md:max-w-[450px] mx-auto rounded-lg">
        <h3 className="text-2xl">Farluner Apps & Games</h3>
        <small>Landing page</small>
        <div className="mt-6">
          <Image
            src="/images/farluner-landing.webp"
            alt="Farluner Apps & Games"
            width={500}
            height={300}
            className="rounded-lg "
          />
          <span className="mt-6 mb-4 block text-left">Tech Stack</span>
          <div className="flex flex-wrap gap-3 mx-auto">
            {landingPageStack?.map?.((tech, index) => (
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
    </div>
  );
};
