import BookCard from "./BookCard";

const BookReadingList = ({
  books,
  toggleBookStatus,
  setShowBookForm,
  deleteBook,
}) => {
  return (
    <>
      <div>
        <h1>My Reading List</h1>
        <div>Total: {books.length}</div>
        <button className="new-book-btn" onClick={() => setShowBookForm(true)}>
          New Book
        </button>
      </div>
      {books.length > 0 ? (
        <div className="book-reading-list">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              toggleBookStatus={toggleBookStatus}
              deleteBook={deleteBook}
            />
          ))}
        </div>
      ) : (
        <div className="empty-books-display">
          You don't have any books yet, add one now!
          <br />
          <button
            className="new-book-btn"
            onClick={() => setShowBookForm(true)}
          >
            New Book
          </button>
        </div>
      )}
    </>
  );
};

export default BookReadingList;
