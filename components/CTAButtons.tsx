"use client";

export const CTAButtons = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-600">
      <button
        className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
        onClick={scrollToProjects}
      >
        <span className="relative z-10">View My Work</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
      </button>

      <a
        href="https://www.linkedin.com/in/eryk-szczepaniec-94509a207/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      </a>
    </div>
  );
};
