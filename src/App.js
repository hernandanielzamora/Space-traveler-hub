import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Profile from './routes/Profile';
import Missions from './components/missions/Missions';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
