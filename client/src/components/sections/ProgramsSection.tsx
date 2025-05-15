import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ProgramCard from "@/components/ui/ProgramCard";
import { Link } from "wouter";

const programs = [
  {
    id: "caribbean",
    title: "Caribbean Citizenship",
    description: "Acquire second citizenship in beautiful Caribbean nations through fast, secure investment routes with minimal residency requirements.",
    countries: ["St. Kitts & Nevis", "Grenada", "Dominica", "Antigua & Barbuda"],
    image: "https://pixabay.com/get/gdba4afc83f43910370215bb126d71edad6ebc1f350ec8137b58a706d3ac0c5da3b2f0a8c94a4a3e53560003e9fcd0b35a0cae157904d5bb56a94d956400eb0d5_1280.jpg"
  },
  {
    id: "european",
    title: "European Residency",
    description: "Unlock access to the European Union through strategic investment programs with pathways to permanent residency or citizenship.",
    countries: ["Malta", "Greece", "Croatia", "Hungary"],
    image: "https://images.unsplash.com/photo-1541343672885-9be56236302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "northamerica",
    title: "USA & Canada Immigration",
    description: "Gain access to North America through trusted investment and business immigration programs for permanent residency opportunities.",
    countries: ["U.S. EB-5 Investor Visa", "Canada Start-Up Visa", "U.S. E-2 Treaty Investor Visa", "Canada Express Entry"],
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
              Top Citizenship & Residency Programs
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Explore our carefully selected citizenship and residency by investment programs across the globe, offering security, mobility, and opportunity.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <ScrollAnimation key={program.id} delay={index * 0.1}>
              <ProgramCard 
                title={program.title}
                description={program.description}
                countries={program.countries}
                image={program.image}
              />
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/programs">
            <a className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 duration-200">
              Explore All Programs
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
