// import { useState, useEffect } from "react";
import styles from "./login.module.css";
// import Icons from "./Icons";
import { Eye, KeySquare, Lock, Mail, Phone, User } from "lucide-react";
// import { Navigate } from "react-router-dom";
// import { signUp as signUpAction } from "../redux/user.Slice";
// import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";

function SignUp() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isAuthenticated, user, error } = useSelector(
  //   (state) => state.credential
  // );

  // Optional: Log error message if it exists
  // useEffect(() => {
  //   if (error) {
  //     console.error("Error:", error);
  //   }
  // }, [error]);

  // function handleChangeName(event) {
  //   setName(event.target.value);
  // }

  // function handleChangeEmail(event) {
  //   setEmail(event.target.value);
  // }

  // function handleChangePassword(event) {
  //   setPassword(event.target.value);
  // }

  // async function onSignUp(event) {
  //   event.preventDefault();
  //   if (!name || !email || !password) return;

  //   await dispatch(signUpAction(name, email, password));

  //   console.log(
  //     "After Sign Up - User:",
  //     user,
  //     "Is Authenticated:",
  //     isAuthenticated
  //   );
  // }

  // if (isAuthenticated) return <Navigate to="/home" />;

  return (
    <div className={styles.loginCard}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <KeySquare size={28} />
        </div>
        <h1>Welcome back</h1>
        <p>Please enter your details to sign in</p>
      </div>

      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <User className={styles.inputIcon} />
          <input type="text" placeholder="Name" className={styles.inputBox} />
        </div>

        <div className={styles.inputGroup}>
          <Mail className={styles.inputIcon} />
          <input
            type="email"
            placeholder="Email address"
            className={styles.inputBox}
          />
        </div>

        <div className={styles.inputGroup}>
          <Phone className={styles.inputIcon} />
          <input
            type="number"
            placeholder="Mobile number"
            className={styles.inputBox}
          />
        </div>

        <div className={styles.inputGroup}>
          <Lock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputBox}
          />
          <button type="button" className={styles.togglePassword}>
            <Eye size={18} />
          </button>
        </div>

        <div className={styles.inputGroup}>
          <Lock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.inputBox}
          />
          <button type="button" className={styles.togglePassword}>
            <Eye size={18} />
          </button>
        </div>

        <Button
          bgColor="#000"
          color="#fff"
          size="sm"
          className={styles.signUpBtn}
        >
          Unlock Trends
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
