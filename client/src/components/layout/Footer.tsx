import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-5">Raizing Sovereign</h3>
            <p className="text-white text-opacity-80 mb-6">
              Your trusted partner in global citizenship and residency solutions, providing expert guidance on investment migration programs worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white text-opacity-80 hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white text-opacity-80 hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="text-white text-opacity-80 hover:text-accent transition-colors">Programs</a>
                </Link>
              </li>
              <li>
                <a href="#services" className="text-white text-opacity-80 hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-white text-opacity-80 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Our Programs */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-5">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">Caribbean Citizenship</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">European Residency</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">USA & Canada Programs</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">Oceania Options</a>
              </li>
              <li>
                <Link href="/calculator">
                  <a className="text-white text-opacity-80 hover:text-accent transition-colors">Program Calculator</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-5">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  <i className="fas fa-file-pdf mr-2"></i> Download Brochure
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  <i className="fas fa-newspaper mr-2"></i> News & Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  <i className="fas fa-question-circle mr-2"></i> FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  <i className="fas fa-globe mr-2"></i> Global Offices
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  <i className="fas fa-handshake mr-2"></i> Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Raizing Sovereign. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white text-opacity-60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
