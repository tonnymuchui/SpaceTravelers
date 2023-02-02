import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, missionSpace } from '../../redux/missions/missions';
import './Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  }, [loading, dispatch]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  const jetclick = (id) => {
    dispatch(missionSpace(id));
  };

  return (
    <table className="d-mission">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description, mission,
        }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td><p>{mission ? 'Active Member' : 'Not A Member'}</p></td>
            <td><button type="button" onClick={() => { jetclick(id); }}>{mission ? 'cancel missions' : 'Join Mision'}</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Mission;
