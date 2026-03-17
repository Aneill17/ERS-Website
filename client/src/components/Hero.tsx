/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Hero: Asymmetric split — left content, right image
 * Oversized stat numbers, teal accent line, strong CTA
 */
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/pEZr0olDJ8oz9sZKafHkB0-img-1_1771268401000_na1fn_aGVyby1ob3VzaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L3BFWnIwb2xESjhvejlzWkthZkhrQjAtaW1nLTFfMTc3MTI2ODQwMTAwMF9uYTFmbl9hR1Z5Ynkxb2IzVnphVzVuLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gtYjS4xN~0RhCtjygmehr9AYLwfjBK~oPoZ0Hcr-bbn5P-sceRlxSB~z2WdCnSenw65A64MKCzrTm0WKRsRa4CsnP6Zfqq3ud1I2a7AcKHb-NdI3JuSjN0R98WCulZ5TYkPeQhY4diFquzTP0EFDZIRTKrU-4710FzbhxRz3~ntsO5GLkJO1rNGTESjWs0QLNwsfRCMypjfO0Rfo2qyKssq4-KUJUeUQ83TyDyRGEgjybdTqgKBNu5mPffSuJNmkh6ImexGven0r3eI~ueMl8t0HKrVmzAq-rDgbIg8qRPoU1wEc0wYhkkvtN0OBRGQQMfjLU83K4rLWHZHxZGbp4w__";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center pt-32 lg:pt-40 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px),
                          repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)`
      }} />

      <div className="container relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Teal accent line */}
            <div className="w-16 h-1 bg-teal mb-6" />

            <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Healthy Living, Stronger Communities
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6">
              Purpose-Built
              <br />
              <span className="text-teal">Healthcare Housing</span>
              <br />
              That Supports Your
              <br />
              Workforce
            </h1>

            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              We develop and operate fully furnished housing hubs near hospitals
              — supporting healthcare recruitment, retention, and well-being.
              Also serving construction and infrastructure workforces across Canada.
            </p>

            {/* Tagline accent */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-teal/50" />
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.25em] italic">
                Healthy Living, Stronger Communities
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-7 py-6 tracking-wide group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" })}
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-7 py-6 tracking-wide"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl lg:text-4xl font-black text-teal leading-none">
                  <AnimatedCounter target={40} suffix="%" />
                </div>
                <p className="text-white/50 text-xs font-medium mt-2 uppercase tracking-wider">
                  Cheaper Than Hotels
                </p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-teal leading-none">
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <p className="text-white/50 text-xs font-medium mt-2 uppercase tracking-wider">
                  Housing Options
                </p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-white leading-none">
                  24/7
                </div>
                <p className="text-white/50 text-xs font-medium mt-2 uppercase tracking-wider">
                  Service &amp; Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={HERO_IMG}
                alt="Fully furnished modern apartment with mountain views"
                className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating badge with logo */}
            <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-6 bg-white text-navy px-6 py-4 rounded-md shadow-lg flex items-center gap-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png"
                alt="Elias Range Stays"
                className="h-36 lg:h-44 w-auto"
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-teal">Trusted by</p>
                <p className="text-xs font-extrabold text-navy">Health Authorities in BC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#solutions")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-teal transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
