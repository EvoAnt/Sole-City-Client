
import { createContext, useState, useEffect, useContext } from "react";
import { parsePath, useNavigate } from "react-router-dom";
import { get } from "../services/authService";
import { AuthContext } from "./auth.context";

const CartContext = createContext();

function CartProvider({ children }) {

    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState(null)

 
  useEffect(() => {
    if (user) {
        get('/cart')
        .then((response) => {
            // console.log('Cart ==>',response);
            setCart(response.data[0])
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
