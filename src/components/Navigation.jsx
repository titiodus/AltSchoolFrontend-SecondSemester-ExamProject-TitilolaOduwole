import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

export default function Navigation() {
  let activeStyle = {
    color: '#545e6f', 
  };

  let activeClassName = "underline";
  return (
    <div className="navigation">
      <NavLink className='nav-link'style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } exact="true" to="/" end>
        MY GITHUB
      </NavLink>
      <NavLink className='nav-link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/repositories">
        REPOSITORIES
      </NavLink>
      <NavLink className='nav-link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/testerror">
        TEST ERROR
      </NavLink>
    </div>
  );
}