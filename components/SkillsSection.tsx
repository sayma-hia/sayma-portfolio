import AnimatedSection from "./AnimatedSection";
import { skills, whyHireMe } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12 text-center">
            Skills & expertise
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold text-[#12A585] uppercase tracking-wider mb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-[#F7F9FB] border border-[#E2E8F0] text-[#4A5568] text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#F7F9FB] rounded-xl p-8 h-full flex flex-col justify-center">
              <h3 className="font-semibold text-[#1A1A2E] text-xl mb-4">Why work with me</h3>
              <p className="text-[#4A5568] leading-relaxed">{whyHireMe}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
