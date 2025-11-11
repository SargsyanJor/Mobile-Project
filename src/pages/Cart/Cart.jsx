import "./Cart.css"

export const Cart = ({ cart }) => {

  return (
    <div className="cartBox">
      {
        cart.map((elm) => {

          return (

            <div className="cart-item">
              <div className="cart-left">
                <img
                  src={elm.image}
                  alt="Samsung Galaxy Z Flip 5"
                  className="cart-image"
                />
                <div className="cart-info">
                  <li  className="cart-title">
                    {elm.title}
                  </li>

                </div>
              </div>

              <div className="cart-quantity">
                <button className="qty-btn">−</button>
                <span>{elm.count}</span>
                <button className="qty-btn">+</button>
              </div>

              <div className="cart-total">{elm.initPrice}$</div>

            </div>
          )
        }

        )
      }
    </div>
  )
}
