import { Navigate } from 'react-router-dom';
import useAuth from '../../pages/Auth/login/hooks/useAuth';

const PrivateRoute = ({ Component }: { Component: any }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
