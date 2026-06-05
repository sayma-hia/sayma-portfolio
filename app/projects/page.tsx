import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Sayma Saymon Hia",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            What I&apos;ve built
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Projects</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F7F9FB] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-[#4A5568] mb-10 max-w-2xl">
              A selection of products and platforms I have built or led — spanning AI
              workspaces, government systems, legal-tech, and e-commerce.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.08}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
