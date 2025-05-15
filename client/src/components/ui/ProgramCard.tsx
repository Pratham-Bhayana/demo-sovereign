import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  description: string;
  countries: string[];
  image: string;
}

export default function ProgramCard({ title, description, countries, image }: ProgramCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover overflow-hidden program-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-primary mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">
          {description}
        </p>
        <ul className="mb-5 space-y-1 text-neutral-700">
          {countries.map((country, index) => (
            <li key={index} className="flex items-center">
              <i className="fas fa-passport text-primary-light mr-2"></i> {country}
            </li>
          ))}
        </ul>
        <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
          Learn More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
}
