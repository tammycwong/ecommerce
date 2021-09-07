import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <BrowserRouter>
    <div className="grid-contaner">
      <header className="row">
        <div>
          <Link to="/" className="logo">
            Plantsy 2.0
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" component={HomeScreen} exact/>
      </main>
      <footer className="row center">Project in Progress</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
