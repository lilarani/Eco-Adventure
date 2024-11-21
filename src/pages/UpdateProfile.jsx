import React, { useContext, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
  const navigate = useNavigate();

  const { user, updateUserProfile } = useContext(AuthContext);
  const [update, setUpdate] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
    e.target.reset();
  };

  const handleUpdate = () => {
    if (!update.name || !update.photoURL) {
      toast.error('Name and Photo URL cannot be empty!');
      return;
    }

    updateUserProfile(update.name, update.photoURL)
      .then(() => {
        toast.success(`Profile updated successfully!`);
        e.target.reset();
        navigate('/profile');
      })
      .catch(() => {
        toast.error(`Failed to update profile!`);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center my-12 p-2">
      <Helmet>
        <title>Eco Adventure | update-profile</title>
      </Helmet>
      <div className="card flex flex-col items-center justify-center card-compact bg-base-100 w-96 shadow-xl">
        <div className="border-2 rounded-full w-32 h-32 relative">
          <figure>
            {user && user?.photoURL ? (
              ''
            ) : (
              <p className="absolute left-3 top-4">Profile</p>
            )}
            <FaCamera className="absolute bottom-3 right-0 w-12 cursor-pointer" />
            <img
              className="w-full h-32 rounded-full"
              src={user && user?.photoURL}
            />
          </figure>
        </div>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="border-2 p-2"
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              className="border-2 p-2 "
              type="text"
              placeholder="photo-url"
              name="photoURL"
              onChange={handleChange}
            />
          </div>
          <div className="form-control mt-6 ">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
