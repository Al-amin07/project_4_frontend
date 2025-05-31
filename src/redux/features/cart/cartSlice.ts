import { RootState } from "@/redux/store";
import { TCar } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
export interface ICartItem {
  car: TCar;

  quentity: number;
}
const initialState: { cars: ICartItem[]; totalPrice: number } = {
  cars: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCar(state, action) {
      const newCar = action.payload;

      const existingCar = state.cars.find((car) => car.car._id === newCar._id);
      if (existingCar) {
        existingCar.quentity++;
      } else {
        state.cars.push({ car: newCar, quentity: 1 });
      }
      state.totalPrice += newCar.price;
    },
    removeCar(state, action) {
      const carId = action.payload;
      console.log({ carId });
      const existingCar = state.cars.find((car) => car.car._id === carId);
      if (existingCar) {
        if (existingCar.quentity > 1) {
          existingCar.quentity--;
        } else {
          state.cars = state.cars.filter((car) => car.car._id !== carId);
        }
        state.totalPrice -= existingCar.car.price;
      }
    },
    deleteCar(state, action) {
      const { car: deletedCar, quentity } = action.payload as {
        car: TCar;
        quentity: number;
      };
      console.log({ deletedCar, quentity });
      state.cars = state.cars.filter((car) => car.car._id !== deletedCar._id);
      state.totalPrice -= deletedCar?.price * quentity;
    },
    emptyCart(state) {
      state.cars = [];
      state.totalPrice = 0;
    },
  },
});
export const selectCart = (state: RootState) => state.cart;
export const { addCar, removeCar, deleteCar, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
