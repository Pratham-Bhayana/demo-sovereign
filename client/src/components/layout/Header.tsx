import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileNav from "@/components/ui/MobileNav";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white bg-opacity-98 shadow-sm backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="font-heading font-bold text-2xl  text-[#DDA853] ">
            Raizing Sovereign
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <div className={`font-medium ${
              location === "/" ? "text-WHITE" : "text-neutral-700 hover:text-primary-700"
            } transition-colors`}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={`font-medium ${
              location === "/about" ? "textblack" : "text-neutral-700 hover:text-primary-700"
            } transition-colors`}>
              About
            </div>
          </Link>
          <Link href="/programs">
            <div className={`font-medium ${
              location === "/programs" ? "text-black" : "text-neutral-700 hover:text-primary-700"
            } transition-colors`}>
              Programs
            </div>
          </Link>
          <Link href="/calculator">
            <div className={`font-medium ${
              location === "/calculator" ? "text-pblack" : "text-neutral-700 hover:text-primary-700"
            } transition-colors`}>
              Calculator
            </div>
          </Link>
          <Link href="#schedule">
            <Button className="ml-2 bg-[#DDA853] hover:bg-primary-700 text-white">
              Talk to our Experts
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <AnimatePresence>
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden flex items-center text-primary-700 p-2"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </motion.button>
        </AnimatePresence>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
