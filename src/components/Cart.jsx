const Cart = ({ cart, updateCartItemQuantity, removeCartItem }) => {
  const cartItems = cart ? cart.items : null;
  const cartTotal = cart ? cart.total : 0;
  // console.log("items in cart component", cartItems)

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  // Function to handle removing an item from the cart
  const handleRemoveItem = (itemId) => {
    removeCartItem(itemId);
  };

  return (
    <div className="CartDetailsContainer">
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((cartItem, index) => (
            <div key={index} className="CartDetails">
              <img src={cartItem.image} alt="" />
              <h3>{cartItem.name}</h3>
              <p>Size: {cartItem.size}</p>
              <p>Quantity:</p>
              <select
                value={cartItem.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(
                    cartItem.itemId,
                    parseInt(e.target.value)
                  )
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
              <p>Price: ${cartItem.price.toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(cartItem.itemId)}>
                Remove
              </button>
              <hr />
            </div>
          ))}
          <p>Cart Total: ${cartTotal.toFixed(2)}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
