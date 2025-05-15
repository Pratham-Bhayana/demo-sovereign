import { Link } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-4 pt-2 pb-4">
            <Link href="/">
              <a className="py-3 border-b border-neutral-100 font-medium" onClick={onClose}>Home</a>
            </Link>
            <Link href="/about">
              <a className="py-3 border-b border-neutral-100 font-medium" onClick={onClose}>About</a>
            </Link>
            <Link href="/programs">
              <a className="py-3 border-b border-neutral-100 font-medium" onClick={onClose}>Programs</a>
            </Link>
            <Link href="/calculator">
              <a className="py-3 border-b border-neutral-100 font-medium" onClick={onClose}>Calculator</a>
            </Link>
            <a 
              href="#schedule" 
              className="mt-4 text-center px-5 py-3 bg-primary text-white font-medium rounded-lg"
              onClick={onClose}
            >
              Talk to our Experts
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
