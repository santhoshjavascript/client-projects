import styles from "./AddressForm.module.css";
import LogoName from "../../../../components/Logo";

function AddressForm({ nextStep }) {
  return (
    <section className={styles.addressFormBox}>
      <header className={styles.checkHeader}>
        <figure>
          <LogoName />
        </figure>
      </header>
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
