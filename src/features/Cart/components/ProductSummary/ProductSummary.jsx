import styles from "./ProductSummary.module.css";
import ProductSummaryLeft from "./ProductSummaryLeft";
import ProductSummaryRight from "./ProductSummaryRight";

function ProductSummary() {
  return (
    <section className={styles.productSummaryBox}>
      <ProductSummaryLeft />
      <ProductSummaryRight />
    </section>
  );
}

export default ProductSummary;
