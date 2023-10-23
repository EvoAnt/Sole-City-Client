import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ShoppingCart from "./pages/ShoppingCart";
import EditMyAccount from "./pages/EditMyAccount";
import './App.css'

function App() {

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };
  

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/edit/:productId" element={<EditProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/edit/my-account" element={<EditMyAccount />} />




      </Routes>







    </div>
  )
}

export default App
