import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: {
      id: "",
      imageurl: "",
      title: "",
      author: "",
      description: "",
      requeststatus: "",
      bookstatus: ""
    }
  },
  reducers: {
    getBookData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getBookData } = bookSlice.actions;

export default bookSlice.reducer;
