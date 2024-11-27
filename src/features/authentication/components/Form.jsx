// import { useState } from "react";
import styles from "./Form.module.css";
import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
// import Welcome from "./Welcome";

function Form() {
  // const [isActive, setIsActive] = useState(false);

  // function handleClick() {
  //   setIsActive(!isActive);
  // }

  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
}

export default Form;
