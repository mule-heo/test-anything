import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PhoneState {
  value: string;
}

const initialState: PhoneState = {
  value: "010",
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    input: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    backspace: (state) => {
      state.value = state.value.slice(0, Math.max(0, state.value.length - 1));
    },
    clear: (state) => {
      state.value = "";
    },
  },
});

export const { input, backspace, clear } = phoneSlice.actions;

export default phoneSlice.reducer;
