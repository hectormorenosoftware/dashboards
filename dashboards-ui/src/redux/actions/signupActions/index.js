import {
  SHOW_PASSWORD,
  CHANGE_EMAIL_SIGNUP,
  CHANGE_USERNAME_SIGNUP,
  CHANGE_PASSWORD_SIGNUP,
  RESET_SIGNUP_REDUCER,
} from "../../types";

export function resetSignUpReducer() {
  return {
    type: RESET_SIGNUP_REDUCER,
  };
}

export function showPassword(show) {
  return {
    type: SHOW_PASSWORD,
    payload: show,
  };
}

export function changeEmailSignUp(email) {
  return {
    type: CHANGE_EMAIL_SIGNUP,
    payload: email,
  };
}

export function changeUserNameSignUp(username) {
  return {
    type: CHANGE_USERNAME_SIGNUP,
    payload: username,
  };
}

export function changePasswordSignUp(password) {
  return {
    type: CHANGE_PASSWORD_SIGNUP,
    payload: password,
  };
}
