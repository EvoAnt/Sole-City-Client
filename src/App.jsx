import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import Login from './pages/Login'
import Signup from './pages/Signup'
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-account" element={<MyAccount />} />





      </Routes>







    </div>
  )
}

export default App
