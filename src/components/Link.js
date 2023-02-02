import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Link.css';

function Links(props) {
  const { name, path } = props;
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'active-link' : 'not-active-class')}
    >
      {name}
    </NavLink>
  );
}

Links.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Links;
