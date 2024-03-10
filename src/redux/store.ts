import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import loadingSlice from "./loading/loadingSlice";
import characteristicSlice from "./characteristic/characteristicSlice";
import companiesSlice from "./companies/companiesSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    loading: loadingSlice,
    characteristic: characteristicSlice,
    companies: companiesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
