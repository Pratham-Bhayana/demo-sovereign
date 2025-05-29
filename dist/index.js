// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contactSubmissions;
  consultations;
  newsletters;
  brochureRequests;
  calculatorQueries;
  currentUserId;
  currentContactSubmissionId;
  currentConsultationId;
  currentNewsletterId;
  currentBrochureRequestId;
  currentCalculatorQueryId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.consultations = /* @__PURE__ */ new Map();
    this.newsletters = /* @__PURE__ */ new Map();
    this.brochureRequests = /* @__PURE__ */ new Map();
    this.calculatorQueries = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentContactSubmissionId = 1;
    this.currentConsultationId = 1;
    this.currentNewsletterId = 1;
    this.currentBrochureRequestId = 1;
    this.currentCalculatorQueryId = 1;
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const now = /* @__PURE__ */ new Date();
    const user = {
      ...insertUser,
      id,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }
  // Contact submission methods
  async createContactSubmission(submission) {
    const id = this.currentContactSubmissionId++;
    const now = /* @__PURE__ */ new Date();
    const contactSubmission = {
      ...submission,
      id,
      createdAt: now,
      processed: false
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  async getContactSubmission(id) {
    return this.contactSubmissions.get(id);
  }
  async getAllContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
  async updateContactSubmissionStatus(id, processed) {
    const submission = this.contactSubmissions.get(id);
    if (submission) {
      const updatedSubmission = { ...submission, processed };
      this.contactSubmissions.set(id, updatedSubmission);
      return updatedSubmission;
    }
    return void 0;
  }
  // Consultation methods
  async createConsultation(consultation) {
    const id = this.currentConsultationId++;
    const now = /* @__PURE__ */ new Date();
    const newConsultation = {
      ...consultation,
      id,
      createdAt: now,
      confirmed: false,
      completed: false
    };
    this.consultations.set(id, newConsultation);
    return newConsultation;
  }
  async getConsultation(id) {
    return this.consultations.get(id);
  }
  async getAllConsultations() {
    return Array.from(this.consultations.values());
  }
  async updateConsultationStatus(id, confirmed, completed) {
    const consultation = this.consultations.get(id);
    if (consultation) {
      const updatedConsultation = { ...consultation, confirmed, completed };
      this.consultations.set(id, updatedConsultation);
      return updatedConsultation;
    }
    return void 0;
  }
  // Newsletter methods
  async createNewsletterSubscription(subscription) {
    const id = this.currentNewsletterId++;
    const now = /* @__PURE__ */ new Date();
    const newSubscription = {
      ...subscription,
      id,
      createdAt: now,
      active: true
    };
    this.newsletters.set(id, newSubscription);
    return newSubscription;
  }
  async getNewsletterByEmail(email) {
    return Array.from(this.newsletters.values()).find(
      (subscription) => subscription.email === email
    );
  }
  async getAllNewsletterSubscriptions() {
    return Array.from(this.newsletters.values());
  }
  async updateNewsletterSubscription(id, active) {
    const subscription = this.newsletters.get(id);
    if (subscription) {
      const updatedSubscription = { ...subscription, active };
      this.newsletters.set(id, updatedSubscription);
      return updatedSubscription;
    }
    return void 0;
  }
  // Brochure request methods
  async createBrochureRequest(request) {
    const id = this.currentBrochureRequestId++;
    const now = /* @__PURE__ */ new Date();
    const newRequest = {
      ...request,
      id,
      createdAt: now,
      fulfilled: false
    };
    this.brochureRequests.set(id, newRequest);
    return newRequest;
  }
  async getBrochureRequest(id) {
    return this.brochureRequests.get(id);
  }
  async getAllBrochureRequests() {
    return Array.from(this.brochureRequests.values());
  }
  async updateBrochureRequestStatus(id, fulfilled) {
    const request = this.brochureRequests.get(id);
    if (request) {
      const updatedRequest = { ...request, fulfilled };
      this.brochureRequests.set(id, updatedRequest);
      return updatedRequest;
    }
    return void 0;
  }
  // Calculator query methods
  async createCalculatorQuery(query) {
    const id = this.currentCalculatorQueryId++;
    const now = /* @__PURE__ */ new Date();
    const newQuery = {
      ...query,
      id,
      createdAt: now,
      convertedToConsultation: false
    };
    this.calculatorQueries.set(id, newQuery);
    return newQuery;
  }
  async getCalculatorQuery(id) {
    return this.calculatorQueries.get(id);
  }
  async getAllCalculatorQueries() {
    return Array.from(this.calculatorQueries.values());
  }
  async updateCalculatorQueryStatus(id, convertedToConsultation) {
    const query = this.calculatorQueries.get(id);
    if (query) {
      const updatedQuery = { ...query, convertedToConsultation };
      this.calculatorQueries.set(id, updatedQuery);
      return updatedQuery;
    }
    return void 0;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredProgram: text("preferred_program"),
  consultationType: text("consultation_type").notNull().default("online"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("unread"),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  programId: text("program_id").notNull(),
  documentsReady: boolean("documents_ready").notNull().default(false),
  status: text("status").notNull().default("draft"),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  status: true,
  createdAt: true
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  status: true,
  createdAt: true
});
var insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  status: true,
  createdAt: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
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
  app2.post("/api/schedule", async (req, res) => {
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
  app2.post("/api/newsletter", async (req, res) => {
    try {
      const { validatedData } = insertNewsletterSchema.parse(req.body);
      const existingSubscription = await storage.getNewsletterByEmail(validatedData.email);
      if (existingSubscription) {
        if (existingSubscription.active) {
          return res.status(200).json({
            message: "Email is already subscribed to the newsletter"
          });
        } else {
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
  app2.post("/api/brochure", async (req, res) => {
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
  app2.post("/api/calculator", async (req, res) => {
    try {
      const validatedData = insertCalculatorQuerySchema.parse(req.body);
      const query = await storage.createCalculatorQuery(validatedData);
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
