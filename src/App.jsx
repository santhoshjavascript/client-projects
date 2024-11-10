import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./pages/Login";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsView from "./features/ProductView/components/ProductsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <h1>Hi</h1>
        <h2>Hey</h2>
        <h3>santhosh</h3>
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
