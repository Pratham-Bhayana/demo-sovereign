import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

export default function HomePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <ScheduleSection />
      <ServicesSection />
      <CalculatorSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
