const Cart = ({ cart }) => {
  const cartItems = cart ? cart.items : null;
  console.log("cart in cart component", cart)
  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index}>
              <div>
                <h3>{cartItem.name}</h3>
                <p>Size: {cartItem.size}</p>
                <p>Price: ${cartItem.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
