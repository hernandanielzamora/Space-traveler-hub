import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissData = createAsyncThunk('missions/getMissions', async () => {
  try {
    const res = axios.get(apiUrl);
    return res;
  } catch (error) {
    return error;
  }
});

const initialState = {
  missions: [],
  loading: 'idle',
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    apply: (state, action) => {
      const missions = state.missions.map((item) => {
        if (item.mission_id === action.payload) {
          return { ...item, reserved: true };
        }
        return item;
      });
      return { ...state, missions };
    },
    abandon: (state, action) => {
      const missions = state.missions.map((item) => {
        if (item.mission_id === action.payload) {
          return { ...item, reserved: false };
        }
        return item;
      });
      return { ...state, missions };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissData.fulfilled, (state, action) => {
      state.missions = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export const { apply, abandon } = missionsSlice.actions;
export default missionsSlice.reducer;
