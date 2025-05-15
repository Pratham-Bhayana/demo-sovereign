import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    id: "citizenship",
    icon: "fa-passport",
    title: "Citizenship Programs",
    description: "Secure a second passport through a fast, legally compliant process with government-approved Citizenship by Investment programs.",
    points: [
      "Comprehensive Due Diligence",
      "Documentation Support",
      "Personalized Investment Guidance"
    ]
  },
  {
    id: "residency",
    icon: "fa-home",
    title: "Residency Programs",
    description: "Gain legal residency in top-tier countries through strategic investments in real estate, business ventures, or government funds.",
    points: [
      "Tailored Program Selection",
      "Real Estate Investment Guidance",
      "Application & Renewal Management"
    ]
  },
  {
    id: "investment",
    icon: "fa-chart-line",
    title: "Investment Advisory",
    description: "Receive expert guidance on selecting and managing investments that support your immigration pathway and long-term financial success.",
    points: [
      "Customized Investment Portfolio",
      "Risk Assessment & Mitigation",
      "Ongoing Investment Management"
    ]
  },
  {
    id: "additional",
    icon: "fa-plus-circle",
    title: "Additional Services",
    description: "We offer comprehensive end-to-end support to ensure a seamless transition to your new country of residence or citizenship.",
    points: [
      "Tax Planning & Optimization",
      "Relocation & Settlement Assistance",
      "Education & Healthcare Guidance"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
              Comprehensive Services
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              From citizenship acquisition to investment advisory, we provide end-to-end support throughout your global mobility journey.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
