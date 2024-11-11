import Footer from "../features/Footer/components/Footer";
import NavBar from "../features/Header/components/NavBar";
import ProductDetail from "../features/ProductDetail/components/ProductDetail";
import ProductList from "../features/ProductList/components/ProductList";

function ProductDetailPage() {
  return (
    <div>
      <NavBar />
      <ProductDetail />

      <ProductList type="You may also like" />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
