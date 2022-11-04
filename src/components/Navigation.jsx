import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

export default function Navigation() {
  return (
    <div className="navigation">
      <NavLink className='nav-link' exact to="/"  end>
        My Github
      </NavLink>
      <NavLink className='nav-link' to="/repositories">
        Repositories
      </NavLink>
      <NavLink className='nav-link' to="/testerror">
        Test Error
      </NavLink>
    </div>
  );
}