import { useEffect } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core values
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every client relationship."
    },
    {
      id: 2,
      title: "Excellence",
      description: "We are committed to delivering exceptional service and results, going above and beyond to exceed expectations."
    },
    {
      id: 3,
      title: "Client-Centric",
      description: "Your goals, needs, and aspirations are at the heart of everything we do, guiding our tailored solutions."
    },
    {
      id: 4,
      title: "Innovation",
      description: "We continuously evolve our approach and solutions to stay ahead of the dynamic global immigration landscape."
    }
  ];

  // Office locations
  const offices = [
    {
      id: 1,
      city: "New York",
      country: "USA",
      address: "1234 Global Avenue, Suite 500, New York, NY 10001"
    },
    {
      id: 2,
      city: "London",
      country: "UK",
      address: "45 Sovereign House, Westminster, London SW1A 0AA"
    },
    {
      id: 3,
      city: "Dubai",
      country: "UAE",
      address: "Burj Plaza, Level 12, Downtown Dubai, UAE"
    },
    {
      id: 4,
      city: "Singapore",
      country: "Singapore",
      address: "Marina Bay Financial Centre, Tower 3, Singapore 018982"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Raizing Sovereign
          </motion.h1>
          <motion.p 
            className="text-lg text-white text-opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your trusted partner in global citizenship and residency solutions, providing expert guidance on investment migration programs worldwide.
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-6">
                Our Story
              </h2>
              <p className="text-neutral-600 mb-4">
                Founded with a mission to empower individuals and families with global mobility options, Raizing Sovereign has grown into a leading consultancy in the citizenship and residency by investment industry.
              </p>
              <p className="text-neutral-600 mb-4">
                Our team of experienced immigration consultants, investment advisors, and legal experts is dedicated to providing personalized guidance through what can often be a complex process.
              </p>
              <p className="text-neutral-600">
                With a global presence and deep partnerships with government agencies and financial institutions, we offer unparalleled expertise in securing your future through strategic investment migration.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Our Core Values
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                These principles guide our approach and commitment to every client we serve.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ScrollAnimation key={value.id} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                  <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center text-primary mb-4">
                    <i className="fas fa-star"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div className="bg-primary bg-opacity-5 rounded-xl p-8">
                <div className="w-14 h-14 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center text-primary mb-6">
                  <i className="fas fa-eye text-2xl"></i>
                </div>
                <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-4">Our Vision</h3>
                <p className="text-neutral-600">
                  To be the global leader in investment migration solutions, recognized for our integrity, expertise, and client-centered approach. We envision a world where individuals have the freedom to choose their place of residence and citizenship based on their unique needs and aspirations.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-primary bg-opacity-5 rounded-xl p-8">
                <div className="w-14 h-14 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center text-primary mb-6">
                  <i className="fas fa-bullseye text-2xl"></i>
                </div>
                <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-4">Our Mission</h3>
                <p className="text-neutral-600">
                  To provide exceptional citizenship and residency solutions through personalized guidance, ethical practices, and deep expertise in global mobility programs. We are committed to empowering our clients with the knowledge and opportunities to secure their future and expand their global access.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Where We Stand in the Market
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                Raizing Sovereign is positioned as a premier global investment migration consultancy, distinguished by our comprehensive approach and unmatched expertise.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                <div className="text-4xl text-primary mb-4 font-bold">98%</div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">Success Rate</h3>
                <p className="text-neutral-600">Our applications have a 98% approval rate, well above the industry average.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                <div className="text-4xl text-primary mb-4 font-bold">500+</div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">Successful Cases</h3>
                <p className="text-neutral-600">We've helped over 500 families and individuals achieve their global mobility goals.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                <div className="text-4xl text-primary mb-4 font-bold">20+</div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-2">Programs Offered</h3>
                <p className="text-neutral-600">We provide access to over 20 carefully selected citizenship and residency programs.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Our Global Offices
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                With strategically located offices around the world, we provide localized expertise with a global perspective.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <ScrollAnimation key={office.id} delay={index * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 bg-neutral-100 flex items-center justify-center">
                    <i className="fas fa-building text-5xl text-neutral-300"></i>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-1">{office.city}</h3>
                    <p className="text-primary mb-3">{office.country}</p>
                    <p className="text-neutral-600 text-sm">{office.address}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Download Our Company Brochure
            </h2>
            <p className="max-w-xl mx-auto mb-8 opacity-90">
              Get detailed information about our services, programs, and success stories in our comprehensive brochure.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center">
              <i className="fas fa-file-pdf mr-2"></i> Download Brochure
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
