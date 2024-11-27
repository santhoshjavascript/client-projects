import styles from "./Button.module.css";

function Button({ bgColor, boxShadow, size, color, marginBottom, children }) {
  return (
    <button
      className={styles.btn}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadow,
        color: color,
        marginBottom: marginBottom,
        padding: size === "sm" ? "1.2rem" : "1rem 2rem",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
