import { companies } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CompaniesState {
  value: companies;
}

const initialState: CompaniesState = {
  value: {} as companies,
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<companies>) => {
      state.value = action.payload;
    },
    clearCompany: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setCompany, clearCompany } = companiesSlice.actions;

export default companiesSlice.reducer;
