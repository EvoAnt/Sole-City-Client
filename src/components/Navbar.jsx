import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const { logOutUser } = useContext(AuthContext);

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <nav className="navbar">
      <Link to={"/"}>Sole City</Link>

      <Link to={"/all-products"}>All Sneakers</Link>

      {!getToken() && (
        <>
          <Link to={"/login"}>Login</Link>
        </>
      )}

      {getToken() && (
        <>
          <Link to={"/my-account"}>My Account</Link>
        </>
      )}
      <Link to={"/cart"}>My Cart</Link>

      {getToken() && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
