import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ProgramCard from "@/components/ui/ProgramCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "caribbean",
    title: "Caribbean Citizenship",
    description: "Acquire second citizenship in beautiful Caribbean nations through fast, secure investment routes with minimal residency requirements.",
    countries: ["St. Kitts & Nevis", "Grenada", "Dominica", "Antigua & Barbuda"],
    image: "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "european",
    title: "European Residency",
    description: "Unlock access to the European Union through strategic investment programs with pathways to permanent residency or citizenship.",
    countries: ["Malta", "Greece", "Portugal", "Spain"],
    image: "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "northamerica",
    title: "USA & Canada Immigration",
    description: "Gain access to North America through trusted investment and business immigration programs for permanent residency opportunities.",
    countries: ["U.S. EB-5 Investor Visa", "Canada Start-Up Visa", "U.S. E-2 Treaty Investor", "Canada Express Entry"],
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-20 relative z-10">
            <div className="w-24 h-2 bg-gradient-primary rounded-full mb-5 mx-auto md:mx-0"></div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-800 mb-6 text-center md:text-left">
              Global <span className="bg-clip-text text-transparent bg-gradient-primary">Mobility</span> Programs
            </h2>
            <p className="max-w-2xl md:ml-0 mx-auto text-neutral-600 text-center md:text-left text-lg">
              Discover curated citizenship and residency investment programs, designed to provide security, mobility, and opportunity for global citizens.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {programs.map((program, index) => (
            <ScrollAnimation key={program.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProgramCard 
                  title={program.title}
                  description={program.description}
                  countries={program.countries}
                  image={program.image}
                />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation delay={0.3}>
          <div className="flex justify-center">
            <Link href="/programs">
              <Button className="btn-glow text-lg font-medium rounded-full gradient-primary text-white px-8 py-6 shadow-xl transition-all hover:shadow-2xl">
                Explore All Programs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
        
        {/* Decorative elements */}
        <div aria-hidden="true" className="hidden md:block absolute right-0 left-auto top-1/4 -translate-y-1/2 transform">
          <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
