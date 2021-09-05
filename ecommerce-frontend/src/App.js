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
            {/* <a href="product.html">
    <img src="https://3c9sm1yzqy518hwx3f6o4c64-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/yu-xuan-lee-2i5ZX7Fid4M-unsplash-scaled.jpg" alt="Product" />
  </a>
          <a href="product.html">
    <img class="medium" src="https://www.thehouseofsasha.com/uploads/houseofsasha/articles/b9-711823_l.jpg"/>
  </a>  */}
            <a href="product.html">
              <img src="https://www.plants.com/images/157646lgp_20201029-1604001560668.webp" />
            </a>
            <div class="card-body">
              <a href="product.html">
                <h2>ZZ plant</h2>
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
                  <i class="fa fa-star-half-o"></i>
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
                <h2>ZZ plant</h2>
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
                <h2>ZZ plant</h2>
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
                <h2>ZZ plant</h2>
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
                <h2>ZZ plant</h2>
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
