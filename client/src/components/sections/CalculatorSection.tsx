import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

const calculatorFormSchema = z.object({
  region: z.string().min(1, { message: "Please select a region" }),
  programType: z.string().min(1, { message: "Please select a program type" }),
  investmentType: z.string().min(1, { message: "Please select an investment type" }),
  budget: z.string().min(1, { message: "Please select a budget range" })
});

type CalculatorFormValues = z.infer<typeof calculatorFormSchema>;

// Sample program results based on form selections
const programResults = [
  {
    id: 1,
    name: "St. Kitts & Nevis",
    type: "Citizenship",
    description: "Obtain citizenship in 3-6 months through a government fund donation or real estate investment.",
    minInvestment: "Starting $150,000"
  },
  {
    id: 2,
    name: "Malta",
    type: "Citizenship",
    description: "European Union citizenship through a combination of donations and real estate investment.",
    minInvestment: "Starting €750,000"
  },
  {
    id: 3,
    name: "Greece Golden Visa",
    type: "Residency",
    description: "Permanent residency through real estate investment with a path to citizenship after 7 years.",
    minInvestment: "Starting €250,000"
  },
  {
    id: 4,
    name: "US EB-5 Program",
    type: "Residency",
    description: "Green card through investment in US new commercial enterprises creating jobs.",
    minInvestment: "Starting $800,000"
  }
];

export default function CalculatorSection() {
  const [showResults, setShowResults] = useState(false);
  const [filteredPrograms, setFilteredPrograms] = useState(programResults);
  
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorFormSchema),
    defaultValues: {
      region: "",
      programType: "",
      investmentType: "",
      budget: ""
    }
  });

  const onSubmit = (data: CalculatorFormValues) => {
    console.log("Calculator form data:", data);
    
    // In a real implementation, this would filter programs based on form values
    // For now, we'll just show all sample programs
    setShowResults(true);
    
    // Simulate filtering programs
    // In a real app, this would be based on the actual form values
    let filtered = [...programResults];
    if (data.region === "caribbean") {
      filtered = filtered.filter(p => p.name.includes("Kitts") || p.name.includes("Grenada"));
    } else if (data.region === "europe") {
      filtered = filtered.filter(p => p.name.includes("Malta") || p.name.includes("Greece"));
    }
    
    if (data.programType === "citizenship") {
      filtered = filtered.filter(p => p.type === "Citizenship");
    } else if (data.programType === "residency") {
      filtered = filtered.filter(p => p.type === "Residency");
    }
    
    setFilteredPrograms(filtered.length > 0 ? filtered : programResults);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Investment Program Calculator
            </h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Find the perfect investment migration program based on your budget and requirements.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto text-neutral-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Region</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                            <SelectValue placeholder="Select Region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="caribbean">Caribbean</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="northamerica">North America</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="programType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Program Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                            <SelectValue placeholder="Select Program Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="citizenship">Citizenship by Investment</SelectItem>
                          <SelectItem value="residency">Residency by Investment</SelectItem>
                          <SelectItem value="both">Both Options</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="investmentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Investment Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                            <SelectValue placeholder="Select Investment Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="business">Business Investment</SelectItem>
                          <SelectItem value="donation">Government Fund Donation</SelectItem>
                          <SelectItem value="bonds">Government Bonds</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Investment Budget</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                            <SelectValue placeholder="Select Budget Range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                          <SelectItem value="1m+">$1,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="px-8 py-3 bg-accent text-primary-dark font-medium rounded-lg hover:bg-accent-light transition-colors"
                >
                  Find Matching Programs
                </Button>
              </div>
            </form>
          </Form>
          
          {/* Results Section */}
          <AnimatePresence>
            {showResults && (
              <motion.div 
                className="mt-10 border-t border-neutral-200 pt-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-6">Recommended Programs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPrograms.map(program => (
                    <motion.div 
                      key={program.id}
                      className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-heading font-medium text-lg">{program.name}</h4>
                        <span className="bg-primary-light bg-opacity-20 text-primary text-sm py-1 px-3 rounded-full">
                          {program.type}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3">
                        {program.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-primary font-medium">{program.minInvestment}</div>
                        <a href="#" className="text-sm text-primary hover:text-primary-dark">View Details</a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <a href="#schedule" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
                    Schedule a Detailed Consultation
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
