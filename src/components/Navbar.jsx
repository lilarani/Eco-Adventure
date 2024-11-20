import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <ul className="flex flex-col md:flex-row gap-3 text-base font-medium">
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>

        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/update'}>Update Profile</NavLink>
        </li>

        {user && (
          <>
            <li>
              <NavLink to={'/profile'}>My Profile</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>

        {user && user?.email ? (
          <button onClick={logOut} className="px-3 py-1 bg-gray-200">
            Log-Out
          </button>
        ) : (
          <Link to={'/login'} className="px-3 py-1 bg-gray-200">
            Login
          </Link>
        )}
      </ul>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 py-4">
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
          <a className="text-xl font-bold">Eco Adventure</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">{user.photoURL}</a> */}
          <img
            className="w-10 rounded-full mr-1"
            src={user && user?.photoURL}
            alt=""
          />
          <h2 className="font-semibold text-base">{user && user.email}</h2>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
