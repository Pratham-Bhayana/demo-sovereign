import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  countries: string[];
  image: string;
  programId: string; // Enforce string type
}

export default function ProgramCard({
  title,
  description,
  countries,
  image,
  programId,
}: ProgramCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover overflow-hidden program-card h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="h-48 relative bg-[#0D4715] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          loading="lazy"
          width="400"
          height="200"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800";
          }}
        />
        <div className="absolute top-0 right-0 bg-accent text-primary-900 py-1 px-3 text-xs font-medium">
          Featured
        </div>
      </div>

      <div className="p-6 flex flex-col bg-[#27548A] text-white flex-grow">
        <h3 className="font-heading font-semibold text-xl text-white-800 mb-3">
          {title}
        </h3>
        <p className="text-white-600 mb-4">{description}</p>

        <div className="mt-auto">
          <div className="border-t border-gray-100 pt-4 mb-4">
            <h4 className="text-sm font-medium text-white-700 mb-2">Key Benefits:</h4>
            <ul className="mb-5 space-y-1 text-white-700 text-sm">
              {countries.map((country, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="link"
            asChild
            className="text-[#DDA853] p-0 h-auto font-medium hover:text-primary-800"
          >
            <Link to={`/program/${programId}`}>
              Apply Now
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}