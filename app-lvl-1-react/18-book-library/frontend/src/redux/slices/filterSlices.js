import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
};

const filterSlices = createSlice({
  name: 'filter',
  initialState: initialState,

  reducers: {
    setTitleFilter: (state, action) => {
      //you can mutate state thanks to immer library
      state.title = action.payload;
      //you can also return new state as usually
      // return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlices.actions;

export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;
// console.log(filterSlices.actions);
// console.log(filterSlices.actions.setTitleFilter());

export default filterSlices.reducer;
