import React from "react";
import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-contaner">
      <header className="row">
        <div>
          <a href="/" className="logo">
            Generic E-Commerce Site
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product.id} className="card">
                <Product key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer class="row center">Project in Progress</footer>
    </div>
  );
}

export default App;
