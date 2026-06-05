import { ExternalLink } from "lucide-react";
import { ExperienceItem } from "@/lib/data";

const borderColors: Record<ExperienceItem["accentColor"], string> = {
  teal: "border-[#12A585]",
  blue: "border-[#1A6E8A]",
  gray: "border-gray-300",
};

type Props = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: Props) {
  if (item.isBreak) {
    return (
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-gray-300 mt-1.5" />
          <div className="w-0.5 bg-gray-200 flex-1 mt-1" />
        </div>
        <div className="pb-8 pt-0.5">
          <p className="text-sm text-[#7FA8C4] italic">{item.title}</p>
          <p className="text-xs text-[#7FA8C4]">{item.dateRange}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-4 ${
            item.accentColor === "teal"
              ? "bg-[#12A585]"
              : item.accentColor === "blue"
              ? "bg-[#1A6E8A]"
              : "bg-gray-300"
          }`}
        />
        <div className="w-0.5 bg-gray-200 flex-1 mt-1" />
      </div>

      <div
        className={`mb-8 bg-white border-l-4 ${borderColors[item.accentColor]} rounded-lg shadow-sm p-5 flex-1`}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[#1A1A2E]">{item.title}</h3>
              {item.isCurrent && (
                <span className="px-2 py-0.5 bg-[#12A585] text-white text-xs rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[#1A6E8A] font-medium text-sm">{item.company}</span>
              {item.companyUrl && (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7FA8C4] hover:text-[#12A585] transition-colors"
                  aria-label={`Visit ${item.company}`}
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#4A5568]">{item.dateRange}</p>
            {item.location && (
              <p className="text-xs text-[#7FA8C4]">{item.location}</p>
            )}
          </div>
        </div>

        {item.focusArea && (
          <p className="text-sm text-[#4A5568] italic mb-3">{item.focusArea}</p>
        )}

        {item.bullets.length > 0 && (
          <ul className="space-y-1.5">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-[#4A5568]">
                <span className="text-[#12A585] mt-1 shrink-0">•</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
