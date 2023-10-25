import { useContext, useEffect } from "react";
import { post } from "../services/authService";
import { AuthContext } from "../context/auth.context";

const RemovefromWishlist = ({ productId, onRemoved }) => {
    const { authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    const removeProductFromWishlist = async () => {
      try {
        const response = await post(`/users/my-account/wishlist/${productId}`);
        console.log("Removed from wishlist", response.data);
        authenticateUser();
        onRemoved();
      } catch (error) {
        console.error(error);
      }
    };

    removeProductFromWishlist();
  }, [productId, authenticateUser, onRemoved]);

  return null;
};

export default RemovefromWishlist;

