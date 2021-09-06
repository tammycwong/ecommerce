import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };
    //call function to run it
    fetchData();
  }, []);

  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
