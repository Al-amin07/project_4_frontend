import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { baseApi } from "./api/baseApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};
const cartPersistConfig = {
  key: "cart",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const cartPersistReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    cart: cartPersistReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
