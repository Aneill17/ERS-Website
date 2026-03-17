/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Occupancy: Shows different content based on active Solution tab
 * Healthcare tab: Staffing-type categories (Locum, Contract, Residencies, Placements, Long-Term, Agency, Contractors)
 * Hub tab: Same healthcare staffing types (no executive)
 * Construction tab: Single, Double, Triple + Executive Package
 */
import { Bed, Bath, UtensilsCrossed, Laptop, Sofa, TreePine, Star, Crown, Briefcase, Clock, CalendarDays, GraduationCap, Users, Home, Heart, Stethoscope, UserCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSolution } from "@/contexts/SolutionContext";

const KITCHEN_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/pEZr0olDJ8oz9sZKafHkB0-img-4_1771268394000_na1fn_aW50ZXJpb3Ita2l0Y2hlbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L3BFWnIwb2xESjhvejlzWkthZkhrQjAtaW1nLTRfMTc3MTI2ODM5NDAwMF9uYTFmbl9hVzUwWlhKcGIzSXRhMmwwWTJobGJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ApeLD8wFvcAei7XCDx5IM7qWx8tVZUB4NuDMqWCsaHTSWgO6ESaHC3OMQlFFGRMx9TMzPgLGRbBiLChI9~E4nyncglspZ2c34V91h75iFk2LGv3UOJZMeCWuvq2ug-oqHPdn7MF11GE318RbkE3Ah7ScAIujQM2DdCk0SaKELWVdqtQz6~qcs~vWdp2Pcq5HlQ2yGg0LygaDCuVVQMy0pWLfNrmO421G6jD7fiVOK4MyEBnlkNwuHn2iU3gmOgjANv6NFMa~SY2k0vfEk3xxP2K2K1gELPGvZAUd~0BZUT7kC-AHHUgegwvLXK4SRys7zHhAe~MyX4jgWfsBTZyFUw__";

const EXEC_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/7EZpkDMJeys7BwANqUR9Jq/sandbox/pEZr0olDJ8oz9sZKafHkB0-img-5_1771268395000_na1fn_ZXhlY3V0aXZlLXN1aXRl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN0VacGtETUpleXM3QndBTnFVUjlKcS9zYW5kYm94L3BFWnIwb2xESjhvejlzWkthZkhrQjAtaW1nLTVfMTc3MTI2ODM5NTAwMF9uYTFmbl9aWGhsWTNWMGFYWmxMWE4xYVhSbC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VqIaVQIGYEqmoagPGT5gqDbjN0KxgCMUH9K~Zg57WeVufBKoHr8TDrAk6BduuWEAkqz76E1Zbjl743fnfTq58IAh3O5NfVY2sweoXeAZuarCOg3PImdas1OJCqXi2yi8aD1cfb0pkOfUMVV6egi5tvuAJ7pqfu83LkgscASvi2rlEmBZbBXCw-SF85ozDtCyX17gdGbohpAYfYUbWW7JBjm1B2A~Gf5nYU~beYUg8tUJrKNhDnQWzhA0TzOoNeqBZyg~FUMorYYyQAGpe~3lhSFy7-JHTs8LWznB3KarqXwa4FsaajRUVu26mSwWZAEwgrEdqFPfBsnpkYzouhKE3g__";

/* ── Construction occupancy packages ── */
const constructionPackages = [
  {
    name: "Single Occupancy",
    tag: "Most Popular",
    tagColor: "bg-teal",
    features: [
      { icon: Bed, text: "Private bedroom" },
      { icon: Bath, text: "Full bathroom" },
      { icon: UtensilsCrossed, text: "Full kitchen" },
      { icon: Laptop, text: "Dedicated work desk" },
      { icon: Star, text: "Premium bedding" },
      { icon: Sofa, text: "Living & dining area" },
    ],
    description: "A complete apartment or suite for one crew member. Full kitchen, living, and dining amenities — a real home, not a hotel room.",
  },
  {
    name: "Double Occupancy",
    tag: null,
    tagColor: "",
    features: [
      { icon: Bed, text: "Two private bedrooms" },
      { icon: Bath, text: "Option for double bathroom" },
      { icon: UtensilsCrossed, text: "Full kitchen" },
      { icon: Laptop, text: "Work desks in each room" },
      { icon: Star, text: "Premium bedding" },
      { icon: Sofa, text: "Option for double living rooms" },
    ],
    description: "Shared housing with private bedrooms. Options for separate bathrooms and living spaces — ideal for crew members who want their own space.",
  },
  {
    name: "Triple Occupancy",
    tag: "Best Value",
    tagColor: "bg-navy",
    features: [
      { icon: Bed, text: "Three bedrooms" },
      { icon: Bath, text: "Option for 2-3 bathrooms" },
      { icon: Sofa, text: "Two living rooms" },
      { icon: UtensilsCrossed, text: "Full kitchen" },
      { icon: TreePine, text: "Outdoor space" },
      { icon: Star, text: "Premium house" },
    ],
    description: "Our most cost-effective option. Full house with three bedrooms, multiple bathrooms, two living rooms, and outdoor space — perfect for larger crews.",
  },
];

