import Links from './Link';
import Logo from '../assets/images/planet.png';

const Navbar = () => (
  <>
    <header className="header flex">
      <div className="logo_div flex">
        <img src={Logo} className="logo" alt="space travel's logo" />
        <h1 className="logoText">Space Travellers Hub</h1>
      </div>
      <ul className="NavLinks flex">
        <li><Links isactive={false} path="/" name="Rocket" /></li>
        <li><Links isactive={false} path="/missions" name="Missions" /></li>
        <li><Links isactive={false} path="/my_profile" name="My Profile" /></li>
      </ul>
    </header>
  </>
);

export default Navbar;
