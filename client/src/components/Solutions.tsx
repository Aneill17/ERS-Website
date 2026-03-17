/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Solutions: Three-tab layout (Healthcare Housing / Healthcare Housing Hubs / Construction)
 * Healthcare-first positioning, narrowed scope
 * Uses SolutionContext to share active tab with HowItWorks and Occupancy
 */
import {
  Building2,
  HardHat,
  Stethoscope,
  Heart,
  DollarSign,
  Users,
  Home,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  ArrowRight,
  MapPin,
  Calendar,
  UserCheck,
  BadgeDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSolution } from "@/contexts/SolutionContext";

const HEALTHCARE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/pEZr0olDJ8oz9sZKafHkB0-img-2_1771268392000_na1fn_aGVhbHRoY2FyZS1ob3VzaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L3BFWnIwb2xESjhvejlzWkthZkhrQjAtaW1nLTJfMTc3MTI2ODM5MjAwMF9uYTFmbl9hR1ZoYkhSb1kyRnlaUzFvYjNWemFXNW4uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rGTpgHfM5CTnrT04lUamGGa9j3kLhY~53K1eJ0kGV2vem8xXGcTqgu70jYIekUbsXqTQ9NTegUK-gGGu-iOqIWFIhvuYXEDuMmRGuh45Ae0GVoXAgW8L0jvfD7D9NEbbLivq1Z3kSMbluqjq5PaSn0seE~xDYTUILjtqj-PqaR1show58mNicxWjmle7aH-R2boPATYQ7zsqJQQjWVQ3GG9n9ebpBOKsSvA9p4vXr3cPqlL0B3BvWoUv8myGya2wEbUSoUnWqhJOyDTe~Z5oM0PFKb0Hmf4rhZwUFf9kWxToBzZMN-qhV04XhCWQv3C6RU7etj3c4t8wMN4cT40ejw__";

const HUB_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/N4AlpOh2W0u3WWZUjOuJuz-img-1_1771281251000_na1fn_aGVhbHRoY2FyZS1odWI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L040QWxwT2gyVzB1M1dXWlVqT3VKdXotaW1nLTFfMTc3MTI4MTI1MTAwMF9uYTFmbl9hR1ZoYkhSb1kyRnlaUzFvZFdJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HayNQKeFXFhoGp9zP48sVF~pgGvtcyQ-9hW7TYi9djAhzkssp8z3ADW7r6UkuryZP2ghVzKZ6R73YTYVxT9fJ9d2yjwh2ekce5X10Z8CkpUG~bt03K13wIOVuy9k~TFJyYRxYtxTVRuxo16DXZ4h8zuZnu6xvFj~ymT02ELveUSlkZPZTRXtu6Je5uQKyrhR-PwdNj2vKErPslbXdk8diACiUSd0qz6eLjQeGGPFHcVyKmDBzc7Ro8MnbDuFWrNOU9D7wOluRKxqAtXb~61RfUWrhsXtFNxSziIG~PQBJjt4q9sUO2Qp9wVnFKO9ZsUn75to3nyNJ77V6WvKcI3VGw__";

const WORKFORCE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/pEZr0olDJ8oz9sZKafHkB0-img-3_1771268397000_na1fn_d29ya2ZvcmNlLWhvdXNpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L3BFWnIwb2xESjhvejlzWkthZkhrQjAtaW1nLTNfMTc3MTI2ODM5NzAwMF9uYTFmbl9kMjl5YTJadmNtTmxMV2h2ZFhOcGJtYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KFA2CVeTi-DE4N6ljudNzfb21ZSLxQr67WQTOqfVkRSIHK705crk~Gix5b5bl~eFTA4qgI1Rsb2Aa-jKcH3LFoYkU1nF7LNM4Gqcq766mHhw~xt1IWFDi7oeou1xLQ10AxfmZMrIVRHb0CNLZf45r9KiyOpOknlhgzRTxOcC8Koun5RLQ0mKbVXcA6mA3o3mqTheKXPv1a3Z0Dw2Jjl5Bw5l93I87zDDjwTP-~ZUeyEn9H3buyE6vDp~fQsI2iJ5jSbslIHffkYo7f9LvosxFipbMzXbKXN4q~YG~FUIw0~1LvkJ~k6koGo2TkXPlP5bcAhPUy3NqZ~iOrWdnpFNvg__";

