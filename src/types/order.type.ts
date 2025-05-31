import { TCar } from ".";

export interface TOrder {
  _id: string;
  email: string;
  items: { car: TCar; quentity: number }[];
  address: string;
  phone: string;
  name: string;
  userId: string;
  totalPrice: number;
  createdAt: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
}
