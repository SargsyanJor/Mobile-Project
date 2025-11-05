// import { RouterProvider } from "react-router-dom"


import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";

import "./styles/App.css"
import { Product } from "../pages/Product/Product";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, []);

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
        </Route>

      </Routes>




    </>
  )
}

export default App
