import {
  GET_ORDERS_PROD_REQUEST,
  GET_ORDERS_PROD_SUCCESS,
  GET_ORDERS_PROD_FAILURE,
  REMOVE_ORDER_PROD_REQUEST,
  REMOVE_ORDER_PROD_SUCCESS,
  REMOVE_ORDER_PROD_FAILURE,
} from "../../types";

const INTIAL_STATE = {
  orders: [],
  loading: false,
};

function ordersProdReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDERS_PROD_REQUEST:
      return { ...state, loading: true };
    case GET_ORDERS_PROD_SUCCESS:
      return { orders: action.payload, loading: false };
    case GET_ORDERS_PROD_FAILURE:
      return { ...state, loading: false };
    case REMOVE_ORDER_PROD_REQUEST:
      return { ...state };
    case REMOVE_ORDER_PROD_SUCCESS:
      return {
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case REMOVE_ORDER_PROD_FAILURE:
      return { ...state };

    default:
      return state;
  }
}

export default ordersProdReducer;
