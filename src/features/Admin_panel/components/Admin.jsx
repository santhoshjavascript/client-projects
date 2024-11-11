import styles from "./Admin.module.css";
import ContentAdmin from "./ContentAdmin";
import SidebarAdmin from "./SidebarAdmin";

function Admin() {
  return (
    <div className={styles.admin}>
      <SidebarAdmin />
      <ContentAdmin />
    </div>
  );
}

export default Admin;
