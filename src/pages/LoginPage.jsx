import { Outlet } from "react-router-dom";
import styles from "../features/authentication/components/login.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default LoginPage;
