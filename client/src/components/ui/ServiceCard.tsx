import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export default function ServiceCard({ icon, title, description, points }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-6 md:p-8 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="w-14 h-14 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary mb-6">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-4">{title}</h3>
      <p className="text-neutral-600 mb-5">
        {description}
      </p>
      <ul className="space-y-2 mb-6 text-neutral-700">
        {points.map((point, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-success mr-2"></i> {point}
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </motion.div>
  );
}
