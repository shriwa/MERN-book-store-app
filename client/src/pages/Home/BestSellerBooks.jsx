import React, { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-store-app.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Selling books" />
    </div>
  );
};

export default BestSellerBooks;
