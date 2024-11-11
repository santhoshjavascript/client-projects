import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  error: null,
  isAuthenticated: !!token,
};

const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
const API_KEY = "AIzaSyD3yGuupb5HWPskBrFuuOPf5oTasMV3ZaY";

const credentialSlice = createSlice({
  name: "credential",
  initialState,
  reducers: {
    signUp(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    signIn(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Async thunk action for signing up
export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}signUp?key=${API_KEY}`, {
      displayName: name,
      email,
      password,
    });

    if (response.data && response.data.idToken) {
      const idToken = response.data.idToken;
      localStorage.setItem("token", idToken);
      dispatch(credentialSlice.actions.signUp(response.data));
    }
  } catch (error) {
    dispatch(
      credentialSlice.actions.setError(
        error.response?.data?.error?.message ||
          "An error occurred during signup."
      )
    );
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}signInWithPassword?key=${API_KEY}`,
      {
        email,
        password,
      }
    );

    if (response.data && response.data.idToken) {
      const idToken = response.data.idToken;
      localStorage.setItem("token", idToken);
      dispatch(credentialSlice.actions.signIn(response.data));
    }
  } catch (error) {
    dispatch(
      credentialSlice.actions.setError(
        error.response?.data?.error?.message ||
          "An error occurred during sign-in."
      )
    );
  }
};

export const signInWithGoogle = (credentialResponse) => (dispatch) => {
  const { credential } = credentialResponse;

  if (credential) {
    localStorage.setItem("token", credential);
    try {
      const userInfo = jwtDecode(credential);
      dispatch(credentialSlice.actions.signUp(userInfo));
    } catch (error) {
      console.error(error);
      dispatch(
        credentialSlice.actions.setError("Failed to decode Google credentials.")
      );
    }
  }
};

export const forgotPassword = (email) => async () => {
  try {
    await axios.post(`${BASE_URL}sendOobCode?key=${API_KEY}`, {
      requestType: "PASSWORD_RESET",
      email,
    });
    alert(
      "If an account with this email exists, a password reset email has been sent."
    );
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error(error.response ? error.response.data : error.message);
  }
};

export default credentialSlice.reducer;
