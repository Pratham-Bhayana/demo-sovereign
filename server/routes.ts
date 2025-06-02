import type { Express } from "express";
import { createServer, type Server } from "http";

import { storage } from "./storage";
import { insertConsultationSchema, insertContactSchema, insertApplicationSchema,  } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Failed to process contact form" });
      }
    }
  });

  // API routes for consultation scheduling
  app.post("/api/schedule", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      res.status(201).json({
        message: "Consultation scheduled successfully",
        id: consultation.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error scheduling consultation:", error);
        res.status(500).json({ message: "Failed to schedule consultation" });
      }
    }
  });

  // API routes for newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterByEmail(validatedData.email);
      
      if (existingSubscription) {
        if (existingSubscription.active) {
          return res.status(200).json({ 
            message: "Email is already subscribed to the newsletter" 
          });
        } else {
          // Reactivate subscription
          await storage.updateNewsletterSubscription(existingSubscription.id, true);
          return res.status(200).json({ 
            message: "Newsletter subscription reactivated successfully" 
          });
        }
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      res.status(201).json({
        message: "Newsletter subscription successful",
        id: subscription.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing newsletter subscription:", error);
        res.status(500).json({ message: "Failed to process newsletter subscription" });
      }
    }
  });

  // API routes for brochure requests
  app.post("/api/brochure", async (req, res) => {
    try {
      const validatedData = insertBrochureRequestSchema.parse(req.body);
      const request = await storage.createBrochureRequest(validatedData);
      
      res.status(201).json({
        message: "Brochure request submitted successfully",
        id: request.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing brochure request:", error);
        res.status(500).json({ message: "Failed to process brochure request" });
      }
    }
  });

  // API routes for calculator queries
  app.post("/api/calculator", async (req, res) => {
    try {
      const validatedData = insertCalculatorQuerySchema.parse(req.body);
      const query = await storage.createCalculatorQuery(validatedData);
      
      // For a real app, this would fetch matching programs from a database
      // For now, we'll return success and the query ID
      res.status(201).json({
        message: "Calculator query processed successfully",
        id: query.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error processing calculator query:", error);
        res.status(500).json({ message: "Failed to process calculator query" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
