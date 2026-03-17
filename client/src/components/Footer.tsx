/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Footer: Dark navy, minimal, structured
 * Logo with white badge background for visibility on dark bg
 */
import { Phone, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Occupancy", href: "#occupancy" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark border-t border-white/[0.06]">
      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo with white badge */}
            <div className="bg-white rounded-lg px-5 py-3 shadow-md inline-flex items-center mb-5">
              <img src={LOGO_URL} alt="Elias Range Stays" className="h-44 w-auto" />
            </div>
            <p className="text-teal/70 text-sm font-semibold italic mb-3 tracking-wide">
              Healthy Living, Stronger Communities
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Professional workforce housing for healthcare and construction industries.
              Fully furnished, fully managed accommodations — anywhere in Canada.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:2507198085" className="flex items-center gap-2 text-white/50 hover:text-teal transition-colors text-sm">
                <Phone className="w-3.5 h-3.5" />
                (250) 719-8085
              </a>
              <a href="mailto:austin@eliasrangestays.ca" className="flex items-center gap-2 text-white/50 hover:text-teal transition-colors text-sm">
                <Mail className="w-3.5 h-3.5" />
                austin@eliasrangestays.ca
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-white/40 hover:text-teal transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Industries
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Healthcare Housing",
                "Healthcare Housing Hubs",
                "Construction Housing",
                "Executive Suites",
              ].map((item) => (
                <span key={item} className="text-white/40 text-sm">
                  {item}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Elias Range Stays" className="h-20 w-auto opacity-60" />
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Elias Range Stays. All rights reserved.
            </p>
            <span className="text-white/20 text-[10px] italic tracking-wide hidden sm:inline">
              Healthy Living, Stronger Communities
            </span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-teal transition-colors text-xs">
              Facebook
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-teal transition-colors text-xs">
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-teal transition-colors text-xs">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
