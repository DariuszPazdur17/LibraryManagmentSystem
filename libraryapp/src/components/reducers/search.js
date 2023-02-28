import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: {
      searchtext: ""
    }
  },
  reducers: {
    getSearchData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getSearchData } = searchSlice.actions;

export default searchSlice.reducer;
