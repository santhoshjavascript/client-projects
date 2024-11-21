import styles from "./AddressForm.module.css";
import LogoName from "../../../../components/Logo";
import { useState } from "react";
import LeftSide from "./LeftSide";

function AddressForm({ nextStep }) {
  const [isActive] = useState(false);

  // function handleActive() {
  //   setIsActive(!isActive);
  // }

  return (
    <section className={styles.addressFormBox}>
      <header className={styles.checkHeader}>
        <figure>
          <LogoName />
        </figure>
        <ul>
          <li
            className={
              isActive
                ? `${styles.step} ${styles.stepActive}`
                : `${styles.step}`
            }
          >
            login
          </li>
          <li className={styles.divider}></li>
          <li
            className={
              isActive
                ? `${styles.step} ${styles.stepActive}`
                : `${styles.step}`
            }
          >
            address
          </li>
          <li className={styles.divider}></li>
          <li
            className={
              isActive
                ? `${styles.step} ${styles.stepActive}`
                : `${styles.step}`
            }
          >
            payment
          </li>
        </ul>
      </header>

      <article className={styles.summaryBody}>
        <LeftSide />
        <section className={styles.rightSide}>
          <div className={styles.grandTotal}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>grand total</p>
            <p>₹ 2,519</p>
          </div>
          {/* <div className={styles.addressBox}>
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
            <Link className={styles.addressLink}>
              <ion-icon name="add-outline"></ion-icon>
              Add new address
            </Link>
          </div> */}
          <div className={styles.formContainer}>
            <h3>Add new address</h3>
            <form id="addressForm">
              <fieldset className={styles.field}>
                <div className={styles.fieldsetDivider}>
                  <div className={styles.personalDetails}>personal details</div>
                </div>

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
              </fieldset>
              <fieldset className={styles.field}>
                <div className={styles.fieldsetDivider}>
                  <div className={styles.personalDetails}>address</div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.addressChild}>
                    <label htmlFor="address" className={styles.label}>
                      HOUSE NO., BUILDING, ROAD, AREA
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

                  <div>
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
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </article>
    </section>
  );
}

export default AddressForm;

//  {
//    /* <h2>Address Form</h2>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" required />
//         <label htmlFor="address">Address:</label>
//         <input type="text" id="address" name="address" required />
//         <label htmlFor="city">City:</label>
//         <input type="text" id="city" name="city" required />
//         <label htmlFor="state">State:</label>
//         <input type="text" id="state" name="state" required />
//         <label htmlFor="zip">Zip:</label>
//         <input type="text" id="zip" name="zip" required />
//         <button onClick={nextStep}>Next</button>
//       </form> */
//  }
