import { post } from "../services/authService";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ProductCard from "../components/ProductCard";




const MyAccount = () => {

  const { user, authenticateUser } = useContext(AuthContext);

  const handleRemoveFromWishlist = async (productId) => {
    console.log('ID -->', productId);
      try {
        const response = await post(`/users/my-account/wishlist/remove/${productId}`);
        console.log("Removed from wishlist", response.data);
        authenticateUser();
      } catch (error) {
        console.error(error);
      }
    
  };
    


  return (
    <div className="user-profile">
      {user && (
        <>
          <h2>MY ACCOUNT:</h2>
          <h3 className="welcome">Welcome {user.name}!</h3>
          <img className="profile-img" src={user.image} alt="profile-img" />
          <br />
          <br />
          <Link to={"/edit/my-account"}>
            <button className="edit-button">Edit Account</button>
          </Link>

          <div className="user-section">
            <div className="shipping-address">
              <h4>Shipping Address:</h4>
              <p>{user.address}</p>
            </div>
          </div>

          <br />

          <h2>MY WISHLIST:</h2>
          <div className="user-section">
            {user && user.wishlist.length ? (
              <div className="wishlist">
                {user.wishlist.map((current) => (
                  <ProductCard
                    brand={current.brand}
                    name={current.name}
                    price={current.price}
                    _id={current._id.toString()}
                    image={current.image}
                    isUserPage={true}
                    onRemoveFromWishlist={()=>handleRemoveFromWishlist(current._id)}
                  />
                  
                ))}
                
              </div>
            ) : (
              <p className="empty-wishlist">Wishlist is empty</p>
            )}
          </div>

          <br />

          <h2>MY ORDERS:</h2>
          <div className="user-section"></div>
        </>
      )}
    </div>
  );
};

export default MyAccount;
