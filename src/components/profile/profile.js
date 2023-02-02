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
        <Rockets />
      </div>
    </section>
  );
}

export default profile;
