import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  processed: boolean("processed").default(false)
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true
});

// Consultation scheduling
export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  confirmed: boolean("confirmed").default(false),
  completed: boolean("completed").default(false)
});

export const insertConsultationSchema = createInsertSchema(consultations).pick({
  name: true,
  email: true,
  phone: true,
  date: true,
  time: true
});

// Newsletter subscriptions
export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true
});

// Brochure requests
export const brochureRequests = pgTable("brochure_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  country: text("country").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  fulfilled: boolean("fulfilled").default(false)
});

export const insertBrochureRequestSchema = createInsertSchema(brochureRequests).pick({
  name: true,
  email: true,
  company: true,
  country: true
});

// Calculator queries
export const calculatorQueries = pgTable("calculator_queries", {
  id: serial("id").primaryKey(),
  region: text("region").notNull(),
  programType: text("program_type").notNull(),
  investmentType: text("investment_type").notNull(),
  budget: text("budget").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  convertedToConsultation: boolean("converted_to_consultation").default(false)
});

export const insertCalculatorQuerySchema = createInsertSchema(calculatorQueries).pick({
  region: true,
  programType: true,
  investmentType: true,
  budget: true
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export type InsertBrochureRequest = z.infer<typeof insertBrochureRequestSchema>;
export type BrochureRequest = typeof brochureRequests.$inferSelect;

export type InsertCalculatorQuery = z.infer<typeof insertCalculatorQuerySchema>;
export type CalculatorQuery = typeof calculatorQueries.$inferSelect;
