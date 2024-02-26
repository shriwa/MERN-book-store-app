import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  // Function to truncate the book title
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  // Function to truncate the book title
  const truncateDesciption = (bookDescription, maxLength) => {
    if (bookDescription.length > maxLength) {
      return bookDescription.substring(0, maxLength) + "...";
    }
    return bookDescription;
  };

  useEffect(() => {
    fetch("https://mern-book-store-app.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen lg:px-24 mx-auto py-10">
      <h2 className="text-5xl font-bold text-center mt-20">Shop</h2>

      <div className="grid gap-6 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 px-8 py-8">
        {books.map((book) => (
          <Card className="max-w-sm bg-gray-800 text-white hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black transition duration-300">
            <img
              src={book.imageURL}
              alt="image"
              className="rounded-t-lg w-full h-60 object-cover"
            />

            <h5 className="text-xl font-bold tracking-tight text-white dark:text-gray-900">
              <p>
                {truncateTitle(book.bookTitle || "Title not available", 18)}
              </p>
            </h5>

            <p className="font-normal text-white dark:text-gray-900">
              <p>
                {truncateDesciption(
                  book.bookDescription || "Description not available",
                  100
                )}
              </p>
            </p>

            <button className=" bg-blue-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
