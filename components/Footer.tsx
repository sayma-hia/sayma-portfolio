import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import LinkedInIcon from "./LinkedInIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D2137] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col gap-[3px] mb-2">
              <span
                className="text-[18px] font-medium text-white leading-none tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Sayma Hia
              </span>
              <span className="block w-8 h-[2px] bg-[#12A585] rounded-full" />
            </div>
            <p className="text-[#7FA8C4] text-sm max-w-xs">
              Senior Software Engineer building AI-powered products.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7FA8C4] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7FA8C4] hover:text-[#12A585] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#7FA8C4] hover:text-[#12A585] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-[#7FA8C4] text-xs">
          © 2025 {siteConfig.name} · {siteConfig.location}
        </div>
      </div>
    </footer>
  );
}
