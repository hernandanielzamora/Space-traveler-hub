import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import Profile from './routes/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
