import styles from "./Input.module.css";

function Input({ stock, count, id, onChange }) {
  return (
    <div className={styles.inputBox}>
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={id}>{stock}</label>
      <span>({count})</span>
    </div>
  );
}

export default Input;
