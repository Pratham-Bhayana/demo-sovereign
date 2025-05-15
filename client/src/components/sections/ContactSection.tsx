import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // In a real implementation, this would submit to a server
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <ScrollAnimation className="order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mb-6">Get In Touch</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-neutral-700 font-medium">Full Name</FormLabel>
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
                          <FormLabel className="block text-neutral-700 font-medium">Email Address</FormLabel>
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-neutral-700 font-medium">Phone Number</FormLabel>
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
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-neutral-700 font-medium">Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="citizenship">Citizenship Programs</SelectItem>
                            <SelectItem value="residency">Residency Programs</SelectItem>
                            <SelectItem value="investment">Investment Advisory</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-neutral-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollAnimation>
          
          {/* Contact Information */}
          <ScrollAnimation className="order-1 md:order-2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-5">
              Contact Us
            </h2>
            <p className="text-neutral-600 mb-8">
              Our global team of immigration and investment experts is ready to guide you every step of the way. Contact us today to start your journey.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Headquarters</h4>
                  <p className="text-neutral-600">1234 Global Avenue, Suite 500<br/>New York, NY 10001, USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Phone</h4>
                  <p className="text-neutral-600">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Email</h4>
                  <p className="text-neutral-600">info@raizingsovereign.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center text-primary">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-medium text-lg text-neutral-800">Business Hours</h4>
                  <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
