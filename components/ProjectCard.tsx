import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import { Project } from "@/lib/data";

const accentClasses: Record<Project["accentColor"], string> = {
  teal: "bg-[#12A585]",
  blue: "bg-[#1A6E8A]",
  amber: "bg-amber-500",
  purple: "bg-purple-600",
  green: "bg-green-600",
  navy: "bg-[#0D2137]",
};

const borderClasses: Record<Project["accentColor"], string> = {
  teal: "border-[#12A585]",
  blue: "border-[#1A6E8A]",
  amber: "border-amber-500",
  purple: "border-purple-600",
  green: "border-green-600",
  navy: "border-[#0D2137]",
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className={`bg-white rounded-xl border-t-4 ${borderClasses[project.accentColor]} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col gap-4`}
    >
      <div className="flex items-start justify-between gap-2">
        <div
          className={`w-12 h-12 rounded-xl flex-shrink-0 ${project.logo ? "bg-white border border-[#E2E8F0] shadow-sm" : accentClasses[project.accentColor]} flex items-center justify-center overflow-hidden`}
        >
          {project.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.logo} alt={project.name} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-white font-bold text-xs">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#12A585] hover:text-[#0D8A6F] transition-colors"
            aria-label={`Visit ${project.name}`}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-[#1A1A2E] text-lg mb-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#12A585] transition-colors"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-[#4A5568] text-sm leading-relaxed">{project.description}</p>
      </div>

      {project.role && (
        <p className="text-xs text-[#12A585] font-medium">{project.role}</p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-[#F7F9FB] border border-[#E2E8F0] text-[#4A5568] text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.noLiveNote && (
        <div className="flex items-center gap-1.5 text-xs text-[#7FA8C4]">
          <Lock size={12} />
          {project.noLiveNote}
        </div>
      )}
    </div>
  );
}
