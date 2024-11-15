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
  amount: { total: 0 }, // Initialize amount with total
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

      // Find an item with the same ID and size in the cart
      const existingItemIndex = state.addCart.findIndex(
        (el) => el.id === newItem.id && el.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // Item with same ID and size exists, increment its quantity
        const updatedCart = [...state.addCart];
        updatedCart[existingItemIndex].quantity += 1;
        state.addCart = updatedCart;
      } else {
        // Item with a new size or ID, add to cart with quantity 1
        state.addCart = [...state.addCart, { ...newItem, quantity: 1 }];
      }

      // Recalculate the total amount
      const updatedTotal = state.addCart.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
      }, 0);

      // Update the amount object with the new total
      state.amount = { total: updatedTotal };
    },
    setAmount(state, action) {
      state.amount = { total: action.payload.amount }; // Adjust amount to be an object with 'total'
    },

    deletingCart(state, action) {
      // Remove the item from the cart based on both ID and size
      state.addCart = state.addCart.filter(
        (el) =>
          !(el.id === action.payload.id && el.size === action.payload.size)
      );

      // Recalculate the total amount after the item is deleted
      const updatedTotal = state.addCart.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
      }, 0);

      // Update the amount with the new total
      state.amount = { total: updatedTotal };

      // If the cart is empty, set the total to 0
      if (state.addCart.length === 0) {
        state.amount = { total: 0 }; // Reset the total if the cart is empty
      }

      // Log the updated state for debugging purposes
      console.log("Updated Cart:", state.addCart);
      console.log("Updated Total Amount:", state.amount.total);
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
