import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/rockets/rockets';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