/* ── Healthcare staffing categories (for Healthcare Housing + Hub tabs) ── */
const healthcareCategories = [
  {
    name: "Locum Positions",
    tag: "Flexible Terms",
    tagColor: "bg-teal",
    icon: Stethoscope,
    description: "Tailored for locum physicians, specialists, and short-rotation professionals. Private accommodations with premium amenities and the flexibility to accommodate varying schedules and last-minute placements.",
    features: [
      { icon: Bed, text: "Private single occupancy" },
      { icon: Bath, text: "Full private bathroom" },
      { icon: UtensilsCrossed, text: "Full kitchen & living area" },
      { icon: Laptop, text: "Executive work desk" },
      { icon: Star, text: "Premium furnishings" },
      { icon: CalendarDays, text: "Flexible start dates & durations" },
    ],
  },
  {
    name: "Contract Staff",
    tag: "4 Weeks – 6 Months",
    tagColor: "bg-navy",
    icon: Briefcase,
    description: "Designed for traveling nurses, allied health professionals, and contract staff on assignments. Fully furnished single or double occupancy with everything needed to settle in immediately.",
    features: [
      { icon: Bed, text: "Single or double occupancy" },
      { icon: UtensilsCrossed, text: "Full kitchen & dining" },
      { icon: Laptop, text: "Dedicated work space" },
      { icon: Star, text: "Premium bedding & linens" },
      { icon: Clock, text: "Flexible 4-week to 6-month terms" },
      { icon: Home, text: "Move-in ready on arrival" },
    ],
  },
  {
    name: "Residencies",
    tag: "Training Programs",
    tagColor: "bg-teal",
    icon: GraduationCap,
    description: "Purpose-built for medical residents and trainees who need affordable, comfortable housing close to the hospital during their residency programs. Shared accommodations that foster community among peers.",
    features: [
      { icon: Bed, text: "Single or shared bedrooms" },
      { icon: Users, text: "Community-oriented living" },
      { icon: UtensilsCrossed, text: "Shared kitchen & dining" },
      { icon: Laptop, text: "Study & work areas" },
      { icon: Star, text: "Comfortable furnishings" },
      { icon: Home, text: "Walking distance to hospital" },
    ],
  },
  {
    name: "Placements",
    tag: "Clinical Rotations",
    tagColor: "bg-navy",
    icon: UserCheck,
    description: "Housing for students, new graduates, and professionals on clinical placements or rotations. Affordable shared accommodations with the essentials for focused learning and patient care.",
    features: [
      { icon: Bed, text: "Single or shared rooms" },
      { icon: UtensilsCrossed, text: "Full kitchen access" },
      { icon: Laptop, text: "Quiet study areas" },
      { icon: Users, text: "Peer community environment" },
      { icon: Clock, text: "Rotation-length terms" },
      { icon: Home, text: "Close to clinical sites" },
    ],
  },
  {
    name: "Long-Term Positions",
    tag: "6+ Months",
    tagColor: "bg-teal",
    icon: CalendarDays,
    description: "For healthcare professionals in permanent or long-term roles who need stable, comfortable housing near their workplace. Full home amenities for extended stays with the feel of a real home.",
    features: [
      { icon: Bed, text: "Single or double occupancy" },
      { icon: Bath, text: "Full private bathroom" },
      { icon: Sofa, text: "Full living & dining spaces" },
      { icon: UtensilsCrossed, text: "Complete kitchen" },
      { icon: TreePine, text: "Outdoor space options" },
      { icon: Heart, text: "Community & wellness access" },
    ],
  },
  {
    name: "Agency Staff",
    tag: "On Demand",
    tagColor: "bg-navy",
    icon: Users,
    description: "Ready-to-go accommodations for agency nurses, therapists, and support staff deployed on short notice. We coordinate with staffing agencies to ensure housing is ready before your team arrives.",
    features: [
      { icon: Bed, text: "Single or double occupancy" },
      { icon: Clock, text: "Rapid deployment — 48hr ready" },
      { icon: UtensilsCrossed, text: "Full kitchen & essentials" },
      { icon: Star, text: "Premium bedding included" },
      { icon: Home, text: "Move-in ready on arrival" },
      { icon: CalendarDays, text: "Flexible week-to-week terms" },
    ],
  },
  {
    name: "Healthcare Contractors",
    tag: "Project-Based",
    tagColor: "bg-teal",
    icon: Building2,
    description: "Housing for healthcare IT specialists, equipment installers, renovation crews, and other contractors working on hospital projects. Comfortable accommodations near the worksite for the duration of the project.",
    features: [
      { icon: Bed, text: "Single, double, or triple occupancy" },
      { icon: Bath, text: "Multiple bathroom options" },
      { icon: UtensilsCrossed, text: "Full kitchen & dining" },
      { icon: Laptop, text: "Work desk in each room" },
      { icon: TreePine, text: "Outdoor space available" },
      { icon: Clock, text: "Project-length flexible terms" },
    ],
  },
];

