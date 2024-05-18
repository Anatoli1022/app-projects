import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook, fetchBook } from '../../redux/slices/booksSlices';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const rand = Math.floor(Math.random() * booksData.length);
    dispatch(addBook(createBookWithID(booksData[rand], 'random')));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'manual')));
      // const book = {
      //   title,
      //   author,
      // id: uuidv4()
      // };

      // dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  const addRandomAddBookVuaApi = () => {
    dispatch(fetchBook());
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new book </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>{' '}
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>{' '}
        <button type="button" onClick={addRandomAddBookVuaApi}>
          Add Random via Api
        </button>
      </form>
    </div>
  );
};

export default BookForm;
