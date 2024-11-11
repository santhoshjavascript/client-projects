import styles from "./Button.module.css";

function Button({ bgColor, boxShadow, color, marginBottom, children }) {
  return (
    <button
      className={styles.btn}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadow,
        color: color,
        marginBottom: marginBottom,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
