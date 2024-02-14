import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoad: (state) => {
      state.value = true;
    },
    finishLoad: (state) => {
      state.value = false;
    },
  },
});

export const { startLoad, finishLoad } = loadingSlice.actions;

export default loadingSlice.reducer;
