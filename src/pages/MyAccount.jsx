import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

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

          <Link to={'/edit/my-account'}>
            <button>Edit Account</button>
          </Link>

          <h4>Shipping Address:
            {user.address}
          </h4>



          <h2>My Wishlist</h2>

          <h2>My Orders</h2>
        </>
      )}
    </div>
  );
};

export default MyAccount;
