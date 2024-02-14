import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import loadingSlice from "./loading/loadingSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
