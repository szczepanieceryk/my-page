import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
export default function Home() {
  return (
    <div className="relative flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-950 opacity-50" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <main className="z-100">
        <Hero />
        <ProjectsSection />
      </main>
    </div>
  );
}
