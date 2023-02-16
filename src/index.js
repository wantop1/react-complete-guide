import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./context/products-context";
import "./index.css";
import App from "./App";
import configureProductsStore from './hooks-store/products-store';

configureProductsStore();

ReactDOM.render(
  <ProductsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContext>,
  document.getElementById("root")
);
