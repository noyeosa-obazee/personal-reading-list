const BookCard = ({ index, book, toggleBookStatus, deleteBook }) => {
  return (
    <div className="book-card">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">By: {book.author}</p>
      <div>
        <button
          className="book-toggle-read-btn"
          onClick={() => toggleBookStatus(index, book)}
        >
          {book.status === "Completed" ? "Mark to read" : "Mark completed"}
        </button>
        <button className="book-delete-btn" onClick={() => deleteBook(index)}>
          Delete
        </button>
      </div>
      <div className="book-status-container">
        <span className="book-status-text">{book.status}</span>
      </div>
    </div>
  );
};

export default BookCard;
