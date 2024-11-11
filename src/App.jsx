import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./pages/Login";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsView from "./features/ProductView/components/ProductsView";
import WishList from "./features/WishList/components/WishList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Form />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsView />} />
        <Route path="/:id" element={<ProductDetailPage />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
