import styles from "./Cart.module.css";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";

function Cart() {
  return (
    <section className={styles.cartBox}>
      <CartLeft />
      <CartRight />
    </section>
  );
}

export default Cart;
