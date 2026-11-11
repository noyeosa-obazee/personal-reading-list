import { useState } from "react";
import "./App.css";
import BookReadingList from "./components/BookReadingList";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([]);

  const [bookForm, setBookForm] = useState({ title: "", author: "" });

  const [showBookForm, setShowBookForm] = useState(false);

  const addBook = () => {
    if (bookForm.title.trim() !== "" && bookForm.author.trim() !== "") {
      setBooks((prevBooks) => [
        ...prevBooks,
        { id: crypto.randomUUID(), ...bookForm, status: "To Read" },
      ]);
      setBookForm({ title: "", author: "" });
      setShowBookForm(false);
    }
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id != id));
  };

  const toggleBookStatus = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id !== id
          ? book
          : {
              ...book,
              status: book.status === "Completed" ? "To Read" : "Completed",
            },
      ),
    );
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
