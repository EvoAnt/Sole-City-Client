import { useState } from "react";
import { post } from "../services/authService";

const AddToWishlistButton = ({ productId }) => {
  const [isAdded, setIsAdded] = useState(false);

  const addToWishlist = () => {
    // Make a POST request to save the product to the user's wishlist
    post(`/users/my-account/wishlist/${productId}`)
      .then((response) => {
        console.log(`${productId} added to wishlist`);
        setIsAdded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {isAdded ? (
        <p>Product added to wishlist!</p>
      ) : (
        <button onClick={addToWishlist}>Add to Wishlist</button>
      )}
    </div>
  );
};

export default AddToWishlistButton;
