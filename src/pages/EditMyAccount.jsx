import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";

const EditMyAccount = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    image: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data and populate the fields when the component loads
    get(`/users/my-account/edit/${userId}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      name: userInfo.name,
      address: userInfo.address,
      image: userInfo.image,
    };

    // Make a PUT request to update the user's information
    put(`/users/my-account/edit/${userId}`, requestBody)
      .then((response) => {
        console.log("Updated ===>", response.data);
        // Once the request is resolved successfully, navigate back to the user's account page
        navigate(`/my-account`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = () => {
    // Make a DELETE request to delete the user's account
    axiosDelete(`/users/my-account/edit/${userId}`)
      .then((response) => {
        console.log("Deleted User ==>", response.data);
        // Once the delete request is resolved successfully, navigate to the home page or perform any other action as needed
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>EditMyAccount</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={userInfo.image}
            onChange={(e) =>
              setUserInfo({ ...userInfo, image: e.target.value })
            }
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
      <button onClick={deleteProduct}>Delete Account</button>
    </div>
  );
};

export default EditMyAccount;
