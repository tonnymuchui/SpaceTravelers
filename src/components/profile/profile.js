import Rockets from './rockets';
import MyProfile from './MissionProfiler';
import './profile.css';

function profile() {
  return (
    <section className="profile">
      <div className="profile-info">
        <MyProfile />
      </div>
      <div className="profile-info">
        <h1>My Rockets</h1>
        <Rockets />
      </div>
    </section>
  );
}

export default profile;
