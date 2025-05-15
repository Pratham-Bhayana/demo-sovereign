import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary min-h-[70vh] flex items-center py-20 overflow-hidden" id="hero">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-15" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Elevate Your Global Freedom
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unlock global mobility with Raizing Sovereign. Secure second citizenship or permanent residency through trusted investment migration programs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/programs">
                <a className="inline-block px-8 py-4 bg-accent font-medium rounded-lg text-primary-dark hover:bg-accent-light transition-colors transform hover:scale-105 duration-200">
                  Start Your Journey
                </a>
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <div className="bg-white bg-opacity-10 rounded-full w-64 h-64"></div>
      </div>
      <div className="hidden md:block absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
        <div className="bg-white bg-opacity-10 rounded-full w-96 h-96"></div>
      </div>
    </section>
  );
}
