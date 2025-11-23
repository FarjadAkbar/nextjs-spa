import { z } from "zod";

export const leadFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Invalid phone number"),
  restaurantName: z.string().min(2, "Restaurant name required"),
  posSystem: z.string().min(1, "POS System is required"),
  noofresturant: z.string().min(1, "Number of restaurants required"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