const tabIds = ["healthcare", "hub", "construction"] as const;

interface Tab {
  id: string;
  label: string;
  icon: typeof Stethoscope;
  image: string;
  headline: string;
  description: string;
  features: string[];
}

const tabs: Tab[] = [
  {
    id: "healthcare",
    label: "Healthcare Housing",
    icon: Stethoscope,
    image: HEALTHCARE_IMG,
    headline: "Housing That Supports Your Healthcare Workforce",
    description:
      "Fully furnished accommodations located near hospitals and medical facilities. We handle everything — from sourcing to furnishing to ongoing management — so your staff can focus on patient care.",
    features: [
      "Proximity to hospitals and clinics",
      "Turnkey, move-in-ready homes",
      "Short or long-term flexible leases",
      "Reduces staff burnout and turnover",
      "All-inclusive billing — one invoice",
      "24/7 maintenance and support",
    ],
  },
  {
    id: "hub",
    label: "Healthcare Housing Hubs",
    icon: Building2,
    image: HUB_IMG,
    headline: "Purpose-Built Healthcare Housing Hubs",
    description:
      "We partner with health authorities to develop and operate purpose-built residential communities near hospitals. These hubs are designed to strengthen staffing stability, enhance quality of life, and create vibrant community anchors that support healthcare professionals long-term.",
    features: [
      "~250 healthcare professionals housed annually",
      "Walkable to hospital — less than 1 km",
      "Community hub with wellness amenities",
      "Integrated childcare and family support",
      "Strengthens recruitment and retention",
      "Own-and-operate sustainability model",
    ],
  },
  {
    id: "construction",
    label: "Construction Workforce Housing",
    icon: HardHat,
    image: WORKFORCE_IMG,
    headline: "Housing for Construction Workforces",
    description:
      "Fully furnished, move-in ready accommodations for your crews — comfortable, consistent, and fully managed so your team stays focused on the build. Our expertise is in hospital construction, but we support any large-scale construction or infrastructure project.",
    features: [
      "Fully furnished, move-in ready housing",
      "Located near your project site",
      "Scales with your workforce size",
      "Fully furnished and managed end-to-end",
      "Early engagement advantage — plan housing before mobilization",
      "Cost-effective alternative to hotels and Airbnb",
    ],
  },
];

const hubBenefits = [
  {
    icon: Briefcase,
    title: "Administration",
    desc: "Removes housing logistics, payment management, and operational meetings from your team's plate. Less oversight needed from board, managers, and admin.",
  },
  {
    icon: DollarSign,
    title: "Finances",
    desc: "No more competing for housing during busy seasons or holidays. Fixed-term contracts replace fluctuating hotel rates, reducing internal management costs.",
  },
  {
    icon: Home,
    title: "Infrastructure",
    desc: "Purpose-built with community lounges, wellness spaces, co-working areas, and partner-operated early learning centers. Designed for long-term healthcare support.",
  },
  {
    icon: Heart,
    title: "Attraction & Retention",
    desc: "High-quality housing near work, community belonging, wellness supports, and family services that reduce burnout and build positive reputation among staff.",
  },
  {
    icon: TrendingUp,
    title: "Staffing Outcomes",
    desc: "Directly supports resolution of staffing shortages across all clinical areas by providing stable, high-quality living environments that improve commitment.",
  },
  {
    icon: ShieldCheck,
    title: "Community Impact",
    desc: "Strengthens downtown vibrancy, adds diverse housing supply, creates local jobs, and enhances community well-being and safety through active presence.",
  },
];

