import {
  SHOW_PASSWORD_LOGIN,
  CHANGE_EMAIL_LOGIN,
  CHANGE_USERNAME_LOGIN,
  CHANGE_PASSWORD_LOGIN,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_LOGIN,
} from "../../types";

const INTIAL_STATE = {
  showPassword: false,
  email: "",
  username: "",
  password: "",
  loading: false,
  error: false,
};

function loginReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case SHOW_PASSWORD_LOGIN:
      return { ...state, showPassword: action.payload };

    case CHANGE_EMAIL_LOGIN:
      return { ...state, email: action.payload };

    case CHANGE_USERNAME_LOGIN:
      return { ...state, username: action.payload };
    case CHANGE_PASSWORD_LOGIN:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    case RESET_LOGIN:
      return { ...INTIAL_STATE };
    default:
      return state;
  }
}

export default loginReducer;
