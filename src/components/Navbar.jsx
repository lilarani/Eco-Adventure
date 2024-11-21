import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/images/logo.png';
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  let logOutUser = () => {
    logOut();
    toast.success('sign-out successfull');
    navigate('/register');
  };

  const links = (
    <>
      <ul className="flex flex-col md:flex-row gap-3 text-base font-medium">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>

        {user && (
          <>
            <li>
              <NavLink to={'/update'}>Update Profile</NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to={'/profile'}>My Profile</NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-semibold"
            >
              {links}
            </ul>
          </div>
          <img className="w-44" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="relative group">
            <img
              className="w-14 rounded-full mr-2"
              src={user && user?.photoURL}
              alt=""
            />

            <h2 className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute left-0 text-base font-bold">
              {user && user?.displayName}
            </h2>
          </div>

          <div className="flex gap-6 items-center">
            {/* <h2 className="font-semibold text-base">{user && user.email} </h2> */}
            <div className="bg-gray-300 font-bold text-lg ml-3">
              {user && user?.email ? (
                <button onClick={logOutUser} className="px-3 py-1 ">
                  Log-Out
                </button>
              ) : (
                <Link to={'/login'} className="px-3 py-1 ">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
