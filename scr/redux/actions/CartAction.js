import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from "../constants/CartConstant"


export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  
  export const emptyCart = () => {
    return {
      type:EMPTY_CART,
    };
  };
  
  export const removeCart = (product) => {
    return {
      type: REMOVE_FROM_CART,
      payload: product,
    };
  };