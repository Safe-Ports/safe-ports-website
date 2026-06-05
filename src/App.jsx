import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import EcosystemSection from "./components/EcosystemSection.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";
import DashboardShowcase from "./components/DashboardShowcase.jsx";
import KpiSection from "./components/KpiSection.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-graphite-950 antialiased">
      <Navbar />
      <main>
        <Hero />
        <EcosystemSection />
        <BenefitsSection />
        <DashboardShowcase />
        <KpiSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
