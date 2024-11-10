import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./pages/Login";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsView from "./features/ProductView/components/ProductsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Form />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetailPage />} />
        <Route path="/product" element={<ProductsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
