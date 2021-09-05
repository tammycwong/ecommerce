import React from "react";
import data from "../data";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <div key={product.id} className="card">
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
