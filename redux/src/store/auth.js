import {createSlice} from "@reduxjs/toolkit";

//New slice
const initialauthstate = {
  isAuthenticated: false,
};

const authslice = createSlice({
  name: "authentication",
  initialState: initialauthstate,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authslice.actions;
export default authslice.reducer;
