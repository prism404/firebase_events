import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Profil from './pages/Profil';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
  );
}

export default App;
