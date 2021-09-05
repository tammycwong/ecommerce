import React from "react";
import data from './data';

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
            { data.products.map(product => ( 
            <div key={product.id} className="card">
              <a href={`/product/${product.id}`}>
                <img className="medium" src={product.image} alt={product.name}/>
              </a>
            <div className="card-body">
              <a href="product.html">
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star-half-o"></i></span>
                {product.numReviews}
              </div>
              <div className="price">
                <p>${product.price}</p>
              </div>
            </div>
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
