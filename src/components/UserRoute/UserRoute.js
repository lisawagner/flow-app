import { useAuthContext } from '../../hooks/useAuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = () => {
  const { user } = useAuthContext()
  console.log('User: ', user);

  return user ? <Outlet /> : <Navigate to='/flow' replace />
}

export default UserRoute
