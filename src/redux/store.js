import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketReducer from './rocket/RocketSlice';

const store = configureStore(
  {
    reducer: {
      missions: missionsReducer,
      rockets: rocketReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
