import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/rockets/rockets';
import Profile from './components/profile/profile';
import Mission from './components/Missions/Mission';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/my_profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
