import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import Icons from "./Icons";
import { Navigate } from "react-router-dom";
import { signUp as signUpAction } from "../redux/user.Slice";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, user, error } = useSelector(
    (state) => state.credential
  );

  // Optional: Log error message if it exists
  useEffect(() => {
    if (error) {
      console.error("Error:", error);
    }
  }, [error]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function onSignUp(event) {
    event.preventDefault();
    if (!name || !email || !password) return;

    await dispatch(signUpAction(name, email, password));

    // Log user and isAuthenticated after sign up
    console.log(
      "After Sign Up - User:",
      user,
      "Is Authenticated:",
      isAuthenticated
    );
  }

  if (isAuthenticated) return <Navigate to="/home" />;

  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form action="#" onSubmit={onSignUp}>
        <h1>Create Account</h1>
        <Icons />
        <span>or use your email for registration</span>
        <input
          value={name}
          onChange={handleChangeName}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={handleChangeEmail}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={handleChangePassword}
          type="password"
          placeholder="Password"
        />
        <button type="submit" disabled={!name || !email || !password}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
