import styles from "./FilterBox.module.css";

function FilterBox({ title }) {
  return (
    <div className={styles.availability}>
      <p>{title}</p>
      <span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </span>
      <span>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </span>
    </div>
  );
}

export default FilterBox;
