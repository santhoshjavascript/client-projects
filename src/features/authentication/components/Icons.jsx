// import { useAuth } from "../../../contexts/AuthContext/";
import styles from "./Form.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { signInWithGoogle } from "../redux/user.Slice";
import { useDispatch } from "react-redux";

export default function Icons() {
  // const { signInWithGoogle } = useAuth();

  const dispatch = useDispatch();

  // Handle successful login response from Google
  const handleLoginSuccess = (credentialResponse) => {
    dispatch(signInWithGoogle(credentialResponse));
  };

  // Handle login failure
  const handleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <div className={styles.socialContainer}>
      {/* Google Login button */}
      <GoogleLogin
        onSuccess={handleLoginSuccess} // Callback for successful login
        onError={handleLoginFailure} // Callback for login failure
      />
    </div>
  );
}
