import { useContext } from "react"
import Cart from "../components/Cart"
import { CartContext } from "../context/cart.context"

const ShoppingCart = () => {
  const { cart} = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      
     

      <Cart cart={cart}/>


    </div>
  )
}

export default ShoppingCart