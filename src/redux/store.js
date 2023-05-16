import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './rocket/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
