import Link from "next/link";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import LinkedInIcon from "@/components/LinkedInIcon";
import { bio, education, languages, attributes, siteConfig } from "@/lib/data";

export const metadata = {
  title: "About — Sayma Saymon Hia",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            My story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About me</h1>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <AnimatedSection>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-[#12A585] flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  SSH
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-[#1A1A2E] text-xl">{siteConfig.name}</h2>
                  <p className="text-[#4A5568] text-sm">{siteConfig.role}</p>
                  <div className="flex items-center justify-center gap-1 text-[#7FA8C4] text-sm mt-1">
                    <MapPin size={13} />
                    {siteConfig.location}
                  </div>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#12A585] hover:text-[#0D8A6F] text-sm mt-2 transition-colors"
                  >
                    <LinkedInIcon size={14} /> LinkedIn
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="flex-1">
              <div className="space-y-4">
                {bio.full.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[#4A5568] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-[#F7F9FB] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Education</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <AnimatedSection key={edu.institution} delay={i * 0.1}>
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
                  <p className="font-semibold text-[#1A1A2E]">{edu.degree}</p>
                  <p className="text-[#1A6E8A] text-sm mt-0.5">{edu.institution}</p>
                  {edu.detail && (
                    <p className="text-[#4A5568] text-sm">{edu.detail}</p>
                  )}
                  {edu.year && (
                    <p className="text-[#7FA8C4] text-xs mt-1">{edu.year}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Languages + Attributes */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Languages</h2>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between bg-[#F7F9FB] border border-[#E2E8F0] rounded-lg px-5 py-3"
                >
                  <span className="font-medium text-[#1A1A2E]">{lang.name}</span>
                  <span className="text-[#4A5568] text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">What I bring</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {attributes.map((attr) => (
                <div
                  key={attr.title}
                  className="bg-[#F7F9FB] border border-[#E2E8F0] rounded-xl p-5"
                >
                  <p className="font-semibold text-[#1A1A2E] mb-1">{attr.title}</p>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
