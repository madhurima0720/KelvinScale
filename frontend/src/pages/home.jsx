import React from 'react';
import Hero from '../components/Hero';
import QualityHighlights from '../components/QualityHighlights';
import FlavorGallery from '../components/FlavorGallery';
import ScoopBuilder from '../components/ScoopBuilder';
import Testimonials from '../components/Testimonials';
import FloatingCompanion from '../components/FloatingCompanion';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero with Anti-Gravity Mascot & Temperature Meter */}
      <Hero />

      {/* Quality Highlights & The Science of Absolute Zero */}
      <QualityHighlights />

      {/* Artisanal Flavor Showcase */}
      <FlavorGallery />

      {/* Custom Sub-Zero Scoop Crafter */}
      <ScoopBuilder />

      {/* Purist Testimonials */}
      <Testimonials />

      {/* Floating Mascot Guide (Active as user navigates flavors) */}
      <FloatingCompanion />
    </div>
  );
}