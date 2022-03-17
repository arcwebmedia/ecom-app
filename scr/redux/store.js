import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {CartReducer} from "../redux/reducers/CartReducer"
import { userReducer } from "./reducers/userReducer";
import {productsReducer} from "./reducers/productReducer"

const rootReducer = combineReducers({
    cart:CartReducer,
    user:userReducer,
    product:productsReducer
})

const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)


export default store;