import { Link } from "react-router-dom";
import AddToWishlistButton from "../components/AddtoWishlistButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  brand,
  name,
  price,
  _id,
  image,
  isUserPage,
  onRemoveFromWishlist,
}) => {


  return (
    <div className="ProductCard">
      {!isUserPage && <AddToWishlistButton productId={_id} />}

      <Link to={`/products/${_id}`} className="product-card-link">
        <img src={image} alt="sneaker-image" />
        <h5>{brand}</h5>
        <h3>{name}</h3>
        <h3>US ${price}</h3>
      </Link>

      {isUserPage && (
        <button
          className="remove-wishlist-button"
          onClick={ (_id) => {onRemoveFromWishlist(_id)}}
        >
          <FontAwesomeIcon icon={faTimes} color="red" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
