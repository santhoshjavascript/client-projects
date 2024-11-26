// import { Link } from "react-router-dom";
import CartHeader from "../CartHeader/CartHeader";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <>
      <CartHeader />
      <div className={styles.container}>
        <div className={styles.checkoutContainer}>
          <div className={styles.paymentSection}>
            <h2 className={styles.title}>Payment Method</h2>

            <div className={styles.paymentOption}>
              <div className={styles.paymentHeader}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png"
                  alt="Google Pay"
                  className={styles.paymentLogo}
                />
                <span>Google Pay</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </div>

            <div className={styles.paymentOption + " " + styles.active}>
              <div className={styles.paymentHeader}>
                <span>Debit Card</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>

              <div className={styles.savedCards}>
                <div className={styles.card}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className={styles.cardLogo}
                  />
                  <div className={styles.cardInfo}>
                    <span>Axim Bank</span>
                    <span className={styles.cardNumber}>
                      **** **** **** 4578
                    </span>
                  </div>
                  <input type="radio" name="card" checked />
                </div>

                <div className={styles.card}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className={styles.cardLogo}
                  />
                  <div className={styles.cardInfo}>
                    <span>HDFC Bank</span>
                    <span className={styles.cardNumber}>
                      **** **** **** 4521
                    </span>
                  </div>
                  <input type="radio" name="card" />
                </div>

                <button className={styles.addCard}>
                  <span className={styles.plus}>+</span>
                  Add New Cards
                </button>
              </div>

              {/* <button className={styles.addMethod}>
              <span className={styles.plus}>+</span>
              Add New Method
            </button> */}
            </div>
          </div>

          <div className={styles.orderSummary}>
            <h2 className={styles.title}>Product Summary</h2>
            <div className={styles.product}>
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd1fc4e4-5d02-4f18-afd7-a1ea42ff1f73/joyride-run-flyknit-mens-running-shoe-PjmR5M.png"
                alt="Nike Shoes"
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3>Nike Men's Joyride Run Flyknit Shoes</h3>
                <span className={styles.price}>$66.00</span>
              </div>
              <button className={styles.close}>×</button>
            </div>

            <div className={styles.offers}>
              <h3>Offers</h3>
              <button className={styles.addCode}>Add Code</button>
            </div>

            <div className={styles.paymentDetails}>
              <h3>Payment Details</h3>
              <div className={styles.detailRow}>
                <span>Order</span>
                <span>$66.00</span>
              </div>
              <div className={styles.detailRow}>
                <span>Delivery</span>
                <span>$2.00</span>
              </div>
              <div className={styles.detailRow + " " + styles.total}>
                <span>Total</span>
                <span>$68.00</span>
              </div>
            </div>

            <div className={styles.address}>
              <h3>Address</h3>
              <select>
                <option>12, WLS Regancy</option>
              </select>
            </div>

            <button className={styles.payNow}>Pay Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
