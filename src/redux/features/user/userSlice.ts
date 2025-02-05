import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
  email: string;
  role: "admin" | "user";
  id?: string;
  iat: number;
  exp: number;
}

const initialState: { user: IUser | null; token: string | null } = {
  user: null,
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
