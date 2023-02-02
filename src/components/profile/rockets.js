import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Missions/Missions.css';

function Rockets() {
  const reservations = useSelector((state) => state.rockets).rockets
    .filter((rocket) => rocket.reserved);

  return (
    <div>
      <h1 className="head-text">My Rockets</h1>
      <table className="tour_list">
        <tbody className="tour_body">
          {
              reservations.length < 1 ? (
                <tr>
                  <td className="tour-now tour">No Rockets Yet...</td>
                  <td><NavLink to="/">Join a Rockets</NavLink></td>
                </tr>
              ) : (
                reservations.map(({ id, name }) => (
                  <tr className="tour" key={id}><td>{name}</td></tr>
                ))
              )
            }
        </tbody>
      </table>
    </div>
  );
}

export default Rockets;
