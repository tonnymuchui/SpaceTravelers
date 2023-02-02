import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Missions/Missions.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const tourists = missions.filter((visit) => visit.mission);
  return (
    <div>
      <h1 className="head-text">My Missions</h1>
      <table className="tour_list">
        <tbody className="tour_body">
          {
            tourists.length < 1 ? (
              <tr>
                <td className="tour-now tour">No Mission Yet...</td>
                <td><Link to="/missions">Join a Mission</Link></td>
              </tr>
            ) : (
              tourists.map(({ id, name }) => (
                <tr className="tour" key={id}><td>{name}</td></tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
};
export default MyProfile;
