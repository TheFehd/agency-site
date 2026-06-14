import { BookingSection } from "@/components/sections/booking-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <main id="main" className="flex-1 pt-2">
      <HeroSection />
      <BookingSection />
      <ServicesSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  );
}
