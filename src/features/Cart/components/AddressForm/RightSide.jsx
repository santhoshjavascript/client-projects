import styles from "./AddressForm.module.css";
import FieldsetDivider from "./FieldsetDivider";
import Button from "../../../../components/Button/Button";
import { useState } from "react";

function RightSide() {
  const [isActive, setIsActive] = useState(false);

  const handleAddNewAddress = () => {
    setIsActive(true);
  };

  return (
    <section className={styles.rightSide}>
      <div className={styles.grandTotal}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>grand total</p>
        <p>₹ 2,519</p>
      </div>
      <div
        className={`${styles.formContainer} ${isActive ? styles.active : ""}`}
      >
        <h3>Add new address</h3>
        <form id="addressForm">
          <FieldsetDivider title="personal details">
            <div className={`${styles.inputRow} ${styles.grid2Cols}`}>
              <div>
                <label htmlFor="firstName" className={styles.label}>
                  firstname <span className={styles.starIcon}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  required
                  className={styles.input}
                />
              </div>

              <div>
                <label htmlFor="lastName" className={styles.label}>
                  lastname <span className={styles.starIcon}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="name"
                  required
                  className={styles.input}
                />
              </div>
            </div>
          </FieldsetDivider>

          <FieldsetDivider title="address">
            <div className={styles.inputRow}>
              <div className={styles.addressChild}>
                <label htmlFor="locality" className={styles.label}>
                  HOUSE NO., BUILDING, ROAD, AREA
                  <span className={styles.starIcon}>*</span>
                </label>
                <input
                  type="text"
                  id="locality"
                  name="address"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.addressChild}>
                <label htmlFor="address" className={styles.label}>
                  locality
                  <span className={styles.starIcon}>*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.addressChild}>
                <label htmlFor="pincode" className={styles.label}>
                  pincode
                  <span className={styles.starIcon}>*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="address"
                  required
                  className={styles.input}
                />
              </div>

              <div className={`${styles.inputRow} ${styles.grid2Cols}`}>
                <div>
                  <label htmlFor="city" className={styles.label}>
                    city <span className={styles.starIcon}>*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="name"
                    required
                    className={styles.input}
                  />
                </div>

                <div>
                  <label htmlFor="state" className={styles.label}>
                    state <span className={styles.starIcon}>*</span>
                  </label>
                  <input
                    type="select"
                    id="state"
                    name="name"
                    required
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          </FieldsetDivider>

          <FieldsetDivider title="save address as">
            <div className={styles.radioBox}>
              <div>
                <input
                  type="radio"
                  id="home"
                  name="addressType"
                  value="home"
                  className={styles.radio}
                />
                <label htmlFor="home">home</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="work"
                  name="addressType"
                  value="work"
                  className={styles.radio}
                />
                <label htmlFor="work">work</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="others"
                  name="addressType"
                  value="work"
                  className={styles.radio}
                />
                <label htmlFor="work">others</label>
              </div>
            </div>
          </FieldsetDivider>

          <Button bgColor="#019e43" color="#fff">
            continue
          </Button>
        </form>
      </div>

      <div className={styles.addAddressBox}>
        <p className={styles.delivery}>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
            <path d="M3 9l4 0"></path>
          </svg>
          Delivery
        </p>
        <div className={styles.addressLink} onClick={handleAddNewAddress}>
          <ion-icon name="add-outline"></ion-icon>
          Add new address
        </div>
      </div>
    </section>
  );
}

export default RightSide;
