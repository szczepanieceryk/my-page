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
      </div>
    </section>
  );
};
