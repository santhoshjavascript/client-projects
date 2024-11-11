import { configureStore } from "@reduxjs/toolkit";
import userAuth from "../features/authentication/redux/user.Slice";
import product from "../components/ProductCard/product.Slice";

const store = configureStore({
  reducer: {
    credential: userAuth,
    product: product,
  },
});

export default store;
