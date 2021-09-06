import Axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
    //fetches data^
        const { data } = await Axios.get("/api/products");
        //sends ajax request to get list of products^
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        //dispatching action changes state of redux ; updates homescreen to show products
    } catch(error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
};