import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../../redux/rockets/rockets';
import './rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets({ method: 'GET' }));
  }, [dispatch]);

  return (
    <section className="rockets">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <img src={rocket.flickr_images[0]} alt={rocket.name} />

          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Rockets;
