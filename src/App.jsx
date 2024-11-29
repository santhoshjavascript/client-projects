// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Form from "./pages/Login";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import WishList from "./features/WishList/components/WishList";
// import CartPage from "./pages/CartPage";
// import ProductsViewPage from "./pages/ProductsViewPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route index element={<Form />} /> */}
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<h1>Page Not Found</h1>} />
//         <Route path="/product" element={<ProductsViewPage />} />
//         <Route path="/:id" element={<ProductDetailPage />} />
//         <Route path="/wishlist" element={<WishList />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// React Router Version 6

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishList from "./features/WishList/components/WishList";
import CartPage from "./pages/CartPage";
import ProductsViewPage from "./pages/ProductsViewPage";
import AppLayOut from "./pages/AppLayOut";
import { productsLoader } from "./features/ProductView/components/ProductViewBar";
import {
  combinedLoader,
  sliderLoader,
} from "./components/ProductCard/combinedLoader";
import AddressForm from "./features/Cart/components/AddressForm/AddressForm";
import ProductSummary from "./features/Cart/components/ProductSummary/ProductSummary";
import Checkout from "./features/Cart/components/Checkout/Checkout";
import LoginPage from "./pages/LoginPage";
import SignIn from "./features/authentication/components/SignIn";
import SignUp from "./features/authentication/components/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        children: [
          { element: <SignIn />, index: true },
          { path: "signup", element: <SignUp /> },
        ],
      },
      { path: "/", element: <Home />, loader: sliderLoader },
      {
        path: "/product",
        element: <ProductsViewPage />,
        loader: productsLoader,
      },
      {
        path: "/:id",
        element: <ProductDetailPage />,
        loader: combinedLoader,
      },
      { path: "/wishlist", element: <WishList /> },
      {
        path: "/cart",
        element: <CartPage />,
        children: [
          {
            index: true,
            element: <ProductSummary />,
          },
          {
            path: "address",
            element: <AddressForm />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
