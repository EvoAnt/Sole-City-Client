import { useContext } from "react"
import Cart from "../components/Cart"
import { CartContext } from "../context/cart.context"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
  const { cart, updateCartItemQuantity, removeCartItem } = useContext(CartContext)

  return (
    <div>
      
     

      <Cart cart={cart} updateCartItemQuantity={updateCartItemQuantity} removeCartItem={removeCartItem} />

      <Link to={'/all-products'}>
        <button>Continue Shopping</button>
      </Link>
      <br />
      <br />
      <Link>
        <button>Checkout</button>
      </Link>


    </div>
  )
}

export default ShoppingCart