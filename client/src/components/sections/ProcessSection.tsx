import { UserCheck, FileText, CreditCard, ShieldCheck, Clock } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const processSteps = [
  {
    number: 1,
    icon: UserCheck,
    title: "Initial Consultation",
    description: "Free consultation to assess your needs and recommend the best program for your goals.",
    duration: "1-2 hours",
    color: "bg-accent",
    iconColor: "text-accent"
  },
  {
    number: 2,
    icon: FileText,
    title: "Document Preparation",
    description: "Our team helps gather and prepare all required documentation with our comprehensive checklist.",
    duration: "2-4 weeks",
    color: "bg-secondary",
    iconColor: "text-secondary"
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Investment & Application",
    description: "Make your investment and submit your application with our expert guidance throughout the process.",
    duration: "1-2 weeks",
    color: "bg-primary",
    iconColor: "text-primary"
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "Approval & Citizenship",
    description: "Receive your approval and citizenship documentation. Welcome to your new global mobility!",
    duration: "3-6 months",
    color: "bg-green-500",
    iconColor: "text-green-500"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Your Journey to Citizenship</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth path from consultation to approval.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full timeline-line"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 0.2}>
                <div className={`flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10`}>
                    {step.number}
                  </div>
                  
                  <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg card-hover-effect">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <step.icon className={`h-8 w-8 ${step.iconColor} mr-3`} />
                        <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm text-gray-500">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Duration: {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
