import { Navigate } from 'react-router-dom';
import useAuth from '../../pages/Auth/login/hooks/useAuth';

const PrivateRoute = ({ Component }: { Component: any }) => {
  const { isAuthenticatedInRef } = useAuth();

  console.log(isAuthenticatedInRef.current);

  return isAuthenticatedInRef.current ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
