import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  item: null,
  wishList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setItems(state, action) {
      state.items = action.payload;
      state.loading = false;
    },

    setItem(state, action) {
      state.item = action.payload;
      state.loading = false;
    },
    clearItem(state) {
      state.item = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setItems, setError, setItem, clearItem } =
  productSlice.actions;

export default productSlice.reducer;
