import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ProductCard from "../components/ProductCard";
const MyAccount = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user && (
        <>
          <h2>My Account</h2>
          <h3>Welcome {user.name}!</h3>
          <img src={user.image} alt="profile-img" />

          <br />

          <Link to={"/edit/my-account"}>
            <button>Edit Account</button>
          </Link>

          <h4>
            Shipping Address:
            <br />
            {user.address}
          </h4>

          <h2>My Wishlist</h2>
          {user && user.wishlist.length ? (
            user.wishlist.map((current) => (
              <ProductCard
                brand={current.brand}
                name={current.name}
                price={current.price}
                _id={current._id}
                image={current.image}
                isUserPage={true}
              />
            ))
          ) : (
            <p>wishlist empty </p>
          )}
          

          <h2>My Orders</h2>
        </>
      )}
    </div>
  );
};

export default MyAccount;
