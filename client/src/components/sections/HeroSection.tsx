import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import bgImage from "./bg.jpg"; // Adjust path if needed
import bgiImage from "./bg2.png"


export default function HeroSection() {
  return (
    <section className="relative bg-[#183B4E] bg-no-repeat from-primary-500 bg-cover bg-center via-primary-700 to-primary-900 min-h-[90vh] flex items-center pt-16 pb-24 overflow-hidden" id="hero">
      {/* Advanced background effect with gradient mesh */}
      <div 
        className="absolute bg-no-repeat bg-cover inset-0 bg-gradient-to-br from-primary-700/20 to-secondary/30 z-0" 
        style={{ 
             backgroundImage: `url(${bgiImage})`,
        }}
        aria-hidden="true"
      ></div>
      
      {/* Floating gradient orbs */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-3xl animate-float opacity-40"></div>
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <ScrollAnimation>
              <div className="text-white">
                <motion.div
                  className="inline-block mb-4 bg-[#DDA853] from-accent to-accent-600 text-primary-900 rounded-full px-5 py-2 text-sm font-medium shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Premium Global Citizenship Solutions
                </motion.div>
                
                <motion.h1 
                  className="font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="block">Elevate Your</span>
                  <span className="bg-clip-text text-[#DDA853] bg-gradient-to-r from-accent-300 to-accent-500">Global Freedom</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl mb-10 text-white/90 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Unlock worldwide mobility and financial freedom through our exclusive citizenship and residency investment programs.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link href="/programs">
                    <Button size="lg" className="btn-glow rounded-full bg-[#DDA853] from-accent to-accent-600 hover:from-accent-600 hover:to-accent text-primary-900 font-medium text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                      Explore Programs
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Button>
                  </Link>
                  
                  <Link href="#schedule">
                    <Button size="lg" variant="outline" className="glass rounded-full text-white border-white/20 hover:bg-white/10 text-lg px-7 py-6">
                      Schedule Consultation
                    </Button>
                  </Link>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div 
                  className="mt-12 flex flex-wrap gap-8 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">100% Secure Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">Fast Application Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">Premium Service</span>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="lg:col-span-2 hidden lg:block">
            <ScrollAnimation delay={0.3}>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Main image with shadow and gradient border */}
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary/30 to-primary/30 p-1">
                  <img 
                    src={bgImage}  
                    alt="Global Citizenship and Mobility" 
                    className="responsive w-full h-auto object-cover rounded-xl"
                    loading="eager"
                    width="600"
                    height="400"
                  />
                </div>
                
                {/* Floating card element */}
                <motion.div 
                  className="absolute -bottom-10 -left-10 glass-dark rounded-xl p-5 shadow-xl w-64"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary-900 font-bold">R</div>
                    <div>
                      <h4 className="text-white font-medium">Trusted Experts</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(i => (
                          <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">Helped 500+ clients secure second citizenship</p>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
