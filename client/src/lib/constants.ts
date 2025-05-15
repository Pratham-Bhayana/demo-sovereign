// Program regions and options
export const PROGRAM_REGIONS = [
  { id: "all", name: "All Programs" },
  { id: "caribbean", name: "Caribbean" },
  { id: "europe", name: "Europe" },
  { id: "northAmerica", name: "North America" },
  { id: "oceania", name: "Oceania" }
];

// Program types
export const PROGRAM_TYPES = [
  { id: "citizenship", name: "Citizenship by Investment" },
  { id: "residency", name: "Residency by Investment" },
  { id: "both", name: "Both Options" }
];

// Investment types
export const INVESTMENT_TYPES = [
  { id: "realestate", name: "Real Estate" },
  { id: "business", name: "Business Investment" },
  { id: "donation", name: "Government Fund Donation" },
  { id: "bonds", name: "Government Bonds" }
];

// Budget ranges
export const BUDGET_RANGES = [
  { id: "100k-250k", name: "$100,000 - $250,000" },
  { id: "250k-500k", name: "$250,000 - $500,000" },
  { id: "500k-1m", name: "$500,000 - $1,000,000" },
  { id: "1m+", name: "$1,000,000+" }
];

// Available consultation times
export const CONSULTATION_TIMES = [
  { id: "09:00", display: "09:00 AM" },
  { id: "10:00", display: "10:00 AM" },
  { id: "11:00", display: "11:00 AM" },
  { id: "12:00", display: "12:00 PM" },
  { id: "13:00", display: "01:00 PM" },
  { id: "14:00", display: "02:00 PM" },
  { id: "15:00", display: "03:00 PM" },
  { id: "16:00", display: "04:00 PM" },
  { id: "17:00", display: "05:00 PM" }
];

// Contact form subject options
export const CONTACT_SUBJECTS = [
  { id: "citizenship", name: "Citizenship Programs" },
  { id: "residency", name: "Residency Programs" },
  { id: "investment", name: "Investment Advisory" },
  { id: "general", name: "General Inquiry" }
];

// Services details
export const SERVICES = [
  {
    id: "citizenship",
    icon: "fa-passport",
    title: "Citizenship Programs",
    description: "Secure a second passport through a fast, legally compliant process with government-approved Citizenship by Investment programs.",
    points: [
      "Comprehensive Due Diligence",
      "Documentation Support",
      "Personalized Investment Guidance",
      "Application Tracking & Real-Time Updates",
      "Seamless Passport & Citizenship Delivery"
    ]
  },
  {
    id: "residency",
    icon: "fa-home",
    title: "Residency Programs",
    description: "Gain legal residency in top-tier countries through strategic investments in real estate, business ventures, or government funds.",
    points: [
      "Tailored Program Selection",
      "Expert Real Estate Investment Guidance",
      "Business Establishment & Planning Support",
      "Residency Application & Renewal Management",
      "Citizenship Planning & Long-Term Strategy"
    ]
  },
  {
    id: "investment",
    icon: "fa-chart-line",
    title: "Investment Advisory",
    description: "Receive expert guidance on selecting and managing investments that support your immigration pathway and long-term financial success.",
    points: [
      "Customized Investment Portfolio Design",
      "Comprehensive Risk Assessment & Mitigation",
      "Real Estate Market Analysis & Property Selection",
      "Expert Advice on Government Fund Contributions",
      "Ongoing Investment Management & Support"
    ]
  },
  {
    id: "additional",
    icon: "fa-plus-circle",
    title: "Additional Services",
    description: "We offer comprehensive end-to-end support to ensure a seamless transition to your new country of residence or citizenship.",
    points: [
      "Tax Planning & Financial Optimization",
      "Family Relocation & Settlement Assistance",
      "Education & Healthcare Guidance",
      "Language & Cultural Integration Support",
      "Business Networking & Strategic Introductions"
    ]
  }
];

// Social media links
export const SOCIAL_LINKS = [
  { id: "facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/raizingsovereign" },
  { id: "twitter", icon: "fab fa-twitter", url: "https://twitter.com/raizingsovereign" },
  { id: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com/company/raizingsovereign" },
  { id: "instagram", icon: "fab fa-instagram", url: "https://instagram.com/raizingsovereign" }
];

// Company information
export const COMPANY_INFO = {
  name: "Raizing Sovereign",
  email: "info@raizingsovereign.com",
  phone: "+1 (800) 123-4567",
  address: "1234 Global Avenue, Suite 500, New York, NY 10001, USA",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 2:00 PM"
};
