import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const faqs = [
  {
    question: "What is citizenship by investment?",
    answer: "Citizenship by investment is a legal process where individuals can obtain citizenship of a country by making a significant economic contribution, such as a donation to a government fund or investment in real estate or business."
  },
  {
    question: "How long does the application process take?",
    answer: "Processing times vary by program. Caribbean programs typically take 3-6 months, European programs can take 6-18 months, and North American programs may take 18-36 months. Our team provides regular updates throughout the process."
  },
  {
    question: "Can my family be included in the application?",
    answer: "Yes, most programs allow you to include your spouse and dependent children in your application. Some programs also allow parents and siblings to be included for an additional fee."
  },
  {
    question: "What are the investment requirements?",
    answer: "Investment requirements vary by program and country. They can range from $100,000 for some Caribbean programs to over $2 million for certain European programs. Our consultants will help you find a program that fits your budget."
  },
  {
    question: "Do I need to live in the country to maintain citizenship?",
    answer: "Most citizenship by investment programs have minimal or no residency requirements. However, some residency programs require periodic visits or minimum stay periods to maintain status or qualify for citizenship."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about citizenship and residency programs.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
