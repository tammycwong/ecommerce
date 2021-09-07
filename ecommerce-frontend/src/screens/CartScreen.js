import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { addToCart } from "../actions/cartActions";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  //location.search returns the value of {qty} in url of addtocarthandler
  //if exist, cast Number in query string
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : PRODUCTID: {productId} Qty: {qty}{" "}
      </p>
    </div>
  );
}
