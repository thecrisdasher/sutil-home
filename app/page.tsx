import {HeroSection } from "@/components/layout/hero-section";
import { ServicesPreview } from "@/components/layout/services-preview";
import { AboutPreview } from "@/components/layout/about-preview";
import { TestimonialsPreview } from "@/components/layout/testimonials-preview";
import { CTASection } from "@/components/layout/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsPreview />
      <CTASection />
    </div>
  );
}