/*
 * Design: Industrial Precision — Neo-Bauhaus
 * Contact: Split layout — form left, contact info right
 * Hub tab shows "Request a Consultation" form with different fields
 * Navy background, teal accents
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useSolution } from "@/contexts/SolutionContext";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663354289013/ah2FkRHNVHaQhq7Wf3LgmE/logo-hires_7cd6e009.png";

export default function Contact() {
  const { activeTab } = useSolution();
  const isHub = activeTab === "hub";

  const [submitted, setSubmitted] = useState(false);

  /* Standard quote form state */
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    duration: "",
    location: "",
    message: "",
  });

  /* Hub consultation form state */
  const [consultData, setConsultData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    message: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Quote request submitted! We'll be in touch within 24 hours.");
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Consultation request submitted! Our team will reach out to schedule your session.");
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handleConsultChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConsultData({ ...consultData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-white/[0.06] border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal/50 transition-colors";
  const labelClass = "text-white/60 text-xs font-semibold uppercase tracking-wider block mb-1.5";

  const successMessage = isHub ? (
    <div className="bg-teal/10 border border-teal/20 rounded-sm p-8 text-center">
      <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Consultation Request Received</h3>
      <p className="text-white/60 text-sm">
        Thank you for your interest in a Healthcare Housing Hub partnership.
        Our team will review your request and reach out to schedule your
        2-hour consulting session.
      </p>
      <Button
        onClick={() => setSubmitted(false)}
        variant="outline"
        className="mt-6 border-white/20 text-white hover:bg-white/10"
      >
        Submit Another Request
      </Button>
    </div>
  ) : (
    <div className="bg-teal/10 border border-teal/20 rounded-sm p-8 text-center">
      <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Quote Request Received</h3>
      <p className="text-white/60 text-sm">
        Thank you for your interest. Our team will review your requirements
        and get back to you within 24 hours.
      </p>
      <Button
        onClick={() => setSubmitted(false)}
        variant="outline"
        className="mt-6 border-white/20 text-white hover:bg-white/10"
      >
        Submit Another Request
      </Button>
    </div>
  );

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

            {submitted ? successMessage : (
              isHub ? (
                /* Hub Consultation Form */
                <form onSubmit={handleConsultSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={consultData.name}
                        onChange={handleConsultChange}
                        className={inputClass}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={consultData.email}
                        onChange={handleConsultChange}
                        className={inputClass}
                        placeholder="john@healthauthority.ca"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={consultData.phone}
                        onChange={handleConsultChange}
                        className={inputClass}
                        placeholder="(250) 000-0000"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={consultData.organization}
                        onChange={handleConsultChange}
                        className={inputClass}
                        placeholder="Health Authority or Organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Position / Title</label>
                    <input
                      type="text"
                      name="position"
                      value={consultData.position}
                      onChange={handleConsultChange}
                      className={inputClass}
                      placeholder="e.g. Director of Capital Planning, VP of Operations"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={consultData.message}
                      onChange={handleConsultChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your housing challenges, staffing needs, or any questions about the Healthcare Housing Hub model..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 w-full sm:w-auto group"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Request Consultation
                  </Button>
                </form>
              ) : (
                /* Standard Quote Form */
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={quoteData.name}
                        onChange={handleQuoteChange}
                        className={inputClass}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        className={inputClass}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={quoteData.phone}
                        onChange={handleQuoteChange}
                        className={inputClass}
                        placeholder="(250) 000-0000"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={quoteData.company}
                        onChange={handleQuoteChange}
                        className={inputClass}
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Team Size</label>
                      <select
                        name="teamSize"
                        value={quoteData.teamSize}
                        onChange={handleQuoteChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" className="bg-navy">Select team size</option>
                        <option value="1-5" className="bg-navy">1–5 people</option>
                        <option value="6-15" className="bg-navy">6–15 people</option>
                        <option value="16-30" className="bg-navy">16–30 people</option>
                        <option value="31-50" className="bg-navy">31–50 people</option>
                        <option value="50+" className="bg-navy">50+ people</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Duration</label>
                      <select
                        name="duration"
                        value={quoteData.duration}
                        onChange={handleQuoteChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" className="bg-navy">Select duration</option>
                        <option value="1-3months" className="bg-navy">1–3 months</option>
                        <option value="3-6months" className="bg-navy">3–6 months</option>
                        <option value="6-12months" className="bg-navy">6–12 months</option>
                        <option value="12+months" className="bg-navy">12+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Project Location</label>
                    <input
                      type="text"
                      name="location"
                      value={quoteData.location}
                      onChange={handleQuoteChange}
                      className={inputClass}
                      placeholder="City, Province or Region"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={quoteData.message}
                      onChange={handleQuoteChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project requirements, special needs, or any questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-teal hover:bg-teal-light text-white font-bold text-sm px-8 py-6 w-full sm:w-auto group"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Quote Request
                  </Button>
                </form>
              )
            )}
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
