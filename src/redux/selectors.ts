import { RootState } from "@/redux/store";

export const selectProduct = (state: RootState) => state.product.value;

export const selectLoading = (state: RootState) => state.loading.value;

export const selectCharacteristics = (state: RootState) => state.characteristic;

export const selectCompanies = (state: RootState) => state.companies.value;
