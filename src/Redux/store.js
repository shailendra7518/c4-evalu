import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

// export const store = createStore(); // add your reducers here
const RootReducer=combineReducers({
  User:loginReducer
})
export const store=createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
