import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const deleteIndex = action.payload;
      state.splice(deleteIndex, 1);
    },
    editCustomer(state, action) {
      const { index, newName } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = newName;
      }
    },
  },
});

export const { addCustomer, deleteCustomer, editCustomer } = customerSlice.actions;
export default customerSlice.reducer;
