import React from "react";

function App() {
  return (
    <div class="grid-contaner">
      <header class="row">
        <div>
          <a href="index.html" class="logo">
            Generic E-Commerce Site
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <main>
        <div class="row center">
          <div class="card">
            <a href="product.html">
              <img src="https://www.plants.com/images/1566418978368_20190821-1566418982051.webp" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>ZZ plant</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star-half-o"></i>
                </span>
              </div>
              <div className="price">
                <p>$120</p>
              </div>
            </div>
          </div>

          <div className="card">
            <a href="product.html">
              <img src="https://www.plants.com/images/1566427725771_20190821-1566427728395.webp" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Money Tree</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">
                <p>$120</p>
              </div>
            </div>
          </div>

          <div class="card">
            <a href="product.html">
              <img src="https://www.plants.com/images/177111_20210218-1613669870200.webp" />
            </a>
            <div class="card-body">
              <a href="product.html">
                <h2>Aloe Vera Plant</h2>
              </a>
              <div class="rating">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <div class="price">
                <p>$120</p>
              </div>
            </div>
          </div>

          <div class="card">
            <a href="product.html">
              <img src="https://www.plants.com/images/157639L_20201120-1605903492274.webp" />
            </a>
            <div class="card-body">
              <a href="product.html">
                <h2>Pothos</h2>
              </a>
              <div class="rating">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <div class="price">
                <p>$120</p>
              </div>
            </div>
          </div>

          <div class="card">
            <a href="product.html">
              <img src="https://www.plants.com/images/157646lgp_20201029-1604001560668.webp" />
            </a>
            <div class="card-body">
              <a href="product.html">
                <h2>Snake Plant</h2>
              </a>
              <div class="rating">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <div class="price">
                <p>$120</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="row center">Project in Progress</footer>
    </div>
  );
}

export default App;
