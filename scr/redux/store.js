import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {CartReducer} from "../redux/reducers/CartReducer"
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    cart:CartReducer,
    user:userReducer
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)


export default store;