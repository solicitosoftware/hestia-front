import { ProductType } from "@/products/interfaces/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  value: ProductType[];
}

const initialState: ProductState = {
  value: [] as ProductType[],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
