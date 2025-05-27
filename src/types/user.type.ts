export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  status: "active" | "blocked";
  createdAt: string;
  updatedAt: string;
};
