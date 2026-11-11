import { useState } from "react";
import "./App.css";
import BookReadingList from "./components/BookReadingList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([
    { title: "The Hobbit", author: "J.J.R. Tolkien", status: "To Read" },
  ]);

  const [bookForm, setBookForm] = useState({ title: "", author: "" });

  const [showBookForm, setShowBookForm] = useState(false);

  const addBook = () => {
    if (bookForm.title.trim() !== "" && bookForm.author.trim() !== "") {
      setBooks([...books, { ...bookForm, status: "To Read" }]);
      setBookForm({ title: "", author: "" });
    }
  };

  const deleteBook = (index) => {
    const booksClone = [...books];
    booksClone.splice(index, 1);
    setBooks(booksClone);
  };

  const toggleBookStatus = (index, book) => {
    const booksClone = [...books];
    booksClone.splice(index, 1, {
      ...book,
      status: book.status === "Completed" ? "To Read" : "Completed",
    });
    setBooks(booksClone);
  };

  const handleBookFormInputChange = (e) => {
    setBookForm({ ...bookForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <BookReadingList
        books={books}
        toggleBookStatus={toggleBookStatus}
        deleteBook={deleteBook}
        setShowBookForm={setShowBookForm}
      />
      {showBookForm && (
        <div className="book-form-container">
          <BookForm
            handleBookFormInputChange={handleBookFormInputChange}
            bookForm={bookForm}
            addBook={addBook}
            setShowBookForm={setShowBookForm}
          />
        </div>
      )}
    </>
  );
}

export default App;
