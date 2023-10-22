import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const MyAccount = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>

      {
        
        user && 
        
        <h2>Welcome {user.name}!</h2>
        
      }

    <h2>My Account</h2>

    <h2>My Wishlist</h2>

    <h2>My Orders</h2>
    
    </div>
  );
};

export default MyAccount;
