import React from 'react'
import { useState } from "react";
import './CartItem.css'


export const CartItem = ({ cart, updateCart }) => {

    let [count, setCount] = useState(cart.count);

    const minus = () => {
        if (count > 1) {
            setCount((count = count - 1))
        }

        updateCart(count, cart.id)
    }

    const plus = () => {
        if (count < 10) {
            setCount(count = count + 1)
        }
        updateCart(count, cart.id)
    }





    return (
        <div className="cart-item">
            <div className="cart-left">
                <img
                    src={cart.image}
                    className="cart-image"
                />
                <div className="cart-info" >
                    <li className="cart-title">
                        {cart.title}
                    </li>

                </div>
            </div>

            <div className="cart-quantity">
                <button onClick={minus} className="qty-btn">−</button>
                <span>{count}</span>
                <button onClick={plus} className="qty-btn">+</button>
            </div>

            <div className="cart-total">{cart.initPrice.toFixed(2)}$</div>

        </div>
    )
}
