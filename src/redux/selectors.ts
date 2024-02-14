import { RootState } from "@/redux/store";

export const selectProduct = (state: RootState) => state.product.value;

export const selectLoading = (state: RootState) => state.loading.value;
