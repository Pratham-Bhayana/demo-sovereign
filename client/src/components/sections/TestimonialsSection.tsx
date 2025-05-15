import { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    position: "Entrepreneur, United Kingdom",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    quote: "Raizing Sovereign guided me through the entire process of obtaining my St. Kitts & Nevis citizenship. Their expert team handled everything with professionalism and transparency. Now my family and I enjoy the benefits of global mobility and financial freedom.",
    result: "St. Kitts & Nevis Citizenship in 4 months"
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Tech Executive, Singapore",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    quote: "The investment advisory services from Raizing Sovereign were truly exceptional. They helped me navigate the complexities of the Portuguese Golden Visa program, identifying the perfect real estate investment that met both program requirements and my financial goals.",
    result: "Portuguese Golden Visa in 8 months"
  },
  {
    id: 3,
    name: "Michael Kerensky",
    position: "Business Owner, Russia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    quote: "From our first consultation to receiving our new passports, the Raizing Sovereign team provided exceptional service. Their attention to detail and deep knowledge of the Grenada CBI program made all the difference in our successful application.",
    result: "Grenada Citizenship in 5 months"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
              Client Success Stories
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Hear from our satisfied clients who have successfully embarked on their global citizenship journey.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="testimonial-container max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <TestimonialCard
                  name={testimonials[activeIndex].name}
                  position={testimonials[activeIndex].position}
                  image={testimonials[activeIndex].image}
                  quote={testimonials[activeIndex].quote}
                  result={testimonials[activeIndex].result}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-primary" : "bg-neutral-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
