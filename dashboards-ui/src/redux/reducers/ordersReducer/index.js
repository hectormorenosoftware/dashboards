import { ADD_ORDER_TYPE, ADD_ORDER, REMOVE_ORDER } from "../../types";

const INTIAL_STATE = {
  orderType: {},
  orders: [],
};

function ordersReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case ADD_ORDER_TYPE:
      const { text, image, title, phoneNumber, email, price } = action.payload;

      return {
        ...state,
        orderType: { text, image, title, phoneNumber, email, price },
      };

    case ADD_ORDER:
      const newArr = [...state.orders, action.payload];
      return { ...state, orders: newArr };

    case REMOVE_ORDER:
      return {
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default ordersReducer;
