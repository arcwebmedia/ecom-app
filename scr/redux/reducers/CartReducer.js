import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from "../constants/CartConstant"

var cart = []

export const CartReducer = (state = cart, { type, payload }) => {
    switch (type) {
      case ADD_TO_CART:
        const exist = state.find((x) => x._id === payload._id);
        if (exist) {
          return state.map((x) =>
            x._id === payload._id ? { ...x, qty: x.qty + 1 } : x
          );
        } else {
          return [
            ...state,
            {
              ...payload,
              qty: 1,
            },
          ];
        }
  
      case REMOVE_FROM_CART:
        const exist1 = state.find((x) => x._id === payload._id);
        if (exist1.qty === 1) {
          return state.filter((x) => x._id !== exist1._id);
        } else {
          return state.map((x) => {
            return x._id === payload._id ? { ...x, qty: x.qty - 1 } : x;
          });
        }
      case EMPTY_CART:
        return (state = []);
      default:
        return state;
    }
  };