import { createContext, useState, useEffect, useContext } from "react";
import { parsePath, useNavigate } from "react-router-dom";
import { get, post } from "../services/authService";
import { AuthContext } from "./auth.context";

const CartContext = createContext();

function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState(null);

  // Function to update the cart's items
  const updateCartItems = (updatedItems) => {
    // You can use this function to set the new cart items in the state
    setCart((prevCart) => ({
      ...prevCart,
      items: updatedItems,
    }));
  };

  // Function to update the cart's total
  const updateCartTotal = (newTotal) => {
    // You can use this function to set the new total in the state
    setCart((prevCart) => ({
      ...prevCart,
      total: newTotal,
    }));
  };

  // Function to update the quantity of a cart item
  const updateCartItemQuantity = (itemId, newQuantity) => {
    post(`/cart/update-quantity/${itemId}/${cart._id}`, {
      quantity: newQuantity,
    })
      .then((response) => {
        console.log("Quantity ==>", response.data);
        const updatedItems = response.data.items.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        updateCartItems(updatedItems);
        updateCartTotal(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to remove an item from the cart
  const removeCartItem = (itemId) => {
    get(`/cart/remove-item/${itemId}/${cart._id}`)
      .then((response) => {
        console.log("Removed item ==>", response.data);
        const updatedItems = response.data.items.filter(
          (item) => item.itemId !== itemId
        );
        updateCartItems(updatedItems);
        updateCartTotal(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to clear the user's cart
  const clearCart = () => {
    if (user) {
      // Make a request to your backend to clear the user's cart
      post(`/cart/clear/${cart._id}`)
        .then((response) => {
          console.log("Cart cleared:", response.data);
          // Reset the cart state to an empty cart
          setCart(null);
        //   setCart({ items: [], total: 0 });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (user) {
      get("/cart")
        .then((response) => {
          // console.log('Cart ==>',response);
          setCart(response.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        updateCartItemQuantity,
        removeCartItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
