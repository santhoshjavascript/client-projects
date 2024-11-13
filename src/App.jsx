import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./pages/Login";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishList from "./features/WishList/components/WishList";
import CartPage from "./pages/CartPage";
import ProductsViewPage from "./pages/ProductsViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Form />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsViewPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
