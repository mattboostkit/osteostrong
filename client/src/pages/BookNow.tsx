import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  location: z.string().min(1, { message: "Please select a location" }),
  service: z.string().min(1, { message: "Please select a service" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  notes: z.string().optional()
});

type BookingValues = z.infer<typeof bookingSchema>;

const BookNow = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      service: "",
      notes: ""
    }
  });

  const { data: availableTimes, isLoading: timesLoading } = useQuery({
    queryKey: ['/api/booking/availability', selectedDate?.toISOString(), selectedLocation],
    enabled: !!(selectedDate && selectedLocation),
    queryFn: async () => {
      if (!selectedDate || !selectedLocation) return [];
      const dateString = format(selectedDate, 'yyyy-MM-dd');
      const res = await fetch(`/api/booking/availability?date=${dateString}&location=${selectedLocation}`);
      if (!res.ok) throw new Error("Failed to fetch available times");
      const data = await res.json();
      return data.availableTimes || [];
    }
  });

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    form.setValue("location", location);
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      form.setValue("date", date);
    }
  };

  const onSubmit = async (data: BookingValues) => {
    setIsSubmitting(true);

    try {
      const bookingData = {
        ...data,
        date: format(data.date, 'yyyy-MM-dd')
      };

      const response = await apiRequest("POST", "/api/booking", bookingData);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Booking successful",
          description: "Your session has been booked. We look forward to seeing you!",
        });
        form.reset();
        setSelectedDate(null);
        setSelectedLocation("");
      } else {
        toast({
          title: "Booking failed",
          description: result.message || "There was a problem with your booking",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Booking failed",
        description: "There was a problem with your booking. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Session | OsteoStrong</title>
        <meta name="description" content="Book your OsteoStrong session today. Take the first step towards stronger bones and improved overall health." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Book Your OsteoStrong Session</h1>
          <p className="text-xl text-white">Take the first step towards stronger bones and improved overall health</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-4xl mx-auto bg-neutral-100 rounded-xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Your email address" 
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Phone (optional)</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Your phone number" 
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Location</FormLabel>
                          <Select 
                            onValueChange={(value) => handleLocationChange(value)} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select a location" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tunbridge-wells">Tunbridge Wells</SelectItem>
                              <SelectItem value="london">London - Kensington</SelectItem>
                              <SelectItem value="manchester">Manchester</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Service</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="core-session">Core OsteoStrong Session</SelectItem>
                              <SelectItem value="performance-assessment">Performance Assessment</SelectItem>
                              <SelectItem value="wellness-consultation">Wellness Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-secondary font-medium">Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full px-4 py-3 border border-neutral-300 rounded-lg text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={handleDateChange}
                                disabled={(date) => 
                                  date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                  date.getDay() === 0 // Disable Sundays
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Time</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                            disabled={!selectedDate || !selectedLocation || timesLoading}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder={
                                  timesLoading 
                                    ? "Loading times..." 
                                    : !selectedDate || !selectedLocation 
                                    ? "Select date and location first" 
                                    : "Select a time"
                                } />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {availableTimes?.map((time: string) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-medium">Additional Notes (optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="Any additional information or special requirements" 
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-yellow-400 text-white font-bold py-3 px-8 rounded-full transition shadow-md w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Book Your Session"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-secondary mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">10-Minute Sessions</h3>
                  <p className="text-gray-600">Our sessions are designed to be quick yet effective, taking just 10 minutes of your time.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-tshirt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Special Clothing</h3>
                  <p className="text-gray-600">Come as you are! No need for workout clothes or changing facilities.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-100 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-friends text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Guided Experience</h3>
                  <p className="text-gray-600">A trained coach will guide you through each step of your session.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
