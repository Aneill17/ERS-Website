/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Navbar: Sticky, navy background, teal accent on hover/active
 * Montserrat 600 for nav items, logo with white badge background
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// Full-color logo with tagline
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Occupancy", href: "#occupancy" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function LogoBadge({ className = "h-28 lg:h-36" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg px-4 py-2 shadow-md inline-flex items-center shrink-0`}>
      <img
        src={LOGO_URL}
        alt="Elias Range Stays"
        className={`${className} w-auto`}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/98 shadow-lg shadow-navy-dark/20 backdrop-blur-sm"
          : "bg-navy"
      }`}
    >
      <div className="container flex items-center justify-between h-28 lg:h-32">
        {/* Logo with white badge */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 shrink-0">
          <LogoBadge className="h-16 lg:h-20" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-2 text-sm font-semibold text-white/80 hover:text-teal transition-colors duration-200 tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:2507198085" className="flex items-center gap-1.5 text-white/80 hover:text-teal transition-colors text-sm font-medium">
            <Phone className="w-4 h-4" />
            (250) 719-8085
          </a>
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-5 py-2.5 tracking-wide"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-navy-dark ${
          mobileOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left px-3 py-3 text-sm font-semibold text-white/80 hover:text-teal hover:bg-white/5 rounded transition-colors uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:2507198085" className="flex items-center gap-2 text-white/80 text-sm font-medium px-3">
              <Phone className="w-4 h-4" />
              (250) 719-8085
            </a>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-teal hover:bg-teal-light text-white font-bold text-sm w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
