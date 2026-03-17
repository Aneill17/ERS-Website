/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Pricing: Context-aware based on active tab
 * Healthcare tab: "Projected Cost Savings for Entire Healthcare Teams" — internal burden vs partnering
 * Hub tab: "How a Community Changes" — community transformation pillars
 * Construction tab: Standard comparison table (Us vs Hotels vs Airbnb)
 */
import { Check, X, ArrowRight, Heart, Bus, Building2, Users, Stethoscope, Home, ShieldCheck, Sparkles, TrendingUp, DollarSign, ClipboardList, UserMinus, Phone, FileSearch, Clock, Calculator, Briefcase, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSolution } from "@/contexts/SolutionContext";

/* ── Construction comparison data ── */
const comparisonFeatures = [
  {
    feature: "Average Nightly Cost (per person)",
    elias: "$85–$120",
    hotel: "$120–$280",
    airbnb: "$120–$350",
  },
  { feature: "Full Kitchen", elias: true, hotel: false, airbnb: "varies" },
  { feature: "Dedicated Work Space", elias: true, hotel: false, airbnb: "varies" },
  { feature: "Laundry Facilities", elias: true, hotel: false, airbnb: "varies" },
  { feature: "Living & Dining Area", elias: true, hotel: false, airbnb: "varies" },
  { feature: "Single Invoice Billing", elias: true, hotel: false, airbnb: false },
  { feature: "24/7 Dedicated Support", elias: true, hotel: true, airbnb: false },
  { feature: "Fully Furnished & Managed", elias: true, hotel: "partial", airbnb: "varies" },
  { feature: "Flexible Lease Terms", elias: true, hotel: true, airbnb: false },
  { feature: "Near Project Sites", elias: true, hotel: "limited", airbnb: "varies" },
  { feature: "Scalable for Teams", elias: true, hotel: "limited", airbnb: false },
  { feature: "Premium Bedding Included", elias: true, hotel: true, airbnb: "varies" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-teal mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
  if (value === "varies" || value === "partial" || value === "limited")
    return <span className="text-xs font-medium text-amber-500 uppercase">{value}</span>;
  return <span className="text-sm font-bold text-navy">{value}</span>;
}

const costBreakdown = [
  { label: "10-Person Team / 30 Days", elias: "$31,500", hotel: "$60,000", airbnb: "$52,500", savings: "47%" },
  { label: "25-Person Team / 90 Days", elias: "$191,250", hotel: "$375,000", airbnb: "$328,125", savings: "49%" },
  { label: "50-Person Team / 180 Days", elias: "$765,000", hotel: "$1,440,000", airbnb: "$1,260,000", savings: "47%" },
];

/* ── Healthcare internal cost burden data ── */
const internalCostFactors = [
  {
    icon: ClipboardList,
    title: "Administration Budget",
    description: "Dedicated staff to coordinate housing — researching options, negotiating rates, managing bookings, handling complaints, and processing invoices across dozens of properties and vendors.",
    internalCost: "High",
    withPartner: "Eliminated",
  },
  {
    icon: UserMinus,
    title: "Staff Workload & Burnout",
    description: "HR and operations teams spend countless hours managing housing logistics instead of focusing on recruitment, retention, and patient care — leading to burnout and reduced effectiveness.",
    internalCost: "High",
    withPartner: "Eliminated",
  },
  {
    icon: Phone,
    title: "Coordination & Communication",
    description: "Constant back-and-forth with hotels, landlords, and Airbnb hosts. Managing check-ins, check-outs, maintenance issues, and last-minute changes for every incoming healthcare worker.",
    internalCost: "Ongoing",
    withPartner: "Single Point of Contact",
  },
  {
    icon: FileSearch,
    title: "Sourcing & Booking",
    description: "Finding suitable, available, and affordable accommodations near hospitals for every new hire, locum, or contract worker — often under time pressure with limited options.",
    internalCost: "Per Worker",
    withPartner: "Pre-Sourced & Ready",
  },
  {
    icon: DollarSign,
    title: "Rate Volatility & Overspend",
    description: "Hotel rates fluctuate seasonally and during events. Airbnb prices spike unpredictably. Without bulk agreements, health authorities pay premium rates and have no price certainty.",
    internalCost: "$200+/night",
    withPartner: "$105/night Fixed",
  },
  {
    icon: AlertTriangle,
    title: "Quality & Consistency Risk",
    description: "Scattered accommodations mean inconsistent quality — some workers get great stays, others get substandard housing. This directly impacts morale, retention, and your reputation as an employer.",
    internalCost: "Unpredictable",
    withPartner: "Guaranteed Standard",
  },
  {
    icon: Calculator,
    title: "Invoice & Expense Tracking",
    description: "Processing dozens of individual hotel receipts, Airbnb invoices, and expense claims every month. Each property, each vendor, each worker — a separate transaction to reconcile.",
    internalCost: "Dozens Monthly",
    withPartner: "1 Invoice",
  },
  {
    icon: Clock,
    title: "Emergency & After-Hours Issues",
    description: "When a pipe bursts at 2am or a lock breaks on a Sunday, who handles it? Internal teams aren't equipped for 24/7 property management across scattered locations.",
    internalCost: "Unmanaged",
    withPartner: "24/7 Support",
  },
  {
    icon: Briefcase,
    title: "Recruitment Disadvantage",
    description: "Without a guaranteed housing solution, health authorities lose candidates to competitors who offer housing support. The inability to promise quality housing is a direct barrier to recruitment.",
    internalCost: "Lost Candidates",
    withPartner: "Recruitment Advantage",
  },
];

/* ── Healthcare projected cost comparison ── */
const healthcareCostScenarios = [
  {
    label: "20 Staff / Year — 1 Year",
    internal: "$1,460,000",
    internalDetail: "20 staff × $200/night × 365 days",
    partner: "$766,500",
    partnerDetail: "20 staff × $105/night × 365 days",
    savings: "$693,500",
    pct: "47%",
  },
  {
    label: "20 Staff / Year — 3 Years",
    internal: "$4,380,000",
    internalDetail: "20 staff × $200/night × 1,095 days",
    partner: "$2,299,500",
    partnerDetail: "20 staff × $105/night × 1,095 days",
    savings: "$2,080,500",
    pct: "47%",
  },
  {
    label: "20 Staff / Year — 5 Years",
    internal: "$7,300,000",
    internalDetail: "20 staff × $200/night × 1,825 days",
    partner: "$3,832,500",
    partnerDetail: "20 staff × $105/night × 1,825 days",
    savings: "$3,467,500",
    pct: "47%",
  },
];

/* ── Community transformation pillars for Hub tab ── */
const communityPillars = [
  {
    icon: Building2,
    title: "Purpose-Built Housing Infrastructure",
    description: "Dedicated residential developments near hospitals replace scattered, inconsistent accommodations with a permanent housing solution that serves the community for decades.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Construction Support",
    description: "Around hospitals, we support both healthcare professionals and construction crews — providing housing during the build phase and transitioning to long-term healthcare staff housing in operations.",
  },
  {
    icon: Heart,
    title: "Wellness & Community Services",
    description: "Housing hubs integrate wellness amenities, community lounges, childcare support, and family services that reduce burnout and build a sense of belonging for healthcare workers.",
  },
  {
    icon: Bus,
    title: "Transportation & Connectivity",
    description: "Strategic location within walking distance of hospitals, with pathways to transit, local services, and downtown — removing transportation barriers for staff and their families.",
  },
  {
    icon: Users,
    title: "Attraction & Retention Platform",
    description: "Quality housing becomes a recruitment tool. Health authorities can offer guaranteed, affordable, fully managed accommodations as part of their employment package — a competitive advantage in staffing.",
  },
  {
    icon: ShieldCheck,
    title: "Price Certainty & Budget Control",
    description: "Long-term partnership agreements lock in predictable housing costs, eliminating the volatility of hotel rates, Airbnb fluctuations, and ad-hoc contractor accommodation expenses.",
  },
  {
    icon: Sparkles,
    title: "Additional Healthcare Services",
    description: "Housing hubs create a platform for expanded services — mental health support, peer networking, professional development spaces, and family integration programs that strengthen the healthcare workforce.",
  },
  {
    icon: TrendingUp,
    title: "Championing Healthcare Leaders",
    description: "By removing the housing burden from health authority administrators, leaders can focus on patient care, strategic planning, and workforce development — not managing scattered accommodations.",
  },
  {
    icon: Home,
    title: "New Community Growth",
    description: "A healthcare housing hub doesn't just serve the hospital — it strengthens the surrounding community with diverse housing supply, local jobs, increased vibrancy, and enhanced safety through active residential presence.",
  },
];

/* ── Hub: Community Transformation Section ── */
function HubCommunitySection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Community Transformation
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            How a Community Changes
          </h2>
          <p className="text-navy/50 text-base leading-relaxed">
            A Healthcare Housing Hub is more than accommodation — it's a platform that transforms
            how a community supports its healthcare workforce. By building purpose-built housing
            around hospitals, we deliver services, amenities, and infrastructure that serve both
            the short-term and long-term needs of health authorities while reducing cost and
            giving price certainty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {communityPillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-sm p-6 hover:shadow-md hover:border-teal/20 transition-all group"
            >
              <div className="w-11 h-11 bg-teal/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <pillar.icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-navy/50 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-navy rounded-sm p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
            Build a Healthier Community Together
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">
            Partner with Elias Range Stays to develop a Healthcare Housing Hub that
            supports your workforce, strengthens your community, and delivers long-term
            value for your health authority.
          </p>
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 group"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Healthcare: Internal Cost Burden vs Partnering ── */
function HealthcarePricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            The True Cost of Managing Internally
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            Projected Cost Savings for
            <br />
            Entire Healthcare Teams
          </h2>
          <p className="text-navy/50 text-base leading-relaxed">
            When health authorities manage housing internally — coordinating, sourcing, booking,
            and supporting accommodations across scattered hotels and rentals — the true cost
            goes far beyond nightly rates. Administration budgets, staff workload, quality
            inconsistency, and recruitment disadvantages compound into a significant hidden expense.
            A trusted partner eliminates these burdens entirely.
          </p>
        </div>

        {/* Internal Cost Burden Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-navy mb-2">The Hidden Cost of Managing Housing Internally</h3>
          <p className="text-navy/50 text-sm mb-6">These are the real costs health authorities absorb when they try to coordinate, supply, book, and source housing without a dedicated partner.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {internalCostFactors.map((factor, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm p-6 hover:shadow-md hover:border-teal/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-red-50 rounded-sm flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <factor.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-navy/30 mb-0.5">Internal</div>
                    <div className="text-xs font-bold text-red-400">{factor.internalCost}</div>
                  </div>
                </div>
                <h4 className="text-base font-bold text-navy mb-2">{factor.title}</h4>
                <p className="text-navy/50 text-sm leading-relaxed mb-3">{factor.description}</p>
                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/30">With Partner</span>
                  <span className="text-xs font-bold text-teal">{factor.withPartner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projected Cost Comparison */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-navy mb-2">Projected Accommodation Cost Savings</h3>
          <p className="text-navy/50 text-sm mb-6">Based on 20 out-of-town healthcare staff per year at current market rates vs. partnering with Elias Range Stays.</p>

          <div className="grid lg:grid-cols-3 gap-5">
            {healthcareCostScenarios.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-md hover:border-teal/20 transition-all"
              >
                <div className="p-5 border-b border-border bg-navy/[0.02]">
                  <p className="text-xs font-bold text-teal uppercase tracking-wider">{item.label}</p>
                </div>
                <div className="p-5">
                  {/* Internal */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-navy/40 uppercase">Managing Internally</span>
                      <span className="text-lg font-extrabold text-red-400">{item.internal}</span>
                    </div>
                    <p className="text-[11px] text-navy/30">{item.internalDetail}</p>
                  </div>

                  {/* Partner */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-navy/40 uppercase">With Elias Range Stays</span>
                      <span className="text-lg font-extrabold text-teal">{item.partner}</span>
                    </div>
                    <p className="text-[11px] text-navy/30">{item.partnerDetail}</p>
                  </div>

                  {/* Savings */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-navy/40 uppercase block">Total Savings</span>
                        <span className="text-lg font-extrabold text-navy">{item.savings}</span>
                      </div>
                      <span className="text-3xl font-black text-teal">{item.pct}</span>
                    </div>
                    <p className="text-[11px] text-navy/30 mt-2">
                      + elimination of admin overhead, staff workload, coordination costs, and quality risks
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-navy rounded-sm p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
            Stop Managing Housing. Start Partnering.
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">
            Let us handle the sourcing, furnishing, coordination, and support — so your team
            can focus on what matters most: delivering healthcare to your community.
          </p>
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 group"
          >
            Get Your Custom Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Construction: Standard Comparison Table ── */
function ConstructionPricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Cost Comparison
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            How We Compare
          </h2>
          <p className="text-navy/50 text-base leading-relaxed">
            See how Elias Range Stays compares to
            booking hotels and Airbnb for your construction workforce. Better amenities, lower cost, zero hassle.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-border rounded-sm overflow-hidden shadow-sm mb-14">
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-4 lg:p-5 font-bold text-navy text-sm">Feature</div>
            <div className="p-4 lg:p-5 text-center bg-teal/5 border-l border-r border-teal/10">
              <span className="font-extrabold text-navy text-sm block">Elias Range</span>
              <span className="text-teal text-[10px] font-bold uppercase tracking-wider">Recommended</span>
            </div>
            <div className="p-4 lg:p-5 text-center">
              <span className="font-bold text-navy/60 text-sm">Hotels</span>
            </div>
            <div className="p-4 lg:p-5 text-center">
              <span className="font-bold text-navy/60 text-sm">Airbnb</span>
            </div>
          </div>

          {comparisonFeatures.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-border last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-concrete/30"
              } hover:bg-teal/[0.03] transition-colors`}
            >
              <div className="p-3 lg:p-4 text-sm font-medium text-navy/80 flex items-center">
                {row.feature}
              </div>
              <div className="p-3 lg:p-4 flex items-center justify-center bg-teal/[0.02] border-l border-r border-teal/5">
                <CellValue value={row.elias} />
              </div>
              <div className="p-3 lg:p-4 flex items-center justify-center">
                <CellValue value={row.hotel} />
              </div>
              <div className="p-3 lg:p-4 flex items-center justify-center">
                <CellValue value={row.airbnb} />
              </div>
            </div>
          ))}
        </div>

        {/* Cost Breakdown */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-navy mb-6">Projected Cost Savings</h3>
          <div className="grid lg:grid-cols-3 gap-5">
            {costBreakdown.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm p-6 hover:shadow-md hover:border-teal/20 transition-all"
              >
                <p className="text-xs font-bold text-teal uppercase tracking-wider mb-4">
                  {item.label}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-navy/60">Elias Range Stays</span>
                    <span className="text-lg font-extrabold text-teal">{item.elias}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-navy/60">Hotels</span>
                    <span className="text-sm font-bold text-navy/40 line-through">{item.hotel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-navy/60">Airbnb</span>
                    <span className="text-sm font-bold text-navy/40 line-through">{item.airbnb}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-navy/40 uppercase">Your Savings</span>
                  <span className="text-2xl font-black text-teal">{item.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-navy rounded-sm p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
            Ready to Save on Construction Workforce Housing?
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">
            Get a custom quote for fully managed workforce housing near your project site.
            Engage us early for the best options — our team responds within 24 hours.
          </p>
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 group"
          >
            Get Your Custom Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const { activeTab } = useSolution();

  if (activeTab === "hub") {
    return <HubCommunitySection />;
  }

  if (activeTab === "healthcare") {
    return <HealthcarePricingSection />;
  }

  return <ConstructionPricingSection />;
}
