import AnimatedSection from "@/components/AnimatedSection";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/lib/data";

export const metadata = {
  title: "Experience — Sayma Saymon Hia",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            Work history
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Experience</h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F7F9FB] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[#4A5568] leading-relaxed">
                7+ years across government ministries, startup studios, and international
                remote engagements — from building national systems to shipping production
                AI features.
              </p>
            </div>
          </AnimatedSection>

          {experience.map((item, i) => (
            <AnimatedSection key={`${item.title}-${item.dateRange}`} delay={i * 0.05} direction="left">
              <ExperienceCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