export default function Occupancy() {
  const { activeTab } = useSolution();
  const isHealthcare = activeTab === "healthcare" || activeTab === "hub";

  return (
    <section id="occupancy" className="py-20 lg:py-28 bg-concrete">
      <div className="container">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="w-12 h-1 bg-teal mb-4" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            {isHealthcare ? "Housing for Every Role" : "Flexible Occupancy"}
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            {isHealthcare
              ? "Your Position Is Supported Here"
              : "Flexible Occupancy for Your Workforce"}
          </h2>
          <p className="text-navy/50 text-base leading-relaxed">
            {isHealthcare
              ? "Whether you're a locum physician, a traveling nurse on contract, a medical resident, or an agency professional — we have purpose-built accommodations designed for your specific role and needs."
              : "From individual professionals to large crews, choose the occupancy that fits your team. Every unit is fully furnished, fully managed, and ready for move-in — so your crew can focus on the build."}
          </p>
        </div>

        {isHealthcare ? (
          /* ── Healthcare staffing categories (7 cards, no executive) ── */
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
              {healthcareCategories.slice(0, 6).map((cat, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-teal/20 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="p-6 pb-4 border-b border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                          <cat.icon className="w-5 h-5 text-teal" />
                        </div>
                        <h3 className="text-lg font-bold text-navy">{cat.name}</h3>
                      </div>
                      <span className={`${cat.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm`}>
                        {cat.tag}
                      </span>
                    </div>
                    <p className="text-navy/50 text-sm leading-relaxed">{cat.description}</p>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {cat.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <f.icon className="w-4 h-4 text-teal shrink-0" />
                          <span className="text-sm font-medium text-navy/70">{f.text}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                      variant="outline"
                      className="w-full mt-6 border-navy/20 text-navy hover:bg-navy hover:text-white font-semibold text-sm transition-all"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {/* 7th card — full width */}
            {healthcareCategories.slice(6).map((cat, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-teal/20 transition-all duration-300 group mb-10"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                          <cat.icon className="w-5 h-5 text-teal" />
                        </div>
                        <h3 className="text-lg font-bold text-navy">{cat.name}</h3>
                      </div>
                      <span className={`${cat.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm`}>
                        {cat.tag}
                      </span>
                    </div>
                    <p className="text-navy/50 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cat.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <f.icon className="w-4 h-4 text-teal shrink-0" />
                          <span className="text-sm font-medium text-navy/70">{f.text}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                      variant="outline"
                      className="w-full mt-6 border-navy/20 text-navy hover:bg-navy hover:text-white font-semibold text-sm transition-all"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* ── Construction Packages (3 cards) ── */}
            <div className="grid lg:grid-cols-3 gap-5 mb-10">
              {constructionPackages.map((pkg, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-lg hover:border-teal/20 transition-all duration-300 group"
                >
                  <div className="p-6 pb-4 border-b border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-navy">{pkg.name}</h3>
                      {pkg.tag && (
                        <span className={`${pkg.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm`}>
                          {pkg.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-navy/50 text-sm leading-relaxed">{pkg.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {pkg.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <f.icon className="w-4 h-4 text-teal shrink-0" />
                          <span className="text-sm font-medium text-navy/70">{f.text}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                      variant="outline"
                      className="w-full mt-6 border-navy/20 text-navy hover:bg-navy hover:text-white font-semibold text-sm transition-all"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Package — Featured (only for construction tab) */}
            <div className="relative bg-navy rounded-sm overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-[250px] lg:h-auto">
                  <img
                    src={EXEC_IMG}
                    alt="Executive luxury suite"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/60 lg:bg-gradient-to-l" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="w-5 h-5 text-teal" />
                    <span className="text-teal text-xs font-bold uppercase tracking-[0.2em]">
                      Premium Tier
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                    Executive Package
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    For project managers, executives, and senior staff who require elevated
                    accommodations. Every detail is curated for comfort and productivity.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      "Luxury furnishings",
                      "Premium appliances",
                      "Concierge service",
                      "Priority support",
                      "Designer interiors",
                      "Executive work space",
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-teal" />
                        <span className="text-white/80 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-7 py-5 w-fit"
                  >
                    Inquire About Executive Package
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Kitchen Image Banner */}
        <div className="mt-10 relative rounded-sm overflow-hidden h-[200px] lg:h-[280px]">
          <img
            src={KITCHEN_IMG}
            alt="Fully equipped modern kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/30 flex items-center">
            <div className="container">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
                Every Unit Includes
              </p>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
                Full Kitchen. Premium Bedding.
                <br />
                Everything You Need to Live.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
