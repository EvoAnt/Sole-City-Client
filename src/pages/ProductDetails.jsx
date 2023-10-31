import { useState, useEffect, useContext } from "react";
import { get, post } from "../services/authService";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { CartContext } from "../context/cart.context";
import { RotatingLines } from "react-loader-spinner";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("6");
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { user, isLoggedIn } = useContext(AuthContext);

  const { productId } = useParams();

  const getProduct = (id) => {
    get(`/products/details/${id}`)
      .then((response) => {
        console.log("Found Product ==>", response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const addToCart = () => {
    const requestBody = {
      itemId: productId,
      price: product.price,
      size: selectedSize,
      name: product.name,
      image: product.image,
    };

    if (isLoggedIn) {
      post(`/cart/add-item/${user._id}`, requestBody)
        .then((response) => {
          console.log(`${product.name} added to cart`);
          alert(`${product.name} $${product.price} added to cart`);
          setCart(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  };

  return product ? (
    <div className="ProductDetails">
      <br />
      <Link to="/all-products">
        <button className="form-submit">Back</button>
      </Link>
      {product && (
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.image} alt="sneaker-img" />
          </div>
          <div className="product-info">
            <h5>{product.brand}</h5>
            <h1>{product.name}</h1>
            <h3><b>${product.price}</b></h3>
            <p>{product.description}</p>
            <label htmlFor="dropdown">Select a Size:</label>
            <br />
            <select
              id="dropdown"
              name="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="6">6 US M</option>
              <option value="6.5">6.5 US M</option>
              <option value="7">7 US M</option>
              <option value="7.5">7.5 US M</option>
              <option value="8">8 US M</option>
              <option value="8.5">8.5 US M</option>
              <option value="9">9 US M</option>
              <option value="9.5">9.5 US M</option>
              <option value="10">10 US M</option>
              <option value="10.5">10.5 US M</option>
              <option value="11">11 US M</option>
              <option value="11.5">11.5 US M</option>
              <option value="12">12 US M</option>
              <option value="12.5">12.5 US M</option>
              <option value="13">13 US M</option>
              <option value="14">14 US M</option>
            </select>
            <br />
            <br />
            <button type="button" onClick={addToCart} className="form-submit">
              Add to Cart
            </button>
            <br />
            <br />
            <Link to={`/products/edit/${productId}`}>
              <button className="form-submit">Edit</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="spinner">
      <RotatingLines
        height={100}
        width={100}
        radius={5}
        strokeColor="grey"
        visible={true}
      />
    </div>
  )
};

export default ProductDetails;
