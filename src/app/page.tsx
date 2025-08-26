import { HeroSection } from '@/sections/hero/HeroSection'
import { AboutSection } from '@/sections/about/AboutSection'
import { ServicesSection } from '@/sections/services/ServicesSection'
import { BenefitsSection } from '@/sections/benefits/BenefitsSection'
import { TeamSection } from '@/sections/team/TeamSection'
import { TestimonialsSection } from '@/sections/testimonials/TestimonialsSection'
import { ContactSection } from '@/sections/contact/ContactSection'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  )
}