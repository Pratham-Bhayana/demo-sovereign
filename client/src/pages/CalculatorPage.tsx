import { useEffect } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

export default function CalculatorPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Program comparison data
  const comparisonData = [
    {
      feature: "Processing Time",
      caribbean: "3-6 months",
      europe: "8-36 months",
      northAmerica: "18-36+ months"
    },
    {
      feature: "Minimum Investment",
      caribbean: "$100,000 - $200,000",
      europe: "€250,000 - €1,000,000",
      northAmerica: "$500,000 - $900,000"
    },
    {
      feature: "Residency Requirement",
      caribbean: "None to minimal",
      europe: "Varies by country (0-7 days/year)",
      northAmerica: "Significant (conditional residency)"
    },
    {
      feature: "Path to Citizenship",
      caribbean: "Immediate",
      europe: "5-10 years (varies by country)",
      northAmerica: "5+ years after permanent residency"
    },
    {
      feature: "Visa-Free Travel",
      caribbean: "140-160 countries",
      europe: "175-186 countries",
      northAmerica: "180+ countries"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#183B4E] from-primary to-secondary py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Investment Program Calculator
          </motion.h1>
          <motion.p 
            className="text-lg text-white text-opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find the perfect investment migration program based on your budget, timeline, and mobility requirements.
          </motion.p>
        </div>
      </section>

      {/* Calculator Explanation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                How Our Program Calculator Works
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                Our calculator helps you identify programs that match your requirements and investment capacity. Follow these simple steps to find your ideal citizenship or residency option.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation>
              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">Select Your Preferences</h3>
                <p className="text-neutral-600">Choose your preferred region, program type, investment type, and budget range using the calculator below.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">View Matching Programs</h3>
                <p className="text-neutral-600">Our calculator will display programs that match your criteria, showing key details and investment requirements.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">Get Expert Guidance</h3>
                <p className="text-neutral-600">Schedule a consultation with our experts for detailed information and personalized recommendations.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <CalculatorSection />

      {/* Program Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Program Comparison
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                Compare key features of citizenship and residency programs across different regions.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-neutral-100 font-heading font-semibold">Features</th>
                  <th className="p-4 text-left bg-neutral-100 font-heading font-semibold">Caribbean Programs</th>
                  <th className="p-4 text-left bg-neutral-100 font-heading font-semibold">European Programs</th>
                  <th className="p-4 text-left bg-neutral-100 font-heading font-semibold">North American Programs</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="p-4 border-t border-neutral-200 font-medium">{row.feature}</td>
                    <td className="p-4 border-t border-neutral-200">{row.caribbean}</td>
                    <td className="p-4 border-t border-neutral-200">{row.europe}</td>
                    <td className="p-4 border-t border-neutral-200">{row.northAmerica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                Find answers to common questions about investment migration programs.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">What is the difference between citizenship and residency programs?</h3>
                  <p className="text-neutral-600">Citizenship programs grant you a second passport and full rights as a citizen of that country. Residency programs provide you with the right to live in a country, with potential pathways to citizenship after meeting specific requirements over time.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">How long does it take to obtain citizenship by investment?</h3>
                  <p className="text-neutral-600">Processing times vary by program: Caribbean programs typically take 3-6 months, European programs can range from 12-36 months, while North American programs often take 18+ months plus additional time for citizenship eligibility.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">Can my family be included in my application?</h3>
                  <p className="text-neutral-600">Yes, most investment migration programs allow you to include your spouse, dependent children, and in some cases, parents and grandparents. Eligibility criteria for dependents vary by program.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">What types of investments qualify for these programs?</h3>
                  <p className="text-neutral-600">Qualifying investments typically include real estate purchases, government bonds/funds contributions, business investments, or donations to national development funds. Each program has specific requirements for the type and amount of investment.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
