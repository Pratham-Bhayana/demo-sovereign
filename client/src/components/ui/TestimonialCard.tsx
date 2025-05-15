import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  quote: string;
  result: string;
}

export default function TestimonialCard({ name, position, image, quote, result }: TestimonialCardProps) {
  return (
    <div className="bg-neutral-50 rounded-xl shadow-sm p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-5">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-heading font-medium text-xl text-neutral-800">{name}</h4>
          <p className="text-neutral-600">{position}</p>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex text-accent mb-4">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p className="text-neutral-700 italic">
          "{quote}"
        </p>
      </div>
      <div className="text-primary font-medium">
        Result: {result}
      </div>
    </div>
  );
}
