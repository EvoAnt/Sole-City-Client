import { useContext, useState } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../context/cart.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

const ShoppingCart = () => {
  const { cart, updateCartItemQuantity, removeCartItem } =
    useContext(CartContext);

  const [checkout, setCheckout] = useState();

  const navigate = useNavigate();

  const handleCheckout = () => {
    post("/cart/checkout", { total: cart.total })
      .then((response) => {
        console.log(response.data);
        setCheckout(response.data);
        window.location.assign(response.data.url);
        // navigate('/checkout')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="CartDetailsContainer">
      <Cart
        cart={cart}
        updateCartItemQuantity={updateCartItemQuantity}
        removeCartItem={removeCartItem}
      />
      

      <Link to={"/all-products"}>
        <button>Continue Shopping</button>
      </Link>
      <br />
      <br />
      <Link>
        <button onClick={handleCheckout}>Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
