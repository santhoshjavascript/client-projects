import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  items: [],
  loading: false,
  error: null,
  item: null,
  wishList: [],
  productView: null,
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
      state.allItems = action.payload;
      state.items = action.payload;
      state.loading = false;
    },

    priceChanges(state, action) {
      const { min, max } = action.payload;
      if (min && max) {
        state.items = state.allItems.filter(
          (el) => el.price >= min && el.price <= max
        );
      } else {
        state.items = state.allItems;
      }
    },

    filterInStock(state, action) {
      if (action.payload) {
        state.items = state.allItems.filter((el) => el.stock > 0);
      } else {
        state.items = state.allItems;
      }
    },

    filterSoldOut(state, action) {
      if (action.payload) {
        state.items = state.allItems.filter((el) => el.stock === 0);
      } else {
        state.items = state.allItems;
      }
    },

    clearFilters(state) {
      state.items = state.allItems;
    },

    setItem(state, action) {
      const updatedItem = action.payload;
      state.items = state.items.map((item) =>
        item.id === updatedItem.id
          ? { ...item, isFilled: !item.isFilled }
          : item
      );

      const toggledItem = { ...updatedItem, isFilled: !updatedItem.isFilled };
      state.item = toggledItem;

      if (toggledItem.isFilled) {
        state.wishList = [...state.wishList, toggledItem];
      } else {
        state.wishList = state.wishList.filter(
          (el) => el.id !== toggledItem.id
        );
      }

      state.loading = false;
      console.log(state.wishList);
    },

    removeWhisList(state, action) {
      state.wishList = state.wishList.filter(
        (el) => el.id !== action.payload.id
      );
      console.log(state.wishList);
    },

    selectedProduct(state, action) {
      state.productView = action.payload;
      state.loading = false;
    },

    clearItem(state) {
      state.productView = null;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setItems,
  setError,
  setItem,
  clearItem,
  selectedProduct,
  priceChanges,
  filterInStock,
  filterSoldOut,
  clearFilters,
  removeWhisList,
} = productSlice.actions;

export default productSlice.reducer;
