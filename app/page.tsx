"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import StatsBar from "@/components/StatsBar";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import { bio, currentRole, education, projects } from "@/lib/data";

const featuredProjects = projects.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0D2137] min-h-screen flex items-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#12A585]/10 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#1A6E8A]/15 translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 bg-[#12A585]/20 text-[#12A585] text-sm font-medium rounded-full mb-6">
              Senior Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Sayma Saymon Hia
          </motion.h1>

          <motion.p
            className="text-xl text-[#7FA8C4] max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Senior Software Engineer building AI-powered products.
            <br />
            7+ years across startups, government & international clients.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#12A585] hover:bg-[#0D8A6F] text-white font-medium px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              View my work <ArrowRight size={16} />
            </Link>
            <a
              href="/cv/CV.pdf"
              download
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-all hover:bg-white/10"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* About snapshot */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-10">About me</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection delay={0.1}>
              <p className="text-[#4A5568] leading-relaxed text-lg">{bio.short}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[#12A585] hover:text-[#0D8A6F] font-medium mt-6 transition-colors"
              >
                Read full story <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <div className="bg-[#F7F9FB] border border-[#E2E8F0] rounded-xl p-5">
                  <p className="text-xs font-semibold text-[#12A585] uppercase tracking-wider mb-1">
                    Current role
                  </p>
                  <p className="font-semibold text-[#1A1A2E]">{currentRole.title}</p>
                  <p className="text-[#4A5568] text-sm">{currentRole.company}</p>
                </div>
                <div className="bg-[#F7F9FB] border border-[#E2E8F0] rounded-xl p-5">
                  <p className="text-xs font-semibold text-[#12A585] uppercase tracking-wider mb-1">
                    Education
                  </p>
                  <p className="font-semibold text-[#1A1A2E]">{education[0].institution}</p>
                  <p className="text-[#4A5568] text-sm">
                    {education[0].degree} · {education[0].detail}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-[#F7F9FB] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-[#1A1A2E]">Featured projects</h2>
              <Link
                href="/projects"
                className="text-[#12A585] hover:text-[#0D8A6F] font-medium text-sm flex items-center gap-1 transition-colors"
              >
                All projects <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />
    </>
  );
}
