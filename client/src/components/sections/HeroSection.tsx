import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-900 min-h-[85vh] flex items-center py-20 overflow-hidden" id="hero">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="text-white">
              <motion.div
                className="inline-block mb-4 bg-accent/90 text-primary rounded-lg px-4 py-1 text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Global Citizenship & Residency Programs
              </motion.div>
              <motion.h1 
                className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Elevate Your <span className="text-accent">Global Freedom</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-white/90 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Unlock global mobility with Raizing Sovereign. Secure second citizenship or permanent residency through trusted investment migration programs.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/programs">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-900 font-medium rounded-lg">
                    Explore Programs
                  </Button>
                </Link>
                <Link href="#schedule">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3} className="hidden lg:block">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global Citizenship and Mobility" 
                className="responsive w-full h-auto object-cover rounded-lg"
                loading="eager"
                width="600"
                height="400"
              />
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div aria-hidden="true" className="hidden md:block absolute -bottom-24 right-0 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
      </div>
      <div aria-hidden="true" className="hidden md:block absolute -top-20 -left-20 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="white" />
        </svg>
      </div>
    </section>
  );
}
