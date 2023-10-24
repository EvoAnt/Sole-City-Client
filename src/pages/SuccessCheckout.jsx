import { useContext, useEffect } from "react"
import { CartContext } from "../context/cart.context"

const SuccessCheckout = () => {

  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart();
  }, [])
  

  return (
    <div>
      <h1>Thank you for shopping at Sole City!</h1>
    </div>
  )
}

export default SuccessCheckout