import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Profile from './routes/Profile';
import store from './redux/store';
import Rockets from './components/rockets/Rockets';
import Missions from './routes/Missions';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
