import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  DollarSign, 
  Shield, 
  User, 
  FileText, 
  CreditCard, 
  Award, 
  CheckCircle,
  ChevronDown,
  Send,
  Home,
  Building,
  TrendingUp,
  Banknote,
  Receipt,
  Target,
  Search,
  Plane
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationSchema, insertApplicationSchema, type InsertConsultation, type InsertApplication } from "@shared/schema";
import { z } from "zod";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { programsData } from "@/data/programsData";
import NotFound from "@/pages/not-found";

const iconMap = {
  UserCheck: User,
  FileText: FileText,
  CreditCard: CreditCard,
  Clock: Clock,
  Award: Award,
  User: User,
  Shield: Shield,
  DollarSign: DollarSign,
  Banknote: Banknote,
  Receipt: Receipt,
  Home: Home,
  TrendingUp: TrendingUp,
  Send: Send,
  Target: Target,
  Search: Search,
  Building: Building,
  Plane: Plane,
  Briefcase: FileText
};

const consultationFormSchema = insertConsultationSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required")
});

const applicationFormSchema = insertApplicationSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required")
});

export default function ProgramDetailPage() {
  const [match, params] = useRoute("/program/:id");
  
  // Debug logging
  console.log("Route match:", match);
  console.log("Params:", params);
  
  if (!match || !params?.id) {
    return <NotFound />;
  }

  const programId = params.id;
  const program = programsData[programId];

  // Debug logging
  console.log("Program ID:", programId);
  console.log("Program Data:", program);

  const [consultationFormData, setConsultationFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredProgram: programId || "",
    consultationType: "online"
  });

  const [applicationFormData, setApplicationFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programId: programId || "",
    documentsReady: false
  });

  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successType, setSuccessType] = useState<'consultation' | 'application'>('consultation');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createConsultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
      setShowConsultationModal(false);
      setSuccessType('consultation');
      setShowSuccessModal(true);
      setConsultationFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredProgram: programId || "",
        consultationType: "online"
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to schedule consultation. Please try again.",
        variant: "destructive",
      });
    }
  });

  const createApplicationMutation = useMutation({
    mutationFn: async (data: InsertApplication) => {
      const response = await apiRequest("POST", "/api/applications", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      setShowApplicationModal(false);
      setSuccessType('application');
      setShowSuccessModal(true);
      setApplicationFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programId: programId || "",
        documentsReady: false
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = consultationFormSchema.parse(consultationFormData);
      createConsultationMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = applicationFormSchema.parse(applicationFormData);
      createApplicationMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleConsultationInputChange = (field: string, value: string | boolean) => {
    setConsultationFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleApplicationInputChange = (field: string, value: string | boolean) => {
    setApplicationFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!program) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header />
      
      {/* Mobile-First Hero */}
      <section className="bg-[#183B4E] py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-accent mb-3 text-sm">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-white">{program.title}</h1>
              {program.badge && (
                <span className={`${program.badgeColor} px-2 py-1 rounded-full text-xs font-medium`}>
                  {program.badge}
                </span>
              )}
            </div>
            
            <p className="text-gray-200 text-sm">{program.description}</p>
            
            {/* Mobile Stats Grid */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <DollarSign className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-gray-300">Investment</div>
                  <div className="text-xs font-semibold text-white">{program.overview.investmentRange.split(' - ')[0]}</div>
                </div>
                <div>
                  <Clock className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-gray-300">Processing</div>
                  <div className="text-xs font-semibold text-white">{program.overview.processingTime}</div>
                </div>
                <div>
                  <Globe className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-gray-300">Visa-Free</div>
                  <div className="text-xs font-semibold text-white">{program.overview.visaFreeCountries}+</div>
                </div>
                <div>
                  <Home className="h-5 w-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-gray-300">Residency</div>
                  <div className="text-xs font-semibold text-white">{program.overview.residencyRequired}</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={() => setShowConsultationModal(true)}
                className="flex-1 bg-accent text-primary hover:bg-accent/90 text-sm py-2"
              >
                <Calendar className="mr-1 h-4 w-4" />
                Consult
              </Button>
              <Button 
                onClick={() => setShowApplicationModal(true)}
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white hover:text-primary text-sm py-2"
              >
                <Send className="mr-1 h-4 w-4" />
                Apply
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Content */}
      <section className="py-4 bg-white md:hidden">
        <div className="max-w-4xl mx-auto px-4">
          {/* Mobile Benefits Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg text-center">
              <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <div className="text-xs font-medium text-green-800">
                {program.benefits[0]}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg text-center">
              <Globe className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <div className="text-xs font-medium text-blue-800">
                {program.overview.visaFreeCountries}+ Countries
              </div>
            </div>
          </div>

          {/* Mobile Content Stack */}
          <div className="space-y-4">
            {/* Process Steps - Mobile */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Process
              </h3>
              <div className="space-y-2">
                {program.process.slice(0, 4).map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm">{step.title}</div>
                      <div className="text-xs text-gray-600">{step.timeframe}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents - Mobile */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Documents
              </h3>
              <div className="space-y-2">
                {program.documents.map((category, index) => (
                  <div key={index}>
                    <div className="font-medium text-gray-800 text-sm mb-1">{category.category}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      {category.items.slice(0, 2).join(', ')}
                      {category.items.length > 2 && ` +${category.items.length - 2} more`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ - Mobile */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Common Questions
              </h3>
              <div className="space-y-3">
                {program.faqs.slice(0, 3).map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full text-left flex items-start justify-between"
                    >
                      <span className="font-medium text-gray-800 text-sm pr-2">{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform flex-shrink-0 mt-0.5 ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFAQ === index && (
                      <div className="mt-2 text-xs text-gray-600 pl-2 border-l-2 border-accent leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods - Mobile */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment
              </h3>
              <div className="space-y-2">
                {program.paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Banknote className="h-3 w-3 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm">{method.method}</div>
                      <div className="text-xs text-gray-600">{method.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Content */}
      <section className="hidden md:block py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop Benefits Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
              <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-green-800">
                {program.benefits[0]}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
              <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-blue-800">
                {program.overview.visaFreeCountries}+ Countries
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg text-center">
              <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-amber-800">
                {program.overview.processingTime}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
              <DollarSign className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-purple-800">
                From {program.overview.investmentRange.split(' - ')[0]}
              </div>
            </div>
          </div>

          {/* Desktop Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Process Steps */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Application Process
                </h3>
                <div className="space-y-3">
                  {program.process.slice(0, 4).map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{step.title}</div>
                        <div className="text-sm text-gray-600">{step.timeframe}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Required Documents
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {program.documents.map((category, index) => (
                    <div key={index}>
                      <div className="font-medium text-gray-800 mb-1">{category.category}</div>
                      <div className="text-sm text-gray-600">
                        {category.items.slice(0, 3).join(', ')}
                        {category.items.length > 3 && ` +${category.items.length - 3} more`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick FAQ */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {program.faqs.slice(0, 3).map((faq, index) => (
                    <div key={index}>
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full text-left flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-800 text-sm">{faq.question}</span>
                        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFAQ === index && (
                        <div className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-accent">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Options
                </h3>
                <div className="space-y-3">
                  {program.paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                        <Banknote className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{method.method}</div>
                        <div className="text-xs text-gray-600">{method.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="bg-[#183B4E] rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Ready to Start?</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => setShowConsultationModal(true)}
                    className="w-full bg-accent text-primary hover:bg-accent/90"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Button>
                  <Button 
                    onClick={() => setShowApplicationModal(true)}
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Start Application
                  </Button>
                  <div className="text-center pt-2">
                    <div className="text-sm opacity-90">
                      <Phone className="h-4 w-4 inline mr-1" />
                      +1 (555) 123-4567
                    </div>
                    <div className="text-sm opacity-90">
                      <Mail className="h-4 w-4 inline mr-1" />
                      info@raizingsovereign.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Contact Section */}
      <div className="hidden md:block">
        <section className="py-8 bg-[#183B4E]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-white space-y-4">
              <h3 className="text-xl font-bold">Ready to Start?</h3>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-accent text-primary hover:bg-accent/90"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Free Consultation
                </Button>
                <Button 
                  onClick={() => setShowApplicationModal(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Start Application
                </Button>
              </div>
              <div className="text-sm opacity-90">
                <Phone className="h-4 w-4 inline mr-1" />
                +1 (555) 123-4567 | 
                <Mail className="h-4 w-4 inline mx-1" />
                info@globalcitizen.com
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add bottom padding for mobile fixed bar */}
      <div className="md:hidden h-20"></div>

    

      {/* Consultation Modal */}
      <Dialog open={showConsultationModal} onOpenChange={setShowConsultationModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">
              Book Free Consultation
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleConsultationSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cons-firstName">First Name</Label>
                <Input
                  id="cons-firstName"
                  type="text"
                  value={consultationFormData.firstName}
                  onChange={(e) => handleConsultationInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cons-lastName">Last Name</Label>
                <Input
                  id="cons-lastName"
                  type="text"
                  value={consultationFormData.lastName}
                  onChange={(e) => handleConsultationInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="cons-email">Email</Label>
              <Input
                id="cons-email"
                type="email"
                value={consultationFormData.email}
                onChange={(e) => handleConsultationInputChange('email', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="cons-phone">Phone Number</Label>
              <Input
                id="cons-phone"
                type="tel"
                value={consultationFormData.phone}
                onChange={(e) => handleConsultationInputChange('phone', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label>Consultation Type</Label>
              <RadioGroup 
                value={consultationFormData.consultationType} 
                onValueChange={(value) => handleConsultationInputChange('consultationType', value)}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="cons-online" />
                  <Label htmlFor="cons-online">Online</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="in-person" id="cons-in-person" />
                  <Label htmlFor="cons-in-person">In-Person</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="cons-phone-call" />
                  <Label htmlFor="cons-phone-call">Phone</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-white py-4 text-lg font-semibold hover:bg-primary/90"
              disabled={createConsultationMutation.isPending}
            >
              {createConsultationMutation.isPending ? "Scheduling..." : "Schedule Consultation"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">
              Start Application
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="app-firstName">First Name</Label>
                <Input
                  id="app-firstName"
                  type="text"
                  value={applicationFormData.firstName}
                  onChange={(e) => handleApplicationInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="app-lastName">Last Name</Label>
                <Input
                  id="app-lastName"
                  type="text"
                  value={applicationFormData.lastName}
                  onChange={(e) => handleApplicationInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="app-email">Email</Label>
              <Input
                id="app-email"
                type="email"
                value={applicationFormData.email}
                onChange={(e) => handleApplicationInputChange('email', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="app-phone">Phone Number</Label>
              <Input
                id="app-phone"
                type="tel"
                value={applicationFormData.phone}
                onChange={(e) => handleApplicationInputChange('phone', e.target.value)}
                required
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                This will start your preliminary application for <strong>{program.title}</strong>. 
                Our team will contact you within 24 hours to begin the process.
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-accent text-primary py-4 text-lg font-semibold hover:bg-accent/90"
              disabled={createApplicationMutation.isPending}
            >
              {createApplicationMutation.isPending ? "Submitting..." : "Start Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <DialogTitle className="text-center text-2xl font-bold text-primary">
              Thank You!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              {successType === 'consultation' 
                ? "Your consultation request has been submitted successfully. Our team will contact you within 24 hours."
                : "Your application has been submitted successfully. Our team will contact you within 24 hours to begin the process."
              }
            </p>
            <Button onClick={() => setShowSuccessModal(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}