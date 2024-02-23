import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, logout } = useContext(AuthContext);

  let name = 'No user';
  if (authState.user?.name) {
    name = authState.user?.name;
  }

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link 
          className="navbar-brand" 
          to="/"
        >
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/marvel"
            >
                Marvel
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/dc"
            >
                DC
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/search"
            >
                Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end p-2">
          <div className="navbar-nav ml-auto">
            <span className='nav-item nav-link text-primary'>
              { name }
            </span>
            <button 
              className='nav-item nav-link btn'
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
    </nav>
  )
}