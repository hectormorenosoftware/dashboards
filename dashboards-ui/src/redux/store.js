import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import paymentReducer from "./reducers/paymentReducer";
import ordersReducer from "./reducers/ordersReducer";
import editorReducerDemo from "./reducers/editorReducerDemo";
import signupReducer from "./reducers/signupReducer";
import loginReducer from "./reducers/loginReducer";
import newsReducer from "./reducers/newsReducer";
import editorReducerProd from "./reducers/editorReducerProd";
import ordersProdReducer from "./reducers/ordersProdReducer";

const reducers = combineReducers({
  paymentReducer,
  ordersReducer,
  editorReducerDemo,
  signupReducer,
  loginReducer,
  newsReducer,
  editorReducerProd,
  ordersProdReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
