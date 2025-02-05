import { z } from "zod";

export const categories = [
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
  { value: "Truck", label: "Truck" },
  { value: "Coupe", label: "Coupe" },
  { value: "Convertible", label: "Convertible" },
];

export const carSchema = z.object({
  brand: z.string().min(1, { message: "Brand is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  year: z
    .number()
    .min(1886, { message: "Year must be 1886 or later" }) // First car was made in 1886
    .max(new Date().getFullYear(), { message: "Year cannot be in the future" }),
  price: z.number({ message: "Price must be a positive number" }),
  image: z.unknown().optional(),

  category: z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"], {
    message: "Invalid category",
  }),
  description: z.string().min(1, { message: "Description is required" }),
  quantity: z
    .number({ message: "Quantity must be a positive number" })
    .min(1, { message: "Quantity must be at least 1" }),
});

export const changepasswordSchema = z.object({
  password: z.string().min(1, { message: "Current Password is required" }),
  newPassword: z.string().min(1, { message: "New Password is required" }),
});
