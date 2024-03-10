import { characteristics } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CharacteristicsState {
  value: characteristics[];
  remove: boolean;
}

const initialState: CharacteristicsState = {
  value: [] as characteristics[],
  remove: false,
};

const characteristicSlice = createSlice({
  name: "characteristic",
  initialState,
  reducers: {
    removeCharacteristics: (state, action: PayloadAction<boolean>) => {
      state.remove = action.payload;
    },
  },
});

export const { removeCharacteristics } = characteristicSlice.actions;

export default characteristicSlice.reducer;
