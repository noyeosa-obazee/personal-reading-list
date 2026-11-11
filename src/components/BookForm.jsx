const BookForm = ({
  handleBookFormInputChange,
  bookForm,
  addBook,
  setShowBookForm,
}) => {
  return (
    <form
      className="book-form"
      onSubmit={(e) => {
        e.preventDefault();
        addBook();
      }}
    >
      <div>
        <label htmlFor="book-title-input">Title:</label>
        <input
          type="text"
          name="title"
          id="book-title-input"
          value={bookForm.title}
          onChange={handleBookFormInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="book-author-input">Author:</label>
        <input
          type="text"
          name="author"
          id="book-author-input"
          value={bookForm.author}
          onChange={(e) => handleBookFormInputChange(e)}
          required
        />
      </div>
      <div>
        <button className="add-book-btn" type="submit">
          Add Book
        </button>
      </div>
      <div>
        <button
          className="close-book-form-button"
          type="button"
          onClick={() => setShowBookForm(false)}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default BookForm;
