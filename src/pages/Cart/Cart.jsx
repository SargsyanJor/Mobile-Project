
import { CartItem } from "../../components/CartItem/CartItem"


export const Cart = ({ cart,updateCart }) => {



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
