import styles from "./ProductSummary.module.css";

function CartRight() {
  return (
    <div className={styles.productSummaryRight}>
      <h1 className={styles.heading}>Order Summary</h1>

      <aside className={styles.priceSummaryBox}>
        <table className={styles.tableRight}>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>Rs. 10,000</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td>Rs. 0</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rs. 10000</td>
            </tr>
          </tbody>
        </table>

        <form className={styles.textArea}>
          <label for="story">add notes</label>
          <textarea id="story" name="story" rows="5" cols="33"></textarea>
        </form>

        <button className={styles.btnCheckout}>place order</button>
      </aside>
    </div>
  );
}

export default CartRight;
