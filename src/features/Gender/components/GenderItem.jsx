import styles from "./Gender.module.css";

function GenderItem({ gender, image }) {
  return (
    <div
      className={styles.genderCard}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.genderActions}>
        <p>{gender}</p>
        <button className={styles.btn}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default GenderItem;
