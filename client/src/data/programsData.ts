export interface ProgramData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  heroVideo?: string;
  category: string;
  badge?: string;
  badgeColor?: string;
  overview: {
    investmentRange: string;
    processingTime: string;
    visaFreeCountries: number;
    residencyRequired: string;
  };
  process: {
    title: string;
    icon: string;
    description: string;
    timeframe: string;
  }[];
  documents: {
    category: string;
    icon: string;
    items: string[];
  }[];
  paymentMethods: {
    method: string;
    icon: string;
    description: string;
    fees?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  eligibility: string[];
}

export const programsData: Record<string, ProgramData> = {
  "stkitts": {
    id: "stkitts",
    title: "St. Kitts & Nevis Citizenship",
    description: "Obtain citizenship in 3-6 months through a government fund donation or real estate investment.",
    benefits: ["Visa-free travel to 156+ countries", "No residency requirement", "Includes spouse and dependents", "Lifetime citizenship"],
    image: "https://images.unsplash.com/photo-1580541631950-7282082b53fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "caribbean",
    badge: "Featured",
    badgeColor: "bg-accent/10 text-accent",
    overview: {
      investmentRange: "$250,000 - $400,000",
      processingTime: "3-6 months",
      visaFreeCountries: 156,
      residencyRequired: "None"
    },
    process: [
      {
        title: "Initial Assessment",
        icon: "UserCheck",
        description: "Complete eligibility assessment and program selection",
        timeframe: "1-2 days"
      },
      {
        title: "Document Collection",
        icon: "FileText",
        description: "Gather and authenticate all required documentation",
        timeframe: "2-4 weeks"
      },
      {
        title: "Investment & Application",
        icon: "CreditCard",
        description: "Make investment and submit complete application",
        timeframe: "1 week"
      },
      {
        title: "Government Processing",
        icon: "Clock",
        description: "Government review and due diligence checks",
        timeframe: "3-4 months"
      },
      {
        title: "Citizenship Certificate",
        icon: "Award",
        description: "Receive citizenship certificate and passport",
        timeframe: "2-4 weeks"
      }
    ],
    documents: [
      {
        category: "Personal Documents",
        icon: "User",
        items: [
          "Birth certificate (apostilled)",
          "Marriage certificate (if applicable)",
          "Divorce decree (if applicable)",
          "Valid passport (6+ months validity)",
          "Passport-style photographs",
          "Educational certificates"
        ]
      },
      {
        category: "Legal Documents",
        icon: "Shield",
        items: [
          "Police clearance certificate",
          "Medical examination report",
          "Character references (2-3)",
          "Proof of current residence",
          "Name change documents (if applicable)"
        ]
      },
      {
        category: "Financial Documents",
        icon: "DollarSign",
        items: [
          "Bank statements (6 months)",
          "Source of funds documentation",
          "Investment confirmation",
          "Tax returns (3 years)",
          "Professional reference letter"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "Wire Transfer",
        icon: "Banknote",
        description: "Direct bank-to-bank transfer to government account",
        fees: "Bank fees apply"
      },
      {
        method: "Certified Bank Draft",
        icon: "Receipt",
        description: "Bank-guaranteed payment instrument",
        fees: "Bank fees apply"
      },
      {
        method: "Escrow Service",
        icon: "Shield",
        description: "Third-party escrow for secure transactions",
        fees: "0.5% - 1.0%"
      }
    ],
    faqs: [
      {
        question: "What is the minimum investment required?",
        answer: "The minimum investment is $250,000 for a single applicant through the Sustainable Island State Contribution (SISC). Family applications start at $300,000."
      },
      {
        question: "How long does the process take?",
        answer: "The complete process typically takes 3-6 months from submission of complete documentation to receiving citizenship certificate."
      },
      {
        question: "Can I include my family?",
        answer: "Yes, you can include your spouse, children under 30, and parents over 55 in your application for additional fees."
      },
      {
        question: "Do I need to visit St. Kitts & Nevis?",
        answer: "No physical residency requirement exists. However, you may choose to visit during the oath-taking ceremony."
      },
      {
        question: "What countries can I visit visa-free?",
        answer: "St. Kitts & Nevis passport holders enjoy visa-free or visa-on-arrival access to 156+ countries including the UK, EU Schengen Area, and many others."
      }
    ],
    eligibility: [
      "18+ years of age",
      "Clean criminal record",
      "Good health status",
      "Legitimate source of funds",
      "No citizenship from sanctioned countries"
    ]
  },
  "grenada": {
    id: "grenada",
    title: "Grenada Citizenship",
    description: "Secure a powerful passport with visa-free access to China, Russia, and E-2 Treaty Investor visa eligibility for the USA.",
    benefits: ["E-2 Treaty with USA", "Visa-free travel to 144+ countries", "No physical residency required", "Process in 4-6 months"],
    image: "https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "caribbean",
    badge: "E-2 Treaty",
    badgeColor: "bg-green-100 text-green-800",
    overview: {
      investmentRange: "$220,000 - $350,000",
      processingTime: "4-6 months",
      visaFreeCountries: 144,
      residencyRequired: "None"
    },
    process: [
      {
        title: "Eligibility Review",
        icon: "UserCheck",
        description: "Comprehensive eligibility assessment and program consultation",
        timeframe: "1-3 days"
      },
      {
        title: "Documentation",
        icon: "FileText",
        description: "Complete document preparation and authentication",
        timeframe: "3-5 weeks"
      },
      {
        title: "Investment Decision",
        icon: "Home",
        description: "Choose between real estate or National Transformation Fund",
        timeframe: "1-2 weeks"
      },
      {
        title: "Application Submission",
        icon: "Send",
        description: "Submit complete application to Grenada CBI Unit",
        timeframe: "1 week"
      },
      {
        title: "Government Processing",
        icon: "Clock",
        description: "Due diligence and government review process",
        timeframe: "4-5 months"
      },
      {
        title: "Citizenship & Passport",
        icon: "Award",
        description: "Receive citizenship certificate and passport application",
        timeframe: "2-3 weeks"
      }
    ],
    documents: [
      {
        category: "Identity Documents",
        icon: "User",
        items: [
          "Birth certificate (apostilled)",
          "Valid passport (full bio page)",
          "Marriage/divorce certificates",
          "Passport photographs (recent)",
          "Name change documents (if any)",
          "Children's birth certificates"
        ]
      },
      {
        category: "Background Checks",
        icon: "Shield",
        items: [
          "Police clearance certificate",
          "Medical examination certificate",
          "Professional references (3)",
          "Character affidavit",
          "Military service records (if applicable)"
        ]
      },
      {
        category: "Financial Verification",
        icon: "DollarSign",
        items: [
          "Bank statements (6 months)",
          "Audited financial statements",
          "Source of wealth declaration",
          "Investment confirmation letter",
          "Tax compliance certificate"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "Government Wire Transfer",
        icon: "Banknote",
        description: "Direct transfer to Grenada government account",
        fees: "Standard banking fees"
      },
      {
        method: "Real Estate Investment",
        icon: "Home",
        description: "Investment in approved real estate projects",
        fees: "Government fees + legal costs"
      },
      {
        method: "Escrow Account",
        icon: "Shield",
        description: "Secure escrow service for fund protection",
        fees: "0.75% - 1.25%"
      }
    ],
    faqs: [
      {
        question: "What makes Grenada citizenship special?",
        answer: "Grenada is the only Caribbean citizenship program that offers E-2 Treaty Investor visa eligibility for the USA, allowing you to live and work in America."
      },
      {
        question: "What are the investment options?",
        answer: "You can invest $220,000 in the National Transformation Fund or $350,000+ in approved real estate projects."
      },
      {
        question: "Can I apply for a US E-2 visa?",
        answer: "Yes, Grenada citizens can apply for the US E-2 Treaty Investor visa by investing in a US business, allowing residence in the United States."
      },
      {
        question: "Is there a residency requirement?",
        answer: "No, there is no physical residency requirement to obtain or maintain Grenada citizenship."
      },
      {
        question: "How long is the processing time?",
        answer: "The government processing time is typically 4-6 months from submission of complete documentation."
      }
    ],
    eligibility: [
      "18+ years of age",
      "Clean criminal background",
      "Good health certificate",
      "Proof of legitimate funds",
      "No conflicts with Grenada's interests"
    ]
  },
  "dominica": {
    id: "dominica",
    title: "Dominica Citizenship",
    description: "One of the most affordable citizenship programs with a well-respected passport and straightforward process.",
    benefits: ["Visa-free travel to 140+ countries", "Affordable minimum investment", "Full family inclusion", "Citizenship for life"],
    image: "https://images.unsplash.com/photo-1597900931468-a3f23fd25fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1544737151-6e4b3999de2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "caribbean",
    overview: {
      investmentRange: "$200,000 - $250,000",
      processingTime: "3-5 months",
      visaFreeCountries: 140,
      residencyRequired: "None"
    },
    process: [
      {
        title: "Eligibility Assessment",
        icon: "UserCheck",
        description: "Initial evaluation and program overview consultation",
        timeframe: "1-2 days"
      },
      {
        title: "Document Preparation",
        icon: "FileText",
        description: "Compile and certify all required documentation",
        timeframe: "2-3 weeks"
      },
      {
        title: "Application Filing",
        icon: "Send",
        description: "Submit application to Dominica CIU",
        timeframe: "1 week"
      },
      {
        title: "Government Review",
        icon: "Clock",
        description: "Due diligence and application processing",
        timeframe: "3-4 months"
      },
      {
        title: "Citizenship Grant",
        icon: "Award",
        description: "Certificate issuance and passport application",
        timeframe: "2-3 weeks"
      }
    ],
    documents: [
      {
        category: "Personal Documents",
        icon: "User",
        items: [
          "Birth certificate (certified)",
          "Marriage certificate (if applicable)",
          "Current passport",
          "Passport photographs",
          "Academic qualifications"
        ]
      },
      {
        category: "Legal Requirements",
        icon: "Shield",
        items: [
          "Police clearance certificate",
          "Medical certificate",
          "Character references",
          "Sworn affidavit"
        ]
      },
      {
        category: "Financial Documentation",
        icon: "DollarSign",
        items: [
          "Bank statements",
          "Source of funds evidence",
          "Investment confirmation",
          "Tax documents"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "Wire Transfer",
        icon: "Banknote",
        description: "Direct transfer to government fund",
        fees: "Banking charges apply"
      },
      {
        method: "Bank Draft",
        icon: "Receipt",
        description: "Certified bank draft payment",
        fees: "Issuance fees apply"
      }
    ],
    faqs: [
      {
        question: "What is the minimum investment?",
        answer: "The minimum contribution to the Economic Diversification Fund is $200,000 for a single applicant."
      },
      {
        question: "How fast is the process?",
        answer: "Applications are typically processed within 3-5 months from submission."
      },
      {
        question: "Can family members be included?",
        answer: "Yes, spouse and dependent children can be included in the application."
      }
    ],
    eligibility: [
      "18+ years of age",
      "Good character",
      "Clean criminal record",
      "Source of funds verification"
    ]
  },
  "malta": {
    id: "malta",
    title: "Malta Citizenship",
    description: "Acquire citizenship in an EU member state with one of the most respected passports in the world.",
    benefits: ["EU citizenship", "Visa-free travel to 186+ countries", "Strong economy & quality of life", "Access to EU healthcare & education"],
    image: "https://images.unsplash.com/photo-1605196560602-a547b6d2460f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "europe",
    badge: "EU Citizenship",
    badgeColor: "bg-blue-100 text-blue-800",
    overview: {
      investmentRange: "€690,000 - €1,050,000",
      processingTime: "12-36 months",
      visaFreeCountries: 186,
      residencyRequired: "12 months minimum"
    },
    process: [
      {
        title: "Preliminary Assessment",
        icon: "UserCheck",
        description: "Eligibility review and program explanation",
        timeframe: "1-2 weeks"
      },
      {
        title: "Initial Application",
        icon: "FileText",
        description: "Submit Letter of Intent and initial documentation",
        timeframe: "4-6 weeks"
      },
      {
        title: "Due Diligence",
        icon: "Search",
        description: "Comprehensive background checks and verification",
        timeframe: "4-6 months"
      },
      {
        title: "Investment Completion",
        icon: "CreditCard",
        description: "Complete all required investments and contributions",
        timeframe: "2-4 weeks"
      },
      {
        title: "Residency Period",
        icon: "Home",
        description: "Maintain physical residence in Malta",
        timeframe: "12 months"
      },
      {
        title: "Naturalization",
        icon: "Award",
        description: "Citizenship certificate and EU passport issuance",
        timeframe: "2-3 months"
      }
    ],
    documents: [
      {
        category: "Personal Documentation",
        icon: "User",
        items: [
          "Birth certificate (apostilled)",
          "Marriage certificate (if applicable)",
          "Passport copies (all pages)",
          "Recent passport photographs",
          "Educational qualifications",
          "Employment history documentation"
        ]
      },
      {
        category: "Legal Requirements",
        icon: "Shield",
        items: [
          "Police clearance certificates (all countries of residence)",
          "Medical certificate",
          "Character references (professional)",
          "Sworn affidavit of good character",
          "Court records (if applicable)"
        ]
      },
      {
        category: "Financial Documentation",
        icon: "DollarSign",
        items: [
          "Audited financial statements (3 years)",
          "Bank statements (12 months)",
          "Source of wealth documentation",
          "Tax returns and compliance certificates",
          "Investment fund confirmations"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "Bank Transfer (EUR)",
        icon: "Banknote",
        description: "SEPA transfer to Malta government accounts",
        fees: "Standard banking fees"
      },
      {
        method: "Real Estate Purchase",
        icon: "Home",
        description: "Property acquisition in Malta (hold for 5 years)",
        fees: "5% stamp duty + legal fees"
      },
      {
        method: "Government Bonds",
        icon: "TrendingUp",
        description: "Investment in Malta Government stocks/bonds",
        fees: "Management fees apply"
      }
    ],
    faqs: [
      {
        question: "What are the investment requirements?",
        answer: "You must contribute €690,000 to the National Development Fund, plus €700,000 in real estate (or €16,000/year rental), and €150,000 in government bonds/stocks."
      },
      {
        question: "How long must I live in Malta?",
        answer: "You must maintain physical residence in Malta for at least 12 months before becoming eligible for citizenship."
      },
      {
        question: "What are the benefits of EU citizenship?",
        answer: "EU citizenship provides the right to live, work, and study anywhere in the European Union, plus visa-free travel to 186+ countries worldwide."
      },
      {
        question: "Can my family be included?",
        answer: "Yes, your spouse, dependent children, and dependent parents can be included in the application for additional contributions."
      },
      {
        question: "Is Malta English-speaking?",
        answer: "Yes, English is one of Malta's official languages alongside Maltese, making integration easier for English speakers."
      }
    ],
    eligibility: [
      "18+ years of age",
      "Exceptional character and reputation",
      "No criminal convictions",
      "Significant net worth",
      "Clean source of funds",
      "Health insurance coverage"
    ]
  },
  "portugal": {
    id: "portugal",
    title: "Portugal Golden Visa",
    description: "Residency in a European country with a path to citizenship after 5 years through various investment options.",
    benefits: ["Path to EU citizenship", "Minimal stay requirement", "Inclusion of family members", "Access to Schengen Area"],
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "europe",
    badge: "Golden Visa",
    badgeColor: "bg-yellow-100 text-yellow-800",
    overview: {
      investmentRange: "€280,000 - €500,000",
      processingTime: "6-12 months",
      visaFreeCountries: 186,
      residencyRequired: "7 days/year average"
    },
    process: [
      {
        title: "Investment Selection",
        icon: "Target",
        description: "Choose qualifying investment option",
        timeframe: "1-4 weeks"
      },
      {
        title: "Document Preparation",
        icon: "FileText",
        description: "Gather and authenticate documentation",
        timeframe: "4-8 weeks"
      },
      {
        title: "Application Submission",
        icon: "Send",
        description: "Submit application to AIMA",
        timeframe: "1-2 weeks"
      },
      {
        title: "Government Processing",
        icon: "Clock",
        description: "Review and approval process",
        timeframe: "6-8 months"
      },
      {
        title: "Residence Card Issuance",
        icon: "CreditCard",
        description: "Receive Golden Visa residence permit",
        timeframe: "2-4 weeks"
      }
    ],
    documents: [
      {
        category: "Personal Documents",
        icon: "User",
        items: [
          "Birth certificate (apostilled)",
          "Marriage certificate (if applicable)",
          "Passport (valid)",
          "Criminal background check",
          "Health insurance certificate"
        ]
      },
      {
        category: "Financial Documents",
        icon: "DollarSign",
        items: [
          "Bank statements",
          "Investment documentation",
          "Source of funds proof",
          "Tax residence certificate",
          "Income verification"
        ]
      },
      {
        category: "Investment Proof",
        icon: "Home",
        items: [
          "Property purchase agreement",
          "Investment fund certificate",
          "Business investment proof",
          "Bank transfer confirmations"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "Property Investment",
        icon: "Home",
        description: "Real estate acquisition in qualifying areas",
        fees: "Transfer tax + legal fees"
      },
      {
        method: "Investment Funds",
        icon: "TrendingUp",
        description: "Qualifying investment fund contribution",
        fees: "Management fees apply"
      },
      {
        method: "Capital Transfer",
        icon: "Banknote",
        description: "Capital transfer to Portuguese institution",
        fees: "Banking fees"
      }
    ],
    faqs: [
      {
        question: "What are the investment options?",
        answer: "Options include €280,000+ in qualifying investment funds, €350,000+ in research/innovation, or €500,000+ in real estate in low-density areas."
      },
      {
        question: "What is the residency requirement?",
        answer: "You must spend an average of 7 days per year in Portugal to maintain your Golden Visa status."
      },
      {
        question: "When can I apply for citizenship?",
        answer: "After 5 years of legal residence, you can apply for Portuguese citizenship, which grants EU citizenship."
      }
    ],
    eligibility: [
      "18+ years of age",
      "Clean criminal record",
      "Health insurance",
      "Qualifying investment",
      "Proof of funds"
    ]
  },
  "useb5": {
    id: "useb5",
    title: "U.S. EB-5 Investor Visa",
    description: "Permanent residency in the USA through investment in new commercial enterprises creating American jobs.",
    benefits: ["Green card for investor & family", "Path to US citizenship", "Investment from $800,000", "Live & work anywhere in the US"],
    image: "https://images.unsplash.com/photo-1565876427205-a08fee1d2e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroVideo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "north-america",
    badge: "Green Card",
    badgeColor: "bg-red-100 text-red-800",
    overview: {
      investmentRange: "$800,000 - $1,050,000",
      processingTime: "24-36 months",
      visaFreeCountries: 186,
      residencyRequired: "Physical presence required"
    },
    process: [
      {
        title: "Project Selection",
        icon: "Building",
        description: "Choose qualifying EB-5 investment project",
        timeframe: "2-8 weeks"
      },
      {
        title: "I-526E Filing",
        icon: "FileText",
        description: "File immigrant petition with USCIS",
        timeframe: "2-4 weeks"
      },
      {
        title: "USCIS Processing",
        icon: "Clock",
        description: "Government review of I-526E petition",
        timeframe: "18-24 months"
      },
      {
        title: "Consular Processing",
        icon: "Plane",
        description: "Visa interview and entry to US",
        timeframe: "3-6 months"
      },
      {
        title: "Conditional Green Card",
        icon: "CreditCard",
        description: "Receive 2-year conditional permanent residence",
        timeframe: "2-4 weeks"
      },
      {
        title: "I-829 Filing",
        icon: "Award",
        description: "Remove conditions and obtain permanent green card",
        timeframe: "6-12 months"
      }
    ],
    documents: [
      {
        category: "Personal Documents",
        icon: "User",
        items: [
          "Birth certificates",
          "Marriage certificates",
          "Passport copies",
          "Police clearance certificates",
          "Medical examination results",
          "Military records (if applicable)"
        ]
      },
      {
        category: "Financial Documents",
        icon: "DollarSign",
        items: [
          "Bank statements (2+ years)",
          "Tax returns (5 years)",
          "Audited financial statements",
          "Source of funds documentation",
          "Business ownership documents",
          "Asset valuations"
        ]
      },
      {
        category: "Investment Documentation",
        icon: "Building",
        items: [
          "Private placement memorandum",
          "Subscription agreement",
          "Escrow agreement",
          "Business plan",
          "Economic impact study",
          "Job creation projections"
        ]
      }
    ],
    paymentMethods: [
      {
        method: "EB-5 Regional Center",
        icon: "Building",
        description: "Investment through USCIS-designated regional centers",
        fees: "Administrative + legal fees"
      },
      {
        method: "Direct Investment",
        icon: "Briefcase",
        description: "Direct investment in new commercial enterprise",
        fees: "Legal + filing fees"
      },
      {
        method: "Escrow Account",
        icon: "Shield",
        description: "Investment held in escrow until I-526E approval",
        fees: "Escrow + legal fees"
      }
    ],
    faqs: [
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment is $800,000 for projects in Targeted Employment Areas (TEAs) or $1,050,000 for projects in non-TEA areas."
      },
      {
        question: "How many jobs must be created?",
        answer: "Each EB-5 investment must create or preserve at least 10 full-time jobs for qualifying U.S. workers within 2 years."
      },
      {
        question: "Can my family get green cards too?",
        answer: "Yes, your spouse and unmarried children under 21 can receive green cards as derivative beneficiaries of your EB-5 petition."
      },
      {
        question: "How long does the process take?",
        answer: "The complete process typically takes 2-4 years from initial filing to receiving the permanent green card."
      },
      {
        question: "Is the investment at risk?",
        answer: "Yes, EB-5 investments are at-risk investments. There is no guarantee of return of capital, though many projects aim to return investor funds."
      }
    ],
    eligibility: [
      "Investment of $800,000-$1,050,000",
      "Create 10+ full-time jobs",
      "Lawful source of investment funds",
      "Clean criminal background",
      "Good health status",
      "Intent to reside in the US"
    ]
  }
};