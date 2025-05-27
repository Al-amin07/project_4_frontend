import { TCar } from ".";

export type TOrder = {
  _id: string;
  email: string;
  car: TCar;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  transactionId?: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
};
