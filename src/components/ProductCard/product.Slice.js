import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  items: [],
  loading: false,
  error: null,
  item: null,
  wishList: [],
  productView: null,
  isShow: false,
  derssSize: "",
  addCart: [],
  amount: {},
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
      const itemsWithIsFilled = action.payload.map((item) => ({
        ...item,
        isFilled: state.wishList.some(
          (wishlistItem) => wishlistItem.id === item.id
        ),
      }));

      state.allItems = itemsWithIsFilled;
      state.items = itemsWithIsFilled;
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
        const uniqueWishList = [...state.wishList, toggledItem].reduce(
          (accumulator, current) => {
            if (!accumulator.some((el) => el.id === current.id)) {
              accumulator.push(current);
            }
            return accumulator;
          },
          []
        );

        state.wishList = uniqueWishList;
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

    setIsShow(state, action) {
      state.isShow = action.payload;
    },

    selectedSizes(state, action) {
      state.derssSize = action.payload;
    },

    setAddCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.addCart.findIndex(
        (el) => el.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update the quantity
        const updatedCart = [...state.addCart];
        updatedCart[existingItemIndex].quantity += 1; // Increment quantity
        state.addCart = updatedCart;
      } else {
        // Item doesn't exist, add it to the cart with quantity 1
        state.addCart = [...state.addCart, { ...newItem, quantity: 1 }];
      }
    },

    setAmount(state, action) {
      state.amount = { total: action.payload.amount };
    },

    deletingCart(state, action) {
      state.addCart = state.addCart.filter((el) => el.id !== action.payload.id);
      const currentTotal = state.addCart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);

      state.amount = currentTotal;

      if (state.addCart.length === 0) {
        state.amount = 0;
      }
    },

    setError(state, action) {
      console.log(action.payload);

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
  setIsShow,
  selectedSizes,
  setAddCart,
  setAmount,
  deletingCart,
} = productSlice.actions;

export default productSlice.reducer;
