import { RootState } from "@/redux/store";

export const selectProduct = (state: RootState) => state.product.value;

export const selectLoading = (state: RootState) => state.loading.value;

export const selectCharacteristics = (state: RootState) =>
  state.characteristic.value;

export const selectCharacteristicsRemove = (state: RootState) =>
  state.characteristic.remove;

export const selectCompanies = (state: RootState) => state.companies.value;
