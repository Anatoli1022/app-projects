import { configureStore } from '@reduxjs/toolkit';

import productReducer from './products/reducer';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