const trackRecord = [
  { value: "34+", label: "Units Across BC & Ontario" },
  { value: "6", label: "Hospitals Served" },
  { value: "4+", label: "Years of Operations" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Solutions() {
  const { activeTab, setActiveTab } = useSolution();
  const activeIndex = tabIds.indexOf(activeTab as typeof tabIds[number]);
  const tab = tabs[activeIndex >= 0 ? activeIndex : 0];
  const isHub = tab.id === "hub";

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
            Healthcare-First Housing Solutions
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-sm ${
                activeTab === t.id
                  ? "bg-navy text-white shadow-md"
                  : "bg-concrete text-navy/60 hover:bg-concrete-dark hover:text-navy"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative rounded-sm overflow-hidden shadow-xl">
            <img
              src={tab.image}
              alt={tab.label}
              className="w-full h-[300px] lg:h-[420px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-transparent" />
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-navy leading-tight mb-4">
              {tab.headline}
            </h3>
            <p className="text-navy/60 text-base leading-relaxed mb-8">
              {tab.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {tab.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                  <span className="text-sm font-medium text-navy/80">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Healthcare Housing Hub Benefits — only shown when Hub tab is active */}
        {isHub && (
          <div className="mb-16 animate-in fade-in duration-500">
            {/* Benefits Grid */}
            <h3 className="text-xl font-bold text-navy mb-2">
              Results Health Authorities Can Expect
            </h3>
            <p className="text-navy/50 text-sm mb-8 max-w-2xl">
              Our Healthcare Housing Hubs deliver measurable improvements across administration, finances, infrastructure, and workforce attraction and retention.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {hubBenefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white border border-border p-6 rounded-sm hover:shadow-md hover:border-teal/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                    <b.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">{b.title}</h4>
                  <p className="text-navy/50 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Track Record */}
            <div className="bg-navy rounded-sm p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Proven Track Record
                  </h4>
                  <p className="text-white/50 text-sm max-w-md">
                    Operating across British Columbia and Ontario with 100% client satisfaction and zero incident rate over four years.
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {trackRecord.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-teal font-black text-2xl lg:text-3xl">
                        {stat.value}
                      </p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study: Cowichan Bay Hospital */}
            <div className="bg-white border border-border rounded-sm overflow-hidden mb-12">
              {/* Case Study Header */}
              <div className="bg-navy px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-teal text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Case Study</p>
                  <h4 className="text-white text-lg lg:text-xl font-extrabold">Cowichan Bay Hospital</h4>
                  <p className="text-white/40 text-xs mt-1">5 Years in Construction &bull; 5 Years in Operation</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5 text-white/50 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Cowichan Bay, BC</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>10-Year Analysis</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50 text-xs">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>400 Construction + 240 Healthcare/yr</span>
                  </div>
                </div>
              </div>

              <div className="px-6 lg:px-8 py-6 lg:py-8">
                {/* Intro */}
                <p className="text-navy/70 text-sm leading-relaxed mb-8">
                  Cowichan Bay Hospital represents a typical large-scale healthcare infrastructure project: <strong className="text-navy">5 years of construction</strong> followed by <strong className="text-navy">ongoing hospital operations</strong> requiring continuous out-of-town staffing. Without a dedicated housing partner, the health authority pays contractors and agencies <strong className="text-navy">$200 per night</strong> for scattered hotel and Airbnb accommodations — absorbing massive costs, administrative overhead, and inconsistent quality across both phases.
                </p>

                {/* ===== PHASE 1: CONSTRUCTION ===== */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center">
                      <HardHat className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <h5 className="text-navy font-extrabold text-base">Phase 1: Construction</h5>
                      <p className="text-navy/40 text-xs">5-year hospital build — 400 out-of-town workers</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-5 mb-6">
                    {/* Without Provider */}
                    <div className="bg-red-50 border border-red-200/60 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <p className="text-red-800 text-xs font-bold uppercase tracking-wider">Without a Trusted Provider</p>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Nightly rate per worker</span>
                          <span className="text-navy font-bold">$200</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Workers housed</span>
                          <span className="text-navy font-bold">400</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Duration</span>
                          <span className="text-navy font-bold">5 years (1,825 nights)</span>
                        </div>
                        <div className="border-t border-red-200 pt-3 mt-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-navy/60 text-sm">Annual cost</span>
                            <span className="text-navy font-bold">$29.2M</span>
                          </div>
                          <div className="flex justify-between items-baseline mt-2">
                            <span className="text-navy font-semibold">Total 5-year cost</span>
                            <span className="text-red-600 font-black text-xl">$146.0M</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-navy/40 text-[11px] leading-relaxed">
                        Plus: admin overhead, multiple invoices, inconsistent quality, scattered locations
                      </div>
                    </div>

                    {/* With ERS */}
                    <div className="bg-teal/5 border border-teal/20 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-teal rounded-full" />
                        <p className="text-teal text-xs font-bold uppercase tracking-wider">With Elias Range Stays</p>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Nightly rate per worker</span>
                          <span className="text-navy font-bold">$105</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Workers housed</span>
                          <span className="text-navy font-bold">400</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Duration</span>
                          <span className="text-navy font-bold">5 years (1,825 nights)</span>
                        </div>
                        <div className="border-t border-teal/20 pt-3 mt-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-navy/60 text-sm">Annual cost</span>
                            <span className="text-navy font-bold">$15.3M</span>
                          </div>
                          <div className="flex justify-between items-baseline mt-2">
                            <span className="text-navy font-semibold">Total 5-year cost</span>
                            <span className="text-teal font-black text-xl">$76.7M</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-navy/40 text-[11px] leading-relaxed">
                        Includes: single invoice, dedicated support, quality-assured housing, proximity to site
                      </div>
                    </div>
                  </div>

                  {/* Construction Savings Summary */}
                  <div className="bg-navy rounded-sm p-5 lg:p-6">
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-center">Construction Phase — 5-Year Savings</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">$69.4M</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Total Savings</p>
                      </div>
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">47.5%</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Cost Reduction</p>
                      </div>
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">$13.9M</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Saved Per Year</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beyond Cost Savings */}
                <div className="mb-10 border-t border-border pt-8">
                  <h5 className="text-navy font-bold text-sm mb-3">Beyond Cost Savings</h5>
                  <p className="text-navy/60 text-sm leading-relaxed mb-4">
                    A trusted housing partner does not just reduce costs — it solves the deeper challenges health authorities face with staff attraction and retention. By providing quality, community-oriented housing near the hospital, Elias Range Stays helps Cowichan Bay Hospital:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Attract out-of-town healthcare professionals with guaranteed quality housing",
                      "Retain staff longer by reducing burnout and improving quality of life",
                      "Support construction crews during facility expansion projects",
                      "Eliminate administrative burden of managing scattered accommodations",
                      "Provide stable, predictable housing costs with single-invoice billing",
                      "Build community among healthcare workers through shared living spaces",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 py-1">
                        <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0" />
                        <span className="text-navy/70 text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ===== PHASE 2: OPERATIONS ===== */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center">
                      <Stethoscope className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <h5 className="text-navy font-extrabold text-base">Phase 2: Hospital in Operation</h5>
                      <p className="text-navy/40 text-xs">5-year ongoing operations — 20 traveling healthcare staff per month (240/year)</p>
                    </div>
                  </div>

                  <p className="text-navy/70 text-sm leading-relaxed mb-6">
                    Once construction is complete, the hospital enters ongoing operations. Each month, approximately <strong className="text-navy">20 traveling healthcare workers</strong> — locums, contract nurses, specialists — require temporary housing. Without a partner, the health authority continues paying <strong className="text-navy">$200 per night</strong> per worker through scattered bookings.
                  </p>

                  <div className="grid lg:grid-cols-2 gap-5 mb-6">
                    {/* Without Provider */}
                    <div className="bg-red-50 border border-red-200/60 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <p className="text-red-800 text-xs font-bold uppercase tracking-wider">Without a Trusted Provider</p>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Nightly rate per worker</span>
                          <span className="text-navy font-bold">$200</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Staff per month</span>
                          <span className="text-navy font-bold">20 (240/year)</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Worker-nights per year</span>
                          <span className="text-navy font-bold">7,200</span>
                        </div>
                        <div className="border-t border-red-200 pt-3 mt-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-navy/60 text-sm">Annual cost</span>
                            <span className="text-navy font-bold">$1.44M</span>
                          </div>
                          <div className="flex justify-between items-baseline mt-2">
                            <span className="text-navy font-semibold">Total 5-year cost</span>
                            <span className="text-red-600 font-black text-xl">$7.2M</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-navy/40 text-[11px] leading-relaxed">
                        Plus: booking management, quality inconsistency, no staff retention support
                      </div>
                    </div>

                    {/* With ERS */}
                    <div className="bg-teal/5 border border-teal/20 rounded-sm p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-teal rounded-full" />
                        <p className="text-teal text-xs font-bold uppercase tracking-wider">With Elias Range Stays</p>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Nightly rate per worker</span>
                          <span className="text-navy font-bold">$105</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Staff per month</span>
                          <span className="text-navy font-bold">20 (240/year)</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-navy/60 text-sm">Worker-nights per year</span>
                          <span className="text-navy font-bold">7,200</span>
                        </div>
                        <div className="border-t border-teal/20 pt-3 mt-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-navy/60 text-sm">Annual cost</span>
                            <span className="text-navy font-bold">$756K</span>
                          </div>
                          <div className="flex justify-between items-baseline mt-2">
                            <span className="text-navy font-semibold">Total 5-year cost</span>
                            <span className="text-teal font-black text-xl">$3.8M</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-navy/40 text-[11px] leading-relaxed">
                        Includes: dedicated housing hub, retention-focused amenities, community living, single invoice
                      </div>
                    </div>
                  </div>

                  {/* Operations Savings Summary */}
                  <div className="bg-navy rounded-sm p-5 lg:p-6 mb-8">
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-center">Operations Phase — 5-Year Savings</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">$3.4M</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Total Savings</p>
                      </div>
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">47.5%</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Cost Reduction</p>
                      </div>
                      <div>
                        <p className="text-teal font-black text-2xl lg:text-3xl">$684K</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1 font-medium">Saved Per Year</p>
                      </div>
                    </div>
                  </div>

                  {/* ===== COMBINED TOTAL ===== */}
                  <div className="bg-gradient-to-r from-navy to-navy-dark rounded-sm p-6 lg:p-8 border border-teal/20">
                    <p className="text-teal text-[10px] uppercase tracking-[0.25em] font-bold mb-1 text-center">Combined 10-Year Impact</p>
                    <p className="text-white/40 text-xs text-center mb-5">5 years construction + 5 years hospital operations</p>
                    <div className="grid sm:grid-cols-4 gap-5 text-center">
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1 font-medium">Without Provider</p>
                        <p className="text-red-400 font-black text-xl lg:text-2xl">$153.2M</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1 font-medium">With Elias Range</p>
                        <p className="text-teal font-black text-xl lg:text-2xl">$80.4M</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1 font-medium">Total Savings</p>
                        <p className="text-teal font-black text-xl lg:text-2xl">$72.8M</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1 font-medium">Cost Reduction</p>
                        <p className="text-teal font-black text-xl lg:text-2xl">47.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hub CTA */}
            <div className="mt-8 text-center">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 group"
              >
                Partner With Us on a Healthcare Housing Hub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* Project Types — Healthcare & Construction focused */}
        <div>
          <h3 className="text-xl font-bold text-navy mb-6">
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Stethoscope, label: "Healthcare Staffing", desc: "Traveling nurses, physicians, locums, and allied health professionals" },
              { icon: Building2, label: "Healthcare Housing Hubs", desc: "Purpose-built developments near hospitals for long-term staffing support" },
              { icon: HardHat, label: "Construction & Infrastructure", desc: "Hospital builds, large-scale construction, and infrastructure projects" },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white border border-border p-5 rounded-sm hover:shadow-md hover:border-teal/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-navy/5 rounded-sm flex items-center justify-center mb-3 group-hover:bg-teal/10 transition-colors">
                  <p.icon className="w-5 h-5 text-navy group-hover:text-teal transition-colors" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">{p.label}</h4>
                <p className="text-navy/50 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
