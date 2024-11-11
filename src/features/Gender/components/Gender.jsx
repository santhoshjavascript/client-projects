import styles from "./Gender.module.css";
import GenderItem from "./GenderItem";
import { assets } from "../../../assets/assets";

function Gender() {
  return (
    <div className={`${styles.genderContainer} grid`}>
      <GenderItem gender="SHOP FOR HER" image={assets.women} />
      <GenderItem gender="SHOP FOR HIM" image={assets.men} />
    </div>
  );
}

export default Gender;
