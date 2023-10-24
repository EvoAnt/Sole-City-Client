import { useState } from "react";
import { post } from "../services/authService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
        <button className="heart-icon"  onClick={addToWishlist}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      )}
    </div>
  );
};

export default AddToWishlistButton;
