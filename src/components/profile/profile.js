import Rockets from './rockets';
import './profile.css';

function profile() {
  return (
    <section className="profile">
      <div className="profile-info">
        <h1>My Missions</h1>
        <ul>
          <li>Mission 1</li>
          <li>Mission 2</li>
          <li>Mission 3</li>
        </ul>
      </div>
      <div className="profile-info">
        <h1>My Rockets</h1>
        <Rockets />
      </div>
    </section>
  );
}

export default profile;
