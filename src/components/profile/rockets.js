import { useSelector } from 'react-redux';

function Rockets() {
  const reservations = useSelector((state) => state.rockets)
    .filter((rocket) => rocket.reserved);

  return (
    <ul className="profile-ul">
      {reservations.map((rocket) => (
        <li className="profile-li" key={rocket.id}>{rocket.name}</li>
      ))}
    </ul>
  );
}

export default Rockets;
