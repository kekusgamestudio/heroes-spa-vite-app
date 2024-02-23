import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  const { authState } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastpath = pathname + search;
  localStorage.setItem('lastPath', lastpath);
  //console.log(lastpath);

  return (authState.logged) ? children : <Navigate to='/login'/>
}
