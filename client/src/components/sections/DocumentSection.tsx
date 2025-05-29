import { useState } from "react";
import { User, Shield, DollarSign, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const documentCategories = [
  {
    icon: User,
    title: "Personal Documents",
    color: "text-primary",
    documents: [
      "Valid passport (original + copies)",
      "Birth certificate",
      "Marriage certificate (if applicable)",
      "Educational certificates"
    ]
  },
  {
    icon: Shield,
    title: "Legal Documents",
    color: "text-secondary",
    documents: [
      "Police clearance certificate",
      "Medical examination results",
      "Proof of residence",
      "Character references"
    ]
  },
  {
    icon: DollarSign,
    title: "Financial Documents",
    color: "text-accent",
    documents: [
      "Bank statements (6 months)",
      "Source of funds declaration",
      "Tax returns (3 years)",
      "Investment documentation"
    ]
  }
];

export default function DocumentSection() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleCheckChange = (document: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(document);
    } else {
      newCheckedItems.delete(document);
    }
    setCheckedItems(newCheckedItems);
  };

  const totalDocuments = documentCategories.reduce((sum, category) => sum + category.documents.length, 0);
  const checkedDocuments = checkedItems.size;
  const progressPercentage = (checkedDocuments / totalDocuments) * 100;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Document Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure you have all required documents ready for a smooth application process.
            </p>
          </div>
        </ScrollAnimation>

        {/* Document verification image */}
        <ScrollAnimation delay={0.2}>
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Document verification process" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </ScrollAnimation>

        {/* Progress indicator */}
        <ScrollAnimation delay={0.3}>
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">Completion Progress</h3>
              <span className="text-sm text-gray-600">
                {checkedDocuments} of {totalDocuments} documents
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="progress-bar h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentCategories.map((category, categoryIndex) => (
            <ScrollAnimation key={category.title} delay={categoryIndex * 0.1}>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.documents.map((document, index) => (
                    <li key={index} className="flex items-center">
                      <Checkbox
                        id={`${category.title}-${index}`}
                        checked={checkedItems.has(document)}
                        onCheckedChange={(checked) => handleCheckChange(document, checked as boolean)}
                        className="mr-3"
                      />
                      <label 
                        htmlFor={`${category.title}-${index}`}
                        className="text-gray-700 cursor-pointer"
                      >
                        {document}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.5}>
          <div className="text-center mt-12">
            <Button 
              className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Complete Checklist
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
