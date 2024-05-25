import {
  GET_ORDERS_PROD_REQUEST,
  GET_ORDERS_PROD_SUCCESS,
  GET_ORDERS_PROD_FAILURE,
  REMOVE_ORDER_PROD_REQUEST,
  REMOVE_ORDER_PROD_SUCCESS,
  REMOVE_ORDER_PROD_FAILURE,
} from "../../types";
import axios from "axios";

export function getOrdersProdRequest() {
  return {
    type: GET_ORDERS_PROD_REQUEST,
  };
}

export function getOrdersProdSuccess(orders) {
  return {
    type: GET_ORDERS_PROD_SUCCESS,
    payload: orders,
  };
}

export function getOrdersProdFailure() {
  return {
    type: GET_ORDERS_PROD_FAILURE,
  };
}

export function removeOrderProdRequest() {
  return {
    type: REMOVE_ORDER_PROD_REQUEST,
  };
}

export function removeOrderProdSuccess(id) {
  return {
    type: REMOVE_ORDER_PROD_SUCCESS,
    payload: id,
  };
}

export function removeOrderProdFailure() {
  return {
    type: REMOVE_ORDER_PROD_FAILURE,
  };
}

export function getOrders(email) {
  return async function (dispatch) {
    dispatch(getOrdersProdRequest());

    try {
      const data = await axios.get(`http://localhost:5000/get-orders/${email}`);
      dispatch(getOrdersProdSuccess(data.data.orders));
    } catch (e) {
      dispatch(getOrdersProdFailure());
      throw new Error(e);
    }
  };
}

export function deleteOrder(email, id) {
  return async function (dispatch) {
    dispatch(removeOrderProdRequest());

    try {
      await axios.post(`http://localhost:5000/delete-order/${email}/${id}`);
      dispatch(removeOrderProdSuccess(id));
    } catch (e) {
      dispatch(removeOrderProdFailure());
      throw new Error(e);
    }
  };
}
