import { Link } from "react-router-dom";
import AddToWishlistButton from "../components/AddtoWishlistButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({
  brand,
  name,
  price,
  _id,
  image,
  isUserPage,
  onRemoveFromWishlist,
}) => {


  // return (
  //   <div className="ProductCard">
  //     {!isUserPage && <AddToWishlistButton productId={_id} />}

  //     <Link to={`/products/${_id}`} className="product-card-link">
  //       <img src={image} alt="sneaker-image" />
  //       <h5>{brand}</h5>
  //       <h3>{name}</h3>
  //       <h3>US ${price}</h3>
  //     </Link>

  //     {isUserPage && (
  //       <button
  //         className="remove-wishlist-button"
  //         onClick={ (_id) => {onRemoveFromWishlist(_id)}}
  //       >
  //         <FontAwesomeIcon icon={faTimes} color="red" />
  //       </button>
  //     )}
  //   </div>
  // );

  return (
    <Card className="ProductCard">
      <Card.Body>
        {!isUserPage && <AddToWishlistButton productId={_id} />}

        <Card.Link as={Link} to={`/products/${_id}`} className="product-card-link">
          <Card.Img src={image} alt="sneaker-image" />
          <Card.Title>{brand}</Card.Title>
          <Card.Title>{name}</Card.Title>
          <Card.Title>US ${price}</Card.Title>
        </Card.Link>

        {isUserPage && (
          <button
            className="remove-wishlist-button"
            onClick={() => onRemoveFromWishlist(_id)}
          >
            <FontAwesomeIcon icon={faTimes} color="red" />
          </button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
