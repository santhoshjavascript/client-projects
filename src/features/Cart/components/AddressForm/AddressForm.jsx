import styles from "./AddressForm.module.css";
import LogoName from "../../../../components/Logo";
import { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function AddressForm() {
  const [isActive] = useState(false);

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
        <RightSide />
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
