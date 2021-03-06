import { combineReducers } from "redux";
import CartReducer from "../../modules/screens/CartScreen/CartSlice";
import CheckoutReducer from "../../modules/screens/CheckoutScreen/CheckoutSlice";
import ProductReducer from "../../modules/screens/ProductCardScreen/ProductSlice";
import AppReducer from "./AppSlice";
export default combineReducers({
  app: AppReducer,
  cart: CartReducer,
  product: ProductReducer,
  checkout: CheckoutReducer,
});
