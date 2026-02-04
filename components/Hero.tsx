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
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-950 opacity-50" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-600">
          <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </button>

          <button className="group px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-300 rounded-lg font-medium transition-all hover:text-white hover:scale-105 cursor-pointer">
            <span className="flex items-center gap-2">
              Contact Me
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Tech stack badges */}
        <div className="animate-slide-up animation-delay-800">
          <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
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
