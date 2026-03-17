import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Occupancy from "@/components/Occupancy";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SolutionProvider } from "@/contexts/SolutionContext";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <SolutionProvider>
          <Solutions />
          <WhyUs />
          <HowItWorks />
          <Occupancy />
          <Pricing />
          <Contact />
        </SolutionProvider>
      </main>
      <Footer />
    </div>
  );
}
