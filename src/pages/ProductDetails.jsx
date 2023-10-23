import { useState, useEffect } from "react";
import { get } from "../services/authService";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState([]);

  const { productId } = useParams();

  const getProduct = (id) => {
    get(`/products/${id}`)
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
  }, []);



  //Need to fix this//
  const addToCart = () => {
    
    post("/cart/create")
      .then((response) => {
        console.log(`${productId} added to cart`);
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="ProductDetails">
      <Link to="/all-products">
        <button>Back</button>
      </Link>
      {product && (
        <>
          <img src={product.image} alt="sneaker-img" />
          <h5>{product.brand}</h5>
          <h1>{product.name}</h1>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <label htmlFor="dropdown">Select a Size:</label>
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
          <button type="button" onClick={addToCart}>
            Add to Cart
          </button>
        </>
      )}

      <Link to={`/products/edit/${productId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
