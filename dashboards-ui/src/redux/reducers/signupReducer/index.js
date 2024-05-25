import {
  SHOW_PASSWORD,
  CHANGE_EMAIL_SIGNUP,
  CHANGE_USERNAME_SIGNUP,
  CHANGE_PASSWORD_SIGNUP,
  RESET_SIGNUP_REDUCER,
} from "../../types";

const INTIAL_STATE = {
  showPassword: false,
  email: "",
  username: "",
  password: "",
};

function signupReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case SHOW_PASSWORD:
      return { ...state, showPassword: action.payload };

    case CHANGE_EMAIL_SIGNUP:
      return { ...state, email: action.payload };

    case CHANGE_USERNAME_SIGNUP:
      return { ...state, username: action.payload };

    case CHANGE_PASSWORD_SIGNUP:
      return { ...state, password: action.payload };

    case RESET_SIGNUP_REDUCER:
      return {
        showPassword: false,
        email: "",
        username: "",
        password: "",
      };

    default:
      return state;
  }
}

export default signupReducer;
