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
  const [cart, setCart] = useState([]);


  useEffect(() => {
    instance.get("/products")
      .then((res) => setProducts(res.data.map((elm) => ({ ...elm, count: 1, initPrice: elm.price }))))
  }, []);

 const cartLenght = cart.length



  const addToCard = (item) => {

    let bool = true

    cart.forEach((el) => {
      if (el.id === item.id) {
        bool = false
        setCart(cart.map((e) => {
          if (e.id === item.id) {
            return {
              ...e,
              count: ++e.count,
              initPrice: e.count * e.price
            }
          } else {
            return e
          }
        }))
      }
    })


    if (bool) {
      setCart((prev) => [...prev, item])
    }



  }

  const updateCart = (count,id) => {
    setCart((cart.map((c)=> {
      if(c.id === id) {
        return {
          ...c,
         count:count,
         initPrice : count * c.price
        } 
        }else {
          return c
      }
    })))
  }

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <Routes >
        <Route path="/" element={<Layout cartLenght={cartLenght} />} >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products} addToCard={addToCard}  />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        </Route>

      </Routes>




    </>
  )
}

export default App
