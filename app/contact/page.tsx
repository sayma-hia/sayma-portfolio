import Link from "next/link";
import { Mail, MapPin, Briefcase, Code2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import LinkedInIcon from "@/components/LinkedInIcon";
import { siteConfig } from "@/lib/data";

export const metadata = {
  title: "Contact — Sayma Saymon Hia",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact</h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F7F9FB] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Let&apos;s connect</h2>
              <p className="text-[#4A5568] mb-8 leading-relaxed">
                I&apos;m open to senior engineering roles, AI product opportunities, and
                collaborations globally.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[#4A5568] hover:text-[#12A585] transition-colors"
                >
                  <Mail size={18} className="text-[#12A585] shrink-0" />
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-[#4A5568]">
                  <MapPin size={18} className="text-[#12A585] shrink-0" />
                  {siteConfig.location}
                </div>
                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#4A5568] hover:text-[#12A585] transition-colors"
                >
                  <LinkedInIcon size={18} className="text-[#12A585] shrink-0" />
                  linkedin.com/in/sayma-hia-746979117
                </Link>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
                  <Briefcase size={18} className="text-[#12A585] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A1A2E] text-sm">Open to opportunities</p>
                    <p className="text-[#4A5568] text-xs mt-0.5">
                      Senior SWE / AI Engineer positions
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
                  <Code2 size={18} className="text-[#12A585] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A1A2E] text-sm">Available for freelance</p>
                    <p className="text-[#4A5568] text-xs mt-0.5">AI product consulting</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
                <ContactForm />
                <p className="text-[#7FA8C4] text-xs mt-5 text-center">
                  Prefer email? Reach me directly at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="underline hover:text-[#12A585] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
