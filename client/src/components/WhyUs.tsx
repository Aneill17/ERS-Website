/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Why Us: Navy background, teal accent cards, strong typography
 * Context-aware: Healthcare tab shows healthcare-only messaging
 */
import { DollarSign, FileText, MapPin, Clock, Shield, Headphones } from "lucide-react";
import { useSolution } from "@/contexts/SolutionContext";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png";

const healthcareReasons = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Save up to 40% compared to traditional hotel accommodations for your healthcare teams. Our bulk sourcing and management model delivers significant savings at scale for health authorities.",
    stat: "40%",
    statLabel: "Average Savings",
  },
  {
    icon: FileText,
    title: "Single Invoice",
    description: "One consolidated invoice for all your healthcare staff housing needs. No more tracking dozens of hotel receipts and expense reports across multiple properties and departments.",
    stat: "1",
    statLabel: "Invoice Per Project",
  },
  {
    icon: MapPin,
    title: "Near Your Hospitals",
    description: "We source and deploy housing close to your healthcare facilities — ensuring your traveling nurses, locum physicians, and contract staff are minutes from where they're needed most.",
    stat: "100+",
    statLabel: "Locations Available",
  },
  {
    icon: Clock,
    title: "Fully Managed",
    description: "From sourcing to furnishing to ongoing maintenance, we handle every detail so your healthcare teams can focus on patient care — not searching for somewhere to live.",
    stat: "End-to-End",
    statLabel: "Management",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every property is vetted, furnished to our standards, and regularly inspected. Premium bedding, full kitchens, and comfortable living spaces — because your healthcare workers deserve a real home.",
    stat: "100%",
    statLabel: "Quality Assured",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support for your healthcare staff — maintenance requests, emergencies, and any housing needs. Your nurses and physicians are never left without assistance.",
    stat: "24/7",
    statLabel: "Always Available",
  },
];

const standardReasons = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Save up to 40% compared to traditional hotel accommodations. We negotiate bulk rates and deliver significant savings for your project budget — one invoice, zero hassle.",
    stat: "40%",
    statLabel: "Average Savings",
  },
  {
    icon: FileText,
    title: "Single Invoice",
    description: "One consolidated invoice for all your crew housing. No more tracking dozens of hotel receipts and expense reports across multiple properties and contractors.",
    stat: "1",
    statLabel: "Invoice Per Project",
  },
  {
    icon: MapPin,
    title: "Real Housing, Real Amenities",
    description: "Full kitchens, living areas, dedicated workspaces, and premium bedding — everything your crew needs to rest, recharge, and perform at their best. Not a hotel room.",
    stat: "100+",
    statLabel: "Locations Available",
  },
  {
    icon: Clock,
    title: "Fully Managed",
    description: "From sourcing to furnishing to ongoing maintenance, we handle every detail. Your crews move in and focus on what matters — the build. Engage us early for the best options.",
    stat: "End-to-End",
    statLabel: "Management",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every property is vetted, furnished to our standards, and regularly inspected. Premium bedding, full kitchens, and comfortable living spaces — your crews deserve a real home.",
    stat: "100%",
    statLabel: "Quality Assured",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support for maintenance requests, emergencies, and any housing needs. Your workforce is never left without assistance, day or night.",
    stat: "24/7",
    statLabel: "Always Available",
  },
];

export default function WhyUs() {
  const { activeTab } = useSolution();
  const isHealthcare = activeTab === "healthcare" || activeTab === "hub";
  const reasons = isHealthcare ? healthcareReasons : standardReasons;

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px),
                          repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 80px)`
      }} />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            {isHealthcare ? (
              <>
                The Smarter Way to House
                <br />
                Your Healthcare Teams
              </>
            ) : (
              <>
                The Smarter Way to House
                <br />
                Your Construction Workforce
              </>
            )}
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            {isHealthcare
              ? "We eliminate the complexity, cost, and hassle of traditional accommodation for healthcare professionals. From traveling nurses to locum physicians, we provide fully managed housing so your teams can focus on delivering patient care — not searching for somewhere to live."
              : "Whether you're building a hospital, a pipeline, or critical infrastructure, we provide fully managed accommodations that keep your crews comfortable and productive. Better than hotels, more consistent than Airbnb — and up to 40% cheaper. Engage us early for the best options."}
          </p>
        </div>

        {/* Logo badge */}
        <div className="mb-10 flex items-center gap-4">
          <div className="bg-white rounded-lg px-5 py-3 shadow-md inline-flex items-center">
            <img src={LOGO_URL} alt="Elias Range Stays" className="h-36 w-auto" />
          </div>
          <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">Healthy Living, Stronger Communities</span>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/[0.08] p-6 rounded-sm hover:bg-white/[0.07] hover:border-teal/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-teal/10 rounded-sm flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <r.icon className="w-5 h-5 text-teal" />
                </div>
                <span className="text-2xl font-black text-teal/60 group-hover:text-teal transition-colors">
                  {r.stat}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
