import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../assets/images/planet.png';

const Navbar = () => (
  <>
    <header className="header flex">
      <div className="logo_div flex">
        <img src={Logo} className="logo" alt="space travel's logo" />
        <h1 className="logoText">Space Travellers Hub</h1>
      </div>
      <ul className="NavLinks flex">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/my_profile">My Profile</NavLink></li>
      </ul>
    </header>
    <Outlet />
  </>
);

export default Navbar;
