import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './slice/timerSlice';
import themeReducer from './slice/themeSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    theme: themeReducer,
  },
});

export default store;

