import styles from "./ProductSummary.module.css";
import ProductSummaryLeft from "./ProductSummaryLeft";
import ProductSummaryRight from "./ProductSummaryRight";

function ProductSummary({ nextStep }) {
  return (
    <section className={styles.cartBox}>
      <ProductSummaryLeft />
      <ProductSummaryRight nextStep={nextStep} />
    </section>
  );
}

export default ProductSummary;
