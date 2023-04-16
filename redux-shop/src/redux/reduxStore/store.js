import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'



const middlewares = [thunk];
// create app store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
