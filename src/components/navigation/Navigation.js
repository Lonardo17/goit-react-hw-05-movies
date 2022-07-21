import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import constants from 'path';

const { home, movies } = constants;

export default function Navigation() {
  return (
    <nav>
          <NavLink
              exact = "true"
              to={home}
              className={({isActive})=>(isActive? s.navActive : s.nav)}
              >
          Home
              
        </NavLink>
        <NavLink to={movies} className={({isActive})=>(isActive? s.navActive : s.nav)} >
        Movies
        </NavLink>
        </nav>
  );
}