import statsReducer from "./statsReducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
   stats: statsReducer,
  }
});

export default store;
