import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileNav from "@/components/ui/MobileNav";

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
      isScrolled ? "bg-white bg-opacity-95 shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading font-bold text-2xl text-primary">
            Raizing Sovereign
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <a className={`font-medium ${
              location === "/" ? "text-primary" : "text-neutral-800 hover:text-primary"
            } transition-colors`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`font-medium ${
              location === "/about" ? "text-primary" : "text-neutral-800 hover:text-primary"
            } transition-colors`}>
              About
            </a>
          </Link>
          <Link href="/programs">
            <a className={`font-medium ${
              location === "/programs" ? "text-primary" : "text-neutral-800 hover:text-primary"
            } transition-colors`}>
              Programs
            </a>
          </Link>
          <Link href="/calculator">
            <a className={`font-medium ${
              location === "/calculator" ? "text-primary" : "text-neutral-800 hover:text-primary"
            } transition-colors`}>
              Calculator
            </a>
          </Link>
          <a 
            href="#schedule" 
            className="ml-4 px-5 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Talk to our Experts
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center text-neutral-800"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
