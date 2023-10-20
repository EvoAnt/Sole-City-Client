import { useState, useEffect } from "react";
import { get } from "../services/authService";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

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
          <button type="submit">Add to Cart</button>
        </>
      )}


      <Link to={`/products/edit/${productId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
