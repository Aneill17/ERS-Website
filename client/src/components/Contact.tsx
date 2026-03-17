/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Contact: Split layout — form left, contact info right
 * Hub tab shows "Request a Consultation" form with different fields
 * Navy background, teal accents
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSolution } from "@/contexts/SolutionContext";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png";

export default function Contact() {
  const { activeTab } = useSolution();
  const isHub = activeTab === "hub";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px),
                          repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)`
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form — 3 columns */}
          <div className="lg:col-span-3">
            <div className="w-12 h-1 bg-teal mb-4" />
            <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              {isHub ? "Partner With Us" : "Get Started"}
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              {isHub ? "Request a Consultation" : "Request a Quote"}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              {isHub
                ? "Tell us about your health authority's housing challenges. We'll schedule a 2-hour consulting session to understand your needs and develop a tailored strategy."
                : "Tell us about your housing needs and we will put together a tailored proposal within 24 hours."
              }
            </p>
            <p className="text-teal/60 text-xs font-semibold italic uppercase tracking-[0.2em] mb-8">
              Healthy Living, Stronger Communities
            </p>

            {/* ContractFlow embedded quote form — styled to match this section */}
            <iframe
              src="https://contractflow-omega.vercel.app/request?embed=1"
              width="100%"
              height="980"
              frameBorder="0"
              style={{ display: 'block', border: 'none', borderRadius: '4px' }}
              title="Request Workforce Housing — Elias Range Stays"
            />
          </div>

          {/* Contact Info — 2 columns */}
          <div className="lg:col-span-2 lg:pl-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:2507198085" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <Phone className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-white font-semibold text-sm group-hover:text-teal transition-colors">(250) 719-8085</p>
                    </div>
                  </a>

                  <a href="mailto:austin@eliasrangestays.ca" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <Mail className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-white font-semibold text-sm group-hover:text-teal transition-colors">austin@eliasrangestays.ca</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Service Area</p>
                      <p className="text-white font-semibold text-sm">Nationwide — Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Response Time</p>
                      <p className="text-white font-semibold text-sm">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6">
                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">
                  By the Numbers
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/[0.06] pb-3">
                    <span className="text-white/50 text-sm">Units Managed</span>
                    <span className="text-teal font-extrabold text-lg">34+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.06] pb-3">
                    <span className="text-white/50 text-sm">Cost Savings vs Hotels</span>
                    <span className="text-teal font-extrabold text-lg">40%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/[0.06] pb-3">
                    <span className="text-white/50 text-sm">Hospitals Served</span>
                    <span className="text-teal font-extrabold text-lg">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">Support Availability</span>
                    <span className="text-teal font-extrabold text-lg">24/7</span>
                  </div>
                </div>
              </div>

              {/* Logo badge */}
              <div className="bg-white rounded-lg px-5 py-4 shadow-md inline-flex items-center">
                <img src={LOGO_URL} alt="Elias Range Stays" className="h-40 w-auto" />
              </div>

              {/* Testimonial */}
              <div className="bg-teal/10 border border-teal/20 rounded-sm p-6">
                <p className="text-white/70 text-sm italic leading-relaxed mb-4">
                  "Elias Range Stays provided us with comfortable and convenient housing
                  for our staff. Their support has made a noticeable difference in staff
                  morale and retention."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal/30 rounded-full flex items-center justify-center">
                    <span className="text-teal font-bold text-xs">SL</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Sarah L.</p>
                    <p className="text-white/40 text-xs">Healthcare Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
