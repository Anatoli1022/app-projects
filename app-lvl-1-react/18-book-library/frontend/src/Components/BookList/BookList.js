import './BookList.css';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={i}>
                <div className="book-info">
                  by {book.title} <strong>{book.author}</strong>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BookList;
