import { useContext } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let loc = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={loc.pathname} to={'/login'}></Navigate>;
};

export default PrivetRoute;
