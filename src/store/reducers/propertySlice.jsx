import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  isPropertiesloading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    fetchPropertiesStart(state) {
      state.isPropertiesloading = true;
    },
    fetchPropertiesSuccess(state, action) {
      state.isPropertiesloading = false;
      state.properties = action.payload;
    },
    fetchPropertiesFailure(state, action) {
      state.isPropertiesloading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchPropertiesFailure,fetchPropertiesStart,fetchPropertiesSuccess} = propertySlice.actions;
export default propertySlice.reducer;
