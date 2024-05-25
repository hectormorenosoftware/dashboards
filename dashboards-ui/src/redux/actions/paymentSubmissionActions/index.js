import {
  PROCESSING_PAYMENT_REQUEST,
  PROCESSING_PAYMENT_SUCCESS,
  PROCESSING_PAYMENT_FAILURE,
} from "../../types";
import { resetSignUpReducer } from "../signupActions";
import axios from "axios";

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};

export function processingPaymentRequest() {
  return {
    type: PROCESSING_PAYMENT_REQUEST,
  };
}

export function processingPaymentSuccess(response) {
  return {
    type: PROCESSING_PAYMENT_SUCCESS,
    payload: response,
  };
}

export function processingPaymentFailure(error) {
  return {
    type: PROCESSING_PAYMENT_FAILURE,
    payload: error,
  };
}

export function processPayment(paymentInformation, credentials, history) {
  const { email, password, username } = credentials;

  return async function (dispatch) {
    dispatch(processingPaymentRequest());

    try {
      await axios.post("http://localhost:5000/charge-card", {
        headers: headers,
        params: paymentInformation,
      });

      await axios.post(
        `http://localhost:5000/create-user/${email}/${username}/${password}`
      );

      history.push("/editor");

      dispatch(processingPaymentSuccess());
      dispatch(resetSignUpReducer());
    } catch (e) {
      dispatch(processingPaymentFailure());
      throw new Error(e);
    }
  };
}
