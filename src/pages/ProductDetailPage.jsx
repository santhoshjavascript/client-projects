import ProductDetail from "../features/ProductDetail/components/ProductDetail";
import ProductList from "../features/ProductList/components/ProductList";

function ProductDetailPage() {
  return (
    <div>
      <ProductDetail />

      <ProductList type="You may also like" />
    </div>
  );
}

export default ProductDetailPage;
