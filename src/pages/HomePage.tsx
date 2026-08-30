import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ArchitectureLayersSection from "../components/landing/ArchitectureLayersSection";
import IntentVibeSection from "../components/landing/IntentVibeSection";
import KitchenDataEngineSection from "../components/landing/KitchenDataEngineSection";
import EdgeAiSection from "../components/landing/EdgeAiSection";
import EnterpriseSolutionsSection from "../components/landing/EnterpriseSolutionsSection";
import WhyI2cSection from "../components/landing/WhyI2cSection";
import CallToActionSection from "../components/landing/CallToActionSection";

export default function HomePage() {
  return (
    <div className="home-page-wrap">
      {/* 1. Hero with Interactive 7-Layer Topology & ULSX Playground */}
      <HeroSection />

      {/* 2. Interactive 7-Layer Machine-Native Stack Explorer */}
      <ArchitectureLayersSection />

      {/* 3. The Vibe & Intent Paradigm (Draft -> Plan -> Lock) */}
      <IntentVibeSection />

      {/* 4. Kitchen Generative Data Middleware (Brigade de Cuisine) */}
      <KitchenDataEngineSection />

      {/* 5. MinhAI & Edge AI Local Reasoning */}
      <EdgeAiSection />

      {/* 6. Enterprise Flagship Solutions (Top 10 Vertical Platforms) */}
      <EnterpriseSolutionsSection />

      {/* 7. Why i2c Architectural Comparison */}
      <WhyI2cSection />

      {/* 8. Final Call to Action */}
      <CallToActionSection />
    </div>
  );
}
