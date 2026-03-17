/*
 * Design: Industrial Precision — Neo-Bauhaus
 * How It Works: 4-step horizontal process with numbered steps
 * Shows different process for Healthcare Housing Hub vs standard
 */
import { ClipboardList, Search, Key, Settings, MessageSquare, FileText, Handshake, Building2 } from "lucide-react";
import { useSolution } from "@/contexts/SolutionContext";

const standardSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Define Your Needs",
    description:
      "Tell us about your project — location, team size, duration, and any specific requirements. The earlier you engage us, the better housing options we can secure in the region.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Secure Your Housing",
    description:
      "Our team identifies and secures the best housing options near your project site. We negotiate bulk rates and fully furnish each unit to our premium standards — move-in ready for your crew.",
  },
  {
    number: "03",
    icon: Key,
    title: "Ready to Move In",
    description:
      "Your crew arrives to fully equipped, move-in-ready accommodations. Full kitchens, premium bedding, work desks, living areas — everything they need to rest and recharge.",
  },
  {
    number: "04",
    icon: Settings,
    title: "We Manage Everything",
    description:
      "Ongoing maintenance, cleaning, utilities, and 24/7 support. One invoice, zero hassle. You focus on the build, we handle the rest for the entire duration of your project.",
  },
];

const hubSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Define Your Needs",
    description:
      "We begin with a 2-hour consulting package to deeply understand your organization's housing challenges, staffing goals, and operational pain points. We identify where administration, cost, and logistics are creating barriers.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Compile Strategy",
    description:
      "We gather all findings and deliver a comprehensive strategy — outlining immediate, short-term, and long-term solutions that align with your goals. Clear outcomes, measurable targets, and actionable steps to reduce operational burden.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Proposal & Agreement",
    description:
      "We move to a formal RFP or tender for consulting, presenting a tailored proposal that outlines scope, deliverables, and timelines. We work collaboratively to reach a partnership agreement that serves your organization at scale.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Partnership at Scale",
    description:
      "With the agreement in place, we develop and operate your Healthcare Housing Hub — removing administration, reducing costs, and providing end-to-end housing infrastructure so your organization can focus on patient care.",
  },
];

export default function HowItWorks() {
  const { activeTab } = useSolution();
  const isHub = activeTab === "hub";
  const steps = isHub ? hubSteps : standardSteps;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="w-12 h-1 bg-teal mb-4 mx-auto" />
          <p className="text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            {isHub ? "Our Partnership Process" : "Our Process"}
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-4">
            {isHub ? "How We Partner With Health Authorities" : "How It Works"}
          </h2>
          <p className="text-navy/50 text-base leading-relaxed">
            {isHub
              ? "A structured, consultative approach designed to understand your challenges, build a strategy, and deliver a long-term housing partnership that removes operational burden from your organization."
              : "From initial consultation to ongoing management, our streamlined process gets your construction workforce housed quickly and efficiently. Engage us early for the best options."}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-navy/10" />

          {steps.map((step, i) => (
            <div key={`${activeTab}-${i}`} className="relative group">
              {/* Number badge */}
              <div className="relative z-10 w-14 h-14 bg-navy text-white flex items-center justify-center font-black text-lg rounded-sm mb-5 group-hover:bg-teal transition-colors duration-300 mx-auto lg:mx-0">
                {step.number}
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                  <step.icon className="w-4 h-4 text-teal" />
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                </div>
                <p className="text-navy/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
