import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import loadingSlice from "./loading/loadingSlice";
import characteristicSlice from "./characteristic/characteristicSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    loading: loadingSlice,
    characteristic: characteristicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
