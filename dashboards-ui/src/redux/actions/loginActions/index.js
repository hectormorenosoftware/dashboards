import {
  SHOW_PASSWORD_LOGIN,
  CHANGE_EMAIL_LOGIN,
  CHANGE_USERNAME_LOGIN,
  CHANGE_PASSWORD_LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  RESET_LOGIN,
} from "../../types";
import axios from "axios";

import { getUserDashboardSuccess } from "../editorProdActions";

export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}

export function showPasswordLogin(show) {
  return {
    type: SHOW_PASSWORD_LOGIN,
    payload: show,
  };
}

export function changeEmailLogin(email) {
  return {
    type: CHANGE_EMAIL_LOGIN,
    payload: email,
  };
}

export function changeUserNameLogin(username) {
  return {
    type: CHANGE_USERNAME_LOGIN,
    payload: username,
  };
}

export function changePasswordLogin(password) {
  return {
    type: CHANGE_PASSWORD_LOGIN,
    payload: password,
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function login(credentials, history) {
  const { email, password } = credentials;

  return async function (dispatch) {
    dispatch(loginRequest());

    try {
      await axios.post(`http://localhost:5000/login/${email}/${password}`);
      const data = await axios.get(
        `http://localhost:5000/get-dashboard-data/${email}`
      );

      const today = new Date();
      const localDate = today.toLocaleDateString();
      const date1 = new Date(data.data.dateOfExpiration);
      const date2 = new Date(localDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        await axios.post(`http://localhost:5000/delete-user/${email}`);
        await axios.post(
          `http://localhost:5000/delete-user-all-orders/${email}`
        );

        return dispatch(loginError());
      }

      dispatch(loginSuccess());
      dispatch(getUserDashboardSuccess(data.data));
      history.push("/editor");
    } catch (e) {
      dispatch(loginError());
      throw new Error(e);
    }
  };
}
