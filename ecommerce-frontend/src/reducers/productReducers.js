const { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } = require('../constants/productConstants');

export const productListReducer = (
    state = { loading: true, products: [] }, 
    action) => {
    //when showing products on homescreen, default shouldn't be null, but empty array
    switch(action.type) {
    //action types are fail, success, request
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return{ loading: false, error: action.payload };
        default:
            return state;
    }
 
};