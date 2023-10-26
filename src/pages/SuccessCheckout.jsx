import { useContext, useEffect } from "react";
import { CartContext } from "../context/cart.context";
import { AuthContext } from "../context/auth.context";

const SuccessCheckout = () => {
  const { clearCart, cart } = useContext(CartContext);
  const { user } = useContext(AuthContext)
  useEffect(() => {
    user && cart && clearCart();
  }, [user, cart]);

  return (
    <div className="SuccessPage">
      <br />
      <h1 className="home-title">Thank you for shopping at SOLE CITY!</h1>
    </div>
  );
};

export default SuccessCheckout;
