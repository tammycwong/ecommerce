import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstant";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  //defining action always returns async action has 2 parameters, dispatch and getState
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data.id,
      qty,
    },
  });
};
