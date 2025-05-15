import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  consultations,
  type Consultation,
  type InsertConsultation,
  newsletters,
  type Newsletter,
  type InsertNewsletter,
  brochureRequests,
  type BrochureRequest,
  type InsertBrochureRequest,
  calculatorQueries,
  type CalculatorQuery,
  type InsertCalculatorQuery
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  updateContactSubmissionStatus(id: number, processed: boolean): Promise<ContactSubmission | undefined>;
  
  // Consultation methods
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultation(id: number): Promise<Consultation | undefined>;
  getAllConsultations(): Promise<Consultation[]>;
  updateConsultationStatus(id: number, confirmed: boolean, completed: boolean): Promise<Consultation | undefined>;
  
  // Newsletter methods
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  getAllNewsletterSubscriptions(): Promise<Newsletter[]>;
  updateNewsletterSubscription(id: number, active: boolean): Promise<Newsletter | undefined>;
  
  // Brochure request methods
  createBrochureRequest(request: InsertBrochureRequest): Promise<BrochureRequest>;
  getBrochureRequest(id: number): Promise<BrochureRequest | undefined>;
  getAllBrochureRequests(): Promise<BrochureRequest[]>;
  updateBrochureRequestStatus(id: number, fulfilled: boolean): Promise<BrochureRequest | undefined>;
  
  // Calculator query methods
  createCalculatorQuery(query: InsertCalculatorQuery): Promise<CalculatorQuery>;
  getCalculatorQuery(id: number): Promise<CalculatorQuery | undefined>;
  getAllCalculatorQueries(): Promise<CalculatorQuery[]>;
  updateCalculatorQueryStatus(id: number, convertedToConsultation: boolean): Promise<CalculatorQuery | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private consultations: Map<number, Consultation>;
  private newsletters: Map<number, Newsletter>;
  private brochureRequests: Map<number, BrochureRequest>;
  private calculatorQueries: Map<number, CalculatorQuery>;
  private currentUserId: number;
  private currentContactSubmissionId: number;
  private currentConsultationId: number;
  private currentNewsletterId: number;
  private currentBrochureRequestId: number;
  private currentCalculatorQueryId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.consultations = new Map();
    this.newsletters = new Map();
    this.brochureRequests = new Map();
    this.calculatorQueries = new Map();
    this.currentUserId = 1;
    this.currentContactSubmissionId = 1;
    this.currentConsultationId = 1;
    this.currentNewsletterId = 1;
    this.currentBrochureRequestId = 1;
    this.currentCalculatorQueryId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: now 
    };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const now = new Date();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: now,
      processed: false
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async updateContactSubmissionStatus(id: number, processed: boolean): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    if (submission) {
      const updatedSubmission = { ...submission, processed };
      this.contactSubmissions.set(id, updatedSubmission);
      return updatedSubmission;
    }
    return undefined;
  }

  // Consultation methods
  async createConsultation(consultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentConsultationId++;
    const now = new Date();
    const newConsultation: Consultation = {
      ...consultation,
      id,
      createdAt: now,
      confirmed: false,
      completed: false
    };
    this.consultations.set(id, newConsultation);
    return newConsultation;
  }

  async getConsultation(id: number): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async updateConsultationStatus(id: number, confirmed: boolean, completed: boolean): Promise<Consultation | undefined> {
    const consultation = this.consultations.get(id);
    if (consultation) {
      const updatedConsultation = { ...consultation, confirmed, completed };
      this.consultations.set(id, updatedConsultation);
      return updatedConsultation;
    }
    return undefined;
  }

  // Newsletter methods
  async createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const now = new Date();
    const newSubscription: Newsletter = {
      ...subscription,
      id,
      createdAt: now,
      active: true
    };
    this.newsletters.set(id, newSubscription);
    return newSubscription;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (subscription) => subscription.email === email,
    );
  }

  async getAllNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async updateNewsletterSubscription(id: number, active: boolean): Promise<Newsletter | undefined> {
    const subscription = this.newsletters.get(id);
    if (subscription) {
      const updatedSubscription = { ...subscription, active };
      this.newsletters.set(id, updatedSubscription);
      return updatedSubscription;
    }
    return undefined;
  }

  // Brochure request methods
  async createBrochureRequest(request: InsertBrochureRequest): Promise<BrochureRequest> {
    const id = this.currentBrochureRequestId++;
    const now = new Date();
    const newRequest: BrochureRequest = {
      ...request,
      id,
      createdAt: now,
      fulfilled: false
    };
    this.brochureRequests.set(id, newRequest);
    return newRequest;
  }

  async getBrochureRequest(id: number): Promise<BrochureRequest | undefined> {
    return this.brochureRequests.get(id);
  }

  async getAllBrochureRequests(): Promise<BrochureRequest[]> {
    return Array.from(this.brochureRequests.values());
  }

  async updateBrochureRequestStatus(id: number, fulfilled: boolean): Promise<BrochureRequest | undefined> {
    const request = this.brochureRequests.get(id);
    if (request) {
      const updatedRequest = { ...request, fulfilled };
      this.brochureRequests.set(id, updatedRequest);
      return updatedRequest;
    }
    return undefined;
  }

  // Calculator query methods
  async createCalculatorQuery(query: InsertCalculatorQuery): Promise<CalculatorQuery> {
    const id = this.currentCalculatorQueryId++;
    const now = new Date();
    const newQuery: CalculatorQuery = {
      ...query,
      id,
      createdAt: now,
      convertedToConsultation: false
    };
    this.calculatorQueries.set(id, newQuery);
    return newQuery;
  }

  async getCalculatorQuery(id: number): Promise<CalculatorQuery | undefined> {
    return this.calculatorQueries.get(id);
  }

  async getAllCalculatorQueries(): Promise<CalculatorQuery[]> {
    return Array.from(this.calculatorQueries.values());
  }

  async updateCalculatorQueryStatus(id: number, convertedToConsultation: boolean): Promise<CalculatorQuery | undefined> {
    const query = this.calculatorQueries.get(id);
    if (query) {
      const updatedQuery = { ...query, convertedToConsultation };
      this.calculatorQueries.set(id, updatedQuery);
      return updatedQuery;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
