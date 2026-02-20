import { CTAButtons } from "./CTAButtons";
export const Hero = () => {
  const techStack: string[] = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Flask",
    "FFmpeg",
    "GIT",
    "Firebase",
  ];

  return (
    <section className="flex items-center justify-center">
      {/* Animated background gradient */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">
            Available for new opportunities
          </span>
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
            Eryk
          </span>
        </h1>
        {/* Subtitle with typing effect feel */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 animate-slide-up animation-delay-200">
          Frontend / Web Developer
        </p>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-400">
          Building modern web applications with focus on{" "}
          <span className="text-blue-400">performance</span> and{" "}
          <span className="text-purple-400">accessibility</span>.
          <br />
          300+ contributions in the last 4 months. Always learning, always
          building.
        </p>

        {/* CTA Buttons */}
        <CTAButtons />

        {/* Tech stack badges */}
        <div className="animate-slide-up animation-delay-800">
          <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3 justify-center max-w-xl mx-auto">
            {techStack?.map?.((tech, index) => (
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
    </section>
  );
};
