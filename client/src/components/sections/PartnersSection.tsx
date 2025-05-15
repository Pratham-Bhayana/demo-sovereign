import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { motion } from "framer-motion";

// Partner logo placeholders
const partners = [
  { id: 1, name: "Gov Agency" },
  { id: 2, name: "Legal Firm" },
  { id: 3, name: "Investment Bank" },
  { id: 4, name: "Real Estate" },
  { id: 5, name: "Immigration" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 mb-4">
              Our Trusted Partners
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              We collaborate with top government agencies, legal experts, and financial institutions to ensure your journey is smooth and successful.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.id}
              className="w-32 h-16 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-neutral-400 text-lg font-medium">{partner.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
