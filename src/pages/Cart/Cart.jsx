
import { CartItem } from "../../components/CartItem/CartItem"


export const Cart = ({ updateCart }) => {

  

  const cart = JSON.parse(localStorage.getItem("cart"))

  return (
    <div className="cartBox">
      {
        cart.map((elm) => {
          return <CartItem  key={elm.id} cart={elm} updateCart={updateCart} />
        }
        )
      }
    </div>
  )
}
