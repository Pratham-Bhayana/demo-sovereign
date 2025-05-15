import { Link } from "wouter";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Calculator", path: "/calculator" },
  ];

  const slideInVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: { opacity: 0, y: -10 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div 
            className="md:hidden bg-white shadow-xl fixed top-[60px] left-0 right-0 z-50 max-h-[calc(100vh-60px)] overflow-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col p-6">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.path}
                  custom={index}
                  variants={slideInVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="mb-3"
                >
                  <Link href={item.path}>
                    <div 
                      className="py-3 border-b border-gray-100 font-medium text-primary-700 hover:text-primary-600 transition-colors" 
                      onClick={onClose}
                    >
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                custom={menuItems.length}
                variants={slideInVariants}
                initial="closed"
                animate="open"
                exit="exit"
              >
                <Link href="#schedule">
                  <Button 
                    className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white"
                    onClick={onClose}
                  >
                    Talk to our Experts
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
