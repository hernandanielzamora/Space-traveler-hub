import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
}, applyMiddleware(thunk));

export default store;
