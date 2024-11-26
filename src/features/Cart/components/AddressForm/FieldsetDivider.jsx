import styles from "./AddressForm.module.css";

function FieldsetDivider({ title, children }) {
  return (
    <fieldset className={styles.field}>
      <div className={styles.fieldsetDivider}>
        <p className={styles.personalDetails}>{title}</p>
      </div>
      {children}
    </fieldset>
  );
}

export default FieldsetDivider;
