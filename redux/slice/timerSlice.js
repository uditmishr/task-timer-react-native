import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTimers = createAsyncThunk('timers/loadTimers', async () => {
  const data = await AsyncStorage.getItem('@timers');
  return data ? JSON.parse(data) : [];
});

export const loadHistory = createAsyncThunk('timers/loadHistory', async () => {
  const data = await AsyncStorage.getItem('@history');
  return data ? JSON.parse(data) : [];
});

const initialState = {
  timers: [], 
  history: [],
  theme: "light",
};

const timerSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    loadState: (state, action) => action.payload,
    addTimer: (state, action) => {
      state.timers.push(action.payload);
    },
    updateTimer: (state, action) => {
      const { id, updates } = action.payload;
      const timer = state.timers.find((t) => t.id === id);
      if (timer) {
        Object.assign(timer, updates);
      }
    },
    bulkUpdate: (state, action) => {
      const { category, updates } = action.payload;
      state.timers.forEach((timer) => {
        if (timer.category === category) {
          Object.assign(timer, updates);
        }
      });
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
});

export const { loadState, addTimer, updateTimer, bulkUpdate, addHistory } = timerSlice.actions;
export default timerSlice.reducer;


