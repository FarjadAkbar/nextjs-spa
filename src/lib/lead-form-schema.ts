import { z } from "zod";
import en from "@/locales/en.json";

export const leadFormSchema = z.object({
  firstName: z.string().min(2, en.leadForm.validation.firstNameRequired),
  lastName: z.string().min(2, en.leadForm.validation.lastNameRequired),
  email: z.string().email(en.leadForm.validation.invalidEmail),
  phone: z.string().min(6, en.leadForm.validation.invalidPhone),
  restaurantName: z.string().min(2, en.leadForm.validation.restaurantNameRequired),
  posSystem: z.string().min(1, en.leadForm.validation.posSystemRequired),
  noofresturant: z.string().min(1, en.leadForm.validation.noOfRestaurantsRequired),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
