import { useState } from "react";
import styles from "./Form.module.css";
import Icons from "./Icons";
// import { useAuth } from "../../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { signIn, forgotPassword } from "../redux/user.Slice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isAuthenticated, signIn, user, forgotPassword } = useAuth();
  const { isAuthenticated, user } = useSelector(
    (current) => current.credential
  );

  function settingEmail(event) {
    setEmail(event.target.value);
  }

  function settingPassword(event) {
    setPassword(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    await dispatch(signIn(email, password));
  }

  function onResetPassword() {
    if (!email) return;
    forgotPassword(email);
  }
  console.log("hacker");

  if (isAuthenticated) return <Navigate to="/home" />;

  return (
    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
      <form action="#" onSubmit={onSubmit}>
        <h1>Sign in</h1>
        <Icons />
        <span>or use your account</span>
        <input
          value={email}
          onChange={settingEmail}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={settingPassword}
          type="password"
          placeholder="Password"
        />
        <button className={styles.chnaged} onClick={onResetPassword}>
          Forgot your password?
        </button>
        <button type="submit" disabled={user}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
