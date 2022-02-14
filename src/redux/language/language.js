import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "uz-uz",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const setLanguage = (language) => {
  return {
    type: languageSlice.actions.setLanguage.type,
    payload: language,
  };
};

export default languageSlice.reducer;
