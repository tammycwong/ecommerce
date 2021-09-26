import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({product}) {
  const {id, name, rating, price, numReviews} = product;

  return (
    <div key={product.id} className="card">
      <Link to={`/product/${id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />

        <div className="price">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}
