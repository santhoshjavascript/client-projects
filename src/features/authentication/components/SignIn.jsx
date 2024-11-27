// import { useState } from "react";
import styles from "./Form.module.css";
// import Icons from "./Icons";
// import { useAuth } from "../../../contexts/AuthContext";
// import { Navigate } from "react-router-dom";
// import { signIn, forgotPassword } from "../redux/user.Slice";
// import { useDispatch, useSelector } from "react-redux";
import { Eye, KeySquare, Lock, Mail } from "lucide-react";
import Button from "../../../components/Button/Button";

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isAuthenticated, signIn, user, forgotPassword } = useAuth();
  // const { isAuthenticated, user } = useSelector(
  //   (current) => current.credential
  // );

  // function settingEmail(event) {
  //   setEmail(event.target.value);
  // }

  // function settingPassword(event) {
  //   setPassword(event.target.value);
  // }

  // async function onSubmit(event) {
  //   event.preventDefault();
  //   if (!email || !password) return;
  //   await dispatch(signIn(email, password));
  // }

  // function onResetPassword() {
  //   if (!email) return;
  //   forgotPassword(email);
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
          <Mail className={styles.inputIcon} />
          <input
            type="email"
            placeholder="Email address"
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

        <div className={styles.formOptions}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#www" className={styles.forgotPassword}>
            Forgot password?
          </a>
        </div>

        <Button bgColor="#000" color="#fff" size="sm">
          Sign in
        </Button>
      </form>

      <div className={styles.socialLogin}>
        <p>Or continue with</p>
        <div className={styles.socialButtons}>
          <button className={styles.socialBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="facebook"
              height="18"
              width="18"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
            <span>Facebook</span>
          </button>
          <button className={styles.socialBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
              id="google"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            <span>Google</span>
          </button>
        </div>
      </div>

      <p className={styles.signupLink}>
        Don't have an account? <a href="#www">Sign up</a>
      </p>
    </div>
  );
}

export default SignIn;
