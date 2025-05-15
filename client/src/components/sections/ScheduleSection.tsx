import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const scheduleFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" })
});

type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;

const availableTimes = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

export default function ScheduleSection() {
  const { toast } = useToast();
  
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: ""
    }
  });

  const onSubmit = (data: ScheduleFormValues) => {
    // In a real implementation, this would submit to a server
    console.log("Schedule form data:", data);
    
    toast({
      title: "Consultation Scheduled",
      description: `We'll contact you soon to confirm your appointment on ${data.date} at ${data.time}.`,
    });
    
    form.reset();
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <ScrollAnimation className="slide-in">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-5">
              Schedule a Free Consultation
            </h2>
            <p className="text-neutral-600 mb-8">
              Speak with our immigration experts to discover which program best fits your goals. Receive personalized guidance on your global mobility journey.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-user-check"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Personalized Assessment</h4>
                  <p className="text-neutral-600">Detailed evaluation of your eligibility for various programs</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-route"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Strategic Roadmap</h4>
                  <p className="text-neutral-600">Clear investment migration path tailored to your objectives</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-calculator"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Investment Breakdown</h4>
                  <p className="text-neutral-600">Transparent cost analysis and return on investment details</p>
                </div>
              </li>
            </ul>
          </ScrollAnimation>
          
          {/* Calendar Form */}
          <ScrollAnimation className="slide-up">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mb-6">Book Your Free Session</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
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
                        <FormLabel className="text-neutral-700 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
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
                        <FormLabel className="text-neutral-700 font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Preferred Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Preferred Time</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {availableTimes.map(time => (
                              <SelectItem key={time} value={time}>
                                {time.split(':')[0] > '12' 
                                  ? `${parseInt(time.split(':')[0]) - 12}:${time.split(':')[1]} PM`
                                  : `${time} ${time.split(':')[0] === '12' ? 'PM' : 'AM'}`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-accent text-primary-dark font-medium rounded-lg hover:bg-accent-light transition-colors"
                  >
                    Schedule Consultation
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
