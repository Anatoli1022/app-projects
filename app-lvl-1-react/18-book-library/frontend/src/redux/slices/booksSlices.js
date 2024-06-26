import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';

const initialState = [];

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get('http://localhost:4000/random-book');
  console.log(res.data);
  return res.data;
});

const bookSlices = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    deleteBook: (state, action) =>
      state.filter((book) => book.id !== action.payload.id),
  },
  toggleFavorite: (state, action) => {
    state.map((book) =>
      book.id === action.payload
        ? { ...book, isFavorite: !book.isFavorite }
        : book
    );
  },
  extraReducers: (builder) =>
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        return [...state, createBookWithID(action.payload, 'Api')];
      }
    }),
});
export const { addBook, deleteBook, toggleFavorite } = bookSlices.actions;
export const selectBooks = (state) => state.books;

// export const thunkFunction = async (dispatch, getState) => {
//   //async action
//   console.log(getState());
//   const res = await axios.get('http://localhost:4000/random-book');
//   try {
//     if (res.data && res.data.title && res.data.author) {
//       dispatch(addBook(createBookWithID(res.data, 'API')));
//     }
//   } catch {
//     console.log(console.error());
//   }
//   // console.log(getState());
// };

export default bookSlices.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// const initialState = [];

// const bookSlices = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteBook: (state, action) => {
//       return state.filter((book) => book.id !== action.payload.id);

//     },
//   },
//   toggleFavorite: (state, action) => {
//     state.forEach((book) => {
//       if (book.id === action.payload) {
//         book.isFavorite = !book.isFavorite;
//       }
//     });

//   },
// });

// export const { addBook, deleteBook, toggleFavorite } = bookSlices.actions;

// export default bookSlices.reducer;
