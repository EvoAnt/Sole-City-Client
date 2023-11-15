import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { fileChange } from "../services/fileChange";

const EditMyAccount = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { setUser, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Fetch user data and populate the fields when the component loads
    get(`/users/my-account/edit`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      name: userInfo.name,
      address: userInfo.address,
      image: image,
    };

    // Make a PUT request to update the user's information
    put(`/users/my-account/edit/${userInfo._id}`, requestBody)
      .then((response) => {
        console.log("Updated ===>", response.data);
        setUser(response.data);
        // Once the request is resolved successfully, navigate back to the user's account page
        navigate(`/my-account`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAccount = () => {
    // Make a DELETE request to delete the user's account
    axiosDelete(`/users/my-account/edit/${userInfo._id}`)
      .then((response) => {
        console.log("Deleted User ==>", response.data);
        // Once the delete request is resolved successfully, navigate to the home page
        logOutUser();
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleAddressChange = (e) => {
    setUserInfo({ ...userInfo, address: e.target.value });
  };

  const handleFileChange = (e) => {
    setDisabled(true);
    fileChange(e)
      .then((response) => {
        setImage(response.data.image);
        setDisabled(false);
        console.log("Image changed");
      })
      .catch((err) => {
        setDisabled(false);
        console.log("Error while uploading the file: ", err);
      });
  };
  return userInfo ? (
    <div className="edit-account-container">
      <h1 className="form-title">Edit My Account</h1>

      <form onSubmit={handleFormSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleNameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={userInfo.address || ""}
            onChange={handleAddressChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image URL:
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="form-input"
          />
        </div>

        <input type="submit" value="Update Profile" className="form-submit" />
        <span className="button-space" />
        <button onClick={deleteAccount} className="delete-button">
          Delete Account
        </button>
      </form>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditMyAccount;
