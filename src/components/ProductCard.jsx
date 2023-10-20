import { Link } from "react-router-dom"

const ProductCard = ({ brand, name, price, _id, image }) => {
  return (
    <div className="ProductCard">
        <Link to={`/products/${_id}`}>
            <img src={image} alt="sneaker-image" />
            <h6>{brand}</h6>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </Link>
    </div>
  )
}

export default ProductCard