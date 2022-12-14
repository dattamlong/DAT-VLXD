import useAuth from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth);
  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
