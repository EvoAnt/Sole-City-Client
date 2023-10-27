import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const CustomNavbar = () => {
  const { logOutUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle the dark mode class on the body element
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  const navbarStyle = {
    backgroundColor: "#333",
  };

  const brandStyle = {
    color: "red",
  };

  return (
    <Navbar
      className="sticky-navbar"
      bg=""
      variant="dark"
      expand="lg"
      style={navbarStyle}
    >
      <Navbar.Brand as={Link} to="/" style={brandStyle} className="navbar-home">
        SOLE CITY
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Left-aligned links */}
          <Nav.Link as={Link} to="/all-products">
            ALL SNEAKERS
          </Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          {/* Right-aligned links */}

          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>

          {!getToken() && (
            <Nav.Link as={Link} to="/login">
              LOGIN
            </Nav.Link>
          )}

          {getToken() && (
            <Nav.Link as={Link} to="/my-account">
              MY ACCOUNT
            </Nav.Link>
          )}
          {getToken() && (
            <Button variant="danger" onClick={logOutUser}>
              LOGOUT
            </Button>
          )}
          <Nav.Link onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
