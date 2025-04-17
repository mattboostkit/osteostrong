import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertBookingSchema, 
  insertNewsletterSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  const apiRouter = express.Router();

  // Contact form submission endpoint
  apiRouter.post("/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(contactData);
      res.status(200).json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting the contact form" 
        });
      }
    }
  });

  // Booking endpoint
  apiRouter.post("/booking", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.status(200).json({ success: true, booking });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while creating the booking" 
        });
      }
    }
  });

  // Get available booking times
  apiRouter.get("/booking/availability", async (req, res) => {
    try {
      const { date, location } = req.query as { date: string, location: string };
      
      if (!date || !location) {
        return res.status(400).json({ 
          success: false, 
          message: "Date and location are required" 
        });
      }
      
      const availableTimes = await storage.getAvailableTimes(date, location);
      res.status(200).json({ success: true, availableTimes });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching available times" 
      });
    }
  });

  // Newsletter subscription endpoint
  apiRouter.post("/newsletter", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.addNewsletterSubscription(newsletterData);
      res.status(200).json({ success: true, subscription });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else if ((error as Error).message.includes("unique")) {
        res.status(400).json({ 
          success: false, 
          message: "Email is already subscribed to the newsletter" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while subscribing to the newsletter" 
        });
      }
    }
  });

  app.use("/api", apiRouter);

  const httpServer = createServer(app);

  return httpServer;
}
