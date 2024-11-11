import styles from "../features/Header/components/Navbar.module.css";
export default function LogoName({
  color = "#000",
  justifySelf,
  marginBottom,
}) {
  return (
    <h1
      className={styles.logoName}
      style={{
        color: color,
        justifySelf: justifySelf,
        marginBottom: marginBottom,
        display: "inline-block",
      }}
    >
      NEXTGEN
    </h1>
  );
}
