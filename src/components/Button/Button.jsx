import { useState } from "react";
import styles from "./Button.module.css";

function Button({ bgColor, boxShadow, size, color, marginBottom, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${styles.btn} ${size === "sm" ? styles.sm : ""}`}
      style={{
        backgroundColor: isHovered ? "#1a1a1a" : bgColor,
        boxShadow: boxShadow,
        color: color,
        marginBottom: marginBottom,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
export default Button;
