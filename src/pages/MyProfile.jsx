import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center my-20 space-y-2">
      <Helmet>
        <title>Eco Adventure | my-profile</title>
      </Helmet>
      <h1 className="text-3xl font-bold">My Profile</h1>
      <h2 className="font-semibold text-xl mb-4">
        Welcome, {user.displayName}
      </h2>
      <img className="rounded-full w-36" src={user.photoURL} alt="" />
      <h3 className="font-bold text-xl">{user.displayName}</h3>
      <h3 className="font-semibold text-lg">{user.email}</h3>
      <NavLink
        to={'/update'}
        className="px-3 py-1 bg-gray-300 text-base font-semibold"
      >
        Update Profile
      </NavLink>
    </div>
  );
};

export default MyProfile;
