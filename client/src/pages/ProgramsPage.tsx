import { useEffect, useState } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ProgramCard from "@/components/ui/ProgramCard";
import ScheduleSection from "@/components/sections/ScheduleSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Program data for different regions
const programs = {
  caribbean: [
    {
      id: "stkitts",
      title: "St. Kitts & Nevis",
      description: "Obtain citizenship in 3-6 months through a government fund donation or real estate investment.",
      countries: ["Visa-free travel to 156+ countries", "No residency requirement", "Includes spouse and dependents", "Lifetime citizenship"],
      image: "https://images.unsplash.com/photo-1580541631950-7282082b53fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "grenada",
      title: "Grenada",
      description: "Secure a powerful passport with visa-free access to China, Russia, and E-2 Treaty Investor visa eligibility for the USA.",
      countries: ["E-2 Treaty with USA", "Visa-free travel to 144+ countries", "No physical residency required", "Process in 4-6 months"],
      image: "https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "dominica",
      title: "Dominica",
      description: "One of the most affordable citizenship programs with a well-respected passport and straightforward process.",
      countries: ["Visa-free travel to 140+ countries", "Affordable minimum investment", "Full family inclusion", "Citizenship for life"],
      image: "https://images.unsplash.com/photo-1597900931468-a3f23fd25fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "antiguabarbuda",
      title: "Antigua & Barbuda",
      description: "An excellent value citizenship program with visa-free access to many key destinations including the UK and Schengen Area.",
      countries: ["Visa-free travel to 151+ countries", "Minimal residency requirement", "Multiple investment options", "Tax advantages"],
      image: "https://images.unsplash.com/photo-1559066655-04c693faa130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
  ],
  europe: [
    {
      id: "malta",
      title: "Malta",
      description: "Acquire citizenship in an EU member state with one of the most respected passports in the world.",
      countries: ["EU citizenship", "Visa-free travel to 186+ countries", "Strong economy & quality of life", "Access to EU healthcare & education"],
      image: "https://images.unsplash.com/photo-1605196560602-a547b6d2460f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "portugal",
      title: "Portugal Golden Visa",
      description: "Residency in a European country with a path to citizenship after 5 years through various investment options.",
      countries: ["Path to EU citizenship", "Minimal stay requirement", "Inclusion of family members", "Access to Schengen Area"],
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "greece",
      title: "Greece Golden Visa",
      description: "Permanent residency through property investment with a path to citizenship and EU benefits.",
      countries: ["Fast processing time", "Visa-free travel in Schengen", "No minimum stay requirement", "Investment from €250,000"],
      image: "https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "spain",
      title: "Spain Golden Visa",
      description: "Residency in Spain through real estate investment with access to the entire Schengen Area.",
      countries: ["Flexible residency requirement", "Path to permanent residency & citizenship", "Whole family inclusion", "EU healthcare & education"],
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
  ],
  northAmerica: [
    {
      id: "useb5",
      title: "U.S. EB-5 Investor Visa",
      description: "Permanent residency in the USA through investment in new commercial enterprises creating American jobs.",
      countries: ["Green card for investor & family", "Path to US citizenship", "Investment from $800,000", "Live & work anywhere in the US"],
      image: "https://images.unsplash.com/photo-1565876427205-a08fee1d2e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "canadastartup",
      title: "Canada Start-Up Visa",
      description: "Permanent residency in Canada for entrepreneurs with innovative business ideas and potential for growth.",
      countries: ["Permanent residency for entrepreneurs", "No minimum investment", "World-class healthcare & education", "Path to Canadian citizenship"],
      image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "use2",
      title: "U.S. E-2 Treaty Investor Visa",
      description: "Temporary visa for nationals of treaty countries making a substantial investment in a US business.",
      countries: ["Relatively quick processing", "Renewable indefinitely", "Spouse can work anywhere in the US", "Children can attend US schools"],
      image: "https://images.unsplash.com/photo-1624461058946-0a8a1e6ef696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "canadaexpress",
      title: "Canada Express Entry",
      description: "Fast-track immigration program for skilled workers who want to become permanent residents of Canada.",
      countries: ["Fast processing times", "Points-based selection system", "Multiple pathways to qualify", "No investment required"],
      image: "https://images.unsplash.com/photo-1569681157406-2aa4a747ff6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const regions = [
  { id: "all", name: "All Programs" },
  { id: "caribbean", name: "Caribbean" },
  { id: "europe", name: "Europe" },
  { id: "northAmerica", name: "North America" }
];

export default function ProgramsPage() {
  const [activeRegion, setActiveRegion] = useState("all");
  const [filteredPrograms, setFilteredPrograms] = useState<any[]>([]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter programs by region
  useEffect(() => {
    if (activeRegion === "all") {
      setFilteredPrograms([
        ...programs.caribbean,
        ...programs.europe,
        ...programs.northAmerica
      ]);
    } else {
      setFilteredPrograms(programs[activeRegion as keyof typeof programs] || []);
    }
  }, [activeRegion]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#183B4E] from-primary to-secondary py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Citizenship & Residency Programs
          </motion.h1>
          <motion.p 
            className="text-lg text-white text-opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our carefully selected citizenship and residency by investment programs across the globe, offering security, mobility, and opportunity.
          </motion.p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Find Your Ideal Program
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600 mb-8">
                Browse our comprehensive selection of investment migration programs tailored to your global mobility needs.
              </p>
              
              {/* Region Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {regions.map((region) => (
                  <Button 
                    key={region.id}
                    variant={activeRegion === region.id ? "default" : "outline"} 
                    onClick={() => setActiveRegion(region.id)}
                    className="transition-all"
                  >
                    {region.name}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#183B4E] bg-opacity-5">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 mb-6">
              Not Sure Which Program Is Right For You?
            </h2>
            <p className="max-w-xl mx-auto text-neutral-600 mb-8">
              Our expert consultants will help you identify the perfect citizenship or residency option based on your specific goals and requirements.
            </p>
            <a href="#schedule" className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Book a Free Consultation
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Schedule Section */}
      <ScheduleSection />
    </>
  );
}
