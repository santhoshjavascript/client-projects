import { useSelector } from "react-redux";
import styles from "./ProductSummary.module.css";

function ProductSummaryRight({ nextStep }) {
  const { amount } = useSelector((current) => current.product);

  return (
    <div className={styles.cartRight}>
      <h1 className={styles.cartHeading}>Order Summary</h1>

      <aside className={styles.priceSummaryBox}>
        <table className={styles.tableRight}>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>Rs {!amount.total ? "0" : amount.total}</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td>Rs. 0</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rs. ${!amount.total ? "0" : amount.total}</td>
            </tr>
          </tbody>
        </table>

        <form className={styles.textArea}>
          <label htmlFor="story">add notes</label>
          <textarea id="story" name="story" rows="5" cols="33"></textarea>
        </form>

        <button className={styles.btnCheckout} onClick={nextStep}>
          place order
        </button>
      </aside>
    </div>
  );
}

export default ProductSummaryRight;
