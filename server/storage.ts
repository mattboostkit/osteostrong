import { 
  users, 
  type User, 
  type InsertUser, 
  contactSubmissions, 
  type ContactSubmission, 
  type InsertContact, 
  bookings, 
  type Booking, 
  type InsertBooking, 
  newsletterSubscriptions, 
  type NewsletterSubscription, 
  type InsertNewsletter 
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getAvailableTimes(date: string, location: string): Promise<string[]>;
  addNewsletterSubscription(subscription: InsertNewsletter): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private bookings: Map<number, Booking>;
  private newsletters: Map<number, NewsletterSubscription>;
  
  private userId: number;
  private contactId: number;
  private bookingId: number;
  private newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.bookings = new Map();
    this.newsletters = new Map();
    
    this.userId = 1;
    this.contactId = 1;
    this.bookingId = 1;
    this.newsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactId++;
    const createdAt = new Date();
    const contactSubmission: ContactSubmission = { 
      ...contact, 
      id, 
      createdAt 
    };
    this.contacts.set(id, contactSubmission);
    return contactSubmission;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.bookingId++;
    const createdAt = new Date();
    const newBooking: Booking = { 
      ...booking, 
      id, 
      createdAt 
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getAvailableTimes(date: string, location: string): Promise<string[]> {
    // Generate times from 9am to 5pm in 30-minute intervals
    const times = [];
    for (let hour = 9; hour < 17; hour++) {
      times.push(`${hour}:00`);
      times.push(`${hour}:30`);
    }

    // Filter out times that are already booked for this date and location
    const bookedTimes = Array.from(this.bookings.values())
      .filter(booking => booking.date === date && booking.location === location)
      .map(booking => booking.time);

    return times.filter(time => !bookedTimes.includes(time));
  }

  async addNewsletterSubscription(subscription: InsertNewsletter): Promise<NewsletterSubscription> {
    // Check if email is already subscribed
    const existingSubscription = Array.from(this.newsletters.values()).find(
      sub => sub.email === subscription.email
    );

    if (existingSubscription) {
      throw new Error("Email already subscribed to newsletter (unique constraint)");
    }

    const id = this.newsletterId++;
    const createdAt = new Date();
    const newSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      createdAt
    };
    this.newsletters.set(id, newSubscription);
    return newSubscription;
  }
}

export const storage = new MemStorage();
