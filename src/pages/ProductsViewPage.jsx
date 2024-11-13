import ProductsView from "../features/ProductView/components/ProductsView";
import Footer from "../features/Footer/components/Footer";
import NavBar from "../features/Header/components/NavBar";

function ProductsViewPage() {
  return (
    <div>
      <NavBar />

      <ProductsView />

      <Footer />
    </div>
  );
}

export default ProductsViewPage;
