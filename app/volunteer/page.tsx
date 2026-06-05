import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Volunteer — Sayma Saymon Hia",
};

const impactStats = [
  { value: "20", label: "Trade categories" },
  { value: "Nationwide", label: "Reach across Bangladesh" },
  { value: "Free", label: "Access for all women" },
  { value: "1", label: "UN CSW side event" },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            Social impact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Beyond the code</h1>
        </div>
      </section>

      {/* Main feature */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#F7F9FB] border border-[#E2E8F0] rounded-2xl overflow-hidden">
              <div className="h-2 bg-green-500" />
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Volunteer work
                    </span>
                    <h2 className="text-2xl font-bold text-[#1A1A2E] mt-3">SET for Women</h2>
                    <p className="text-[#4A5568] mt-1">2020 – 2021</p>
                  </div>
                  <a
                    href="https://set2020.com.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#12A585] hover:bg-[#0D8A6F] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    Visit site <ExternalLink size={14} />
                  </a>
                </div>

                <div className="prose prose-slate max-w-none space-y-4 text-[#4A5568] leading-relaxed">
                  <p>
                    SET for Women (Skills and Employment Training for Women) was a UN
                    Women initiative delivered in partnership with the Ministry of Women &
                    Children Affairs, Bangladesh. The programme aimed to provide free
                    vocational training to women across the country, particularly those in
                    underserved communities.
                  </p>
                  <p>
                    I volunteered to design and build the e-training platform that powered
                    the entire initiative — an online learning portal covering 20 trade
                    categories, integrated with Streamyard for live delivery, and made
                    freely accessible to women throughout Bangladesh. The platform needed
                    to be simple enough for first-time internet users in rural areas, while
                    robust enough to support nationwide training delivery.
                  </p>
                  <p>
                    The initiative culminated in a{" "}
                    <strong>Commission on the Status of Women (CSW) side event</strong> on
                    March 25, 2021: &ldquo;SET for Women — Making a Great Change&rdquo;.
                    The event was attended by Shoko Ishikawa of UN Women and the Secretary
                    of the Ministry of Women & Children Affairs.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Impact stats */}
          <AnimatedSection delay={0.15} className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center"
                >
                  <p className="text-2xl font-bold text-[#12A585]">{stat.value}</p>
                  <p className="text-[#4A5568] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection delay={0.2} className="mt-10">
            <blockquote className="bg-[#0D2137] rounded-2xl p-8 md:p-10">
              <p className="text-white text-lg md:text-xl leading-relaxed italic">
                &ldquo;Technology built with purpose — this project showed me that the
                most meaningful engineering is the kind that reaches people who need it
                most.&rdquo;
              </p>
              <footer className="mt-4 text-[#7FA8C4] text-sm">— Sayma Saymon Hia</footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
