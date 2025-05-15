import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Schedule Consultation Form Schema
export const scheduleFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" })
});

export type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;

// Calculator Form Schema
export const calculatorFormSchema = z.object({
  region: z.string().min(1, { message: "Please select a region" }),
  programType: z.string().min(1, { message: "Please select a program type" }),
  investmentType: z.string().min(1, { message: "Please select an investment type" }),
  budget: z.string().min(1, { message: "Please select a budget range" })
});

export type CalculatorFormValues = z.infer<typeof calculatorFormSchema>;

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

// Brochure Request Schema
export const brochureRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  country: z.string().min(1, { message: "Please select your country" })
});

export type BrochureRequestValues = z.infer<typeof brochureRequestSchema>;
