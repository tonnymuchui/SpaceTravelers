import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/rockets/rockets';
import Profile from './components/profile/profile';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/my_profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
