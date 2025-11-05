// import { RouterProvider } from "react-router-dom"

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Product } from "../pages/Product/Product";

import axios from "axios";
import "./styles/App.css"


  export const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
  })

function App() {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance.get("/products")
      .then((res) => setProducts(res.data))
  }, []);

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>




    </>
  )
}

export default App
