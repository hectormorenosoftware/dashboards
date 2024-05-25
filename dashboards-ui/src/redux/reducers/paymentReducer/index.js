import {
  PROCESSING_PAYMENT_REQUEST,
  PROCESSING_PAYMENT_SUCCESS,
  PROCESSING_PAYMENT_FAILURE,
} from "../../types";

const INTIAL_STATE = {
  submittingPayment: false,
  status: "",
};

function paymentReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case PROCESSING_PAYMENT_REQUEST:
      return {
        submittingPayment: true,
        status: "",
      };
    case PROCESSING_PAYMENT_SUCCESS:
      return { submittingPayment: false, status: "succeeded" };

    case PROCESSING_PAYMENT_FAILURE:
      return { submittingPayment: false, status: "failed" };
    default:
      return state;
  }
}

export default paymentReducer;
