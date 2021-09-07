import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-contaner">
      <header className="row">
        <div>
          <a href="/" className="logo">
            Plantsy 2.0
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
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
