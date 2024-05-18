import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/booksSlices';
import filterReducer from './slices/filterSlices';
import errorReducer from './slices/errorSlices';

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
