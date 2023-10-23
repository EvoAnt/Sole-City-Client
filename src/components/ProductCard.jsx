import { Link } from "react-router-dom"
import AddToWishlistButton from "../components/AddtoWishlistButton"

const ProductCard = ({ brand, name, price, _id, image, isUserPage}) => {
  return (
    <div className="ProductCard">
        <Link to={`/products/${_id}`} className="product-card-link">
            <img src={image} alt="sneaker-image" />
            <h5>{brand}</h5>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </Link>
       
        {!isUserPage && <AddToWishlistButton productId={_id}/>}
    </div>
  )
}

export default ProductCard