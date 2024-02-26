import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-store-app.onrender.com/all-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => setAllBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  // delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://mern-book-store-app.onrender.com/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        // Handle the error here, e.g., show an error message to the user
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mern-book-store-app.onrender.com/all-books"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setAllBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [allBooks]);

  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 my-12 sm:mx-4 md:mx-12 lg:mx-20 xl:mx-40">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

      {/* table for book data */}
      <div className="overflow-x-auto">
        <Table className="min-w-full lg:w-[950px]">
          <Table.Head className="text-white">
            <Table.HeadCell className=" bg-black">No</Table.HeadCell>
            <Table.HeadCell className=" bg-black">Book name</Table.HeadCell>
            <Table.HeadCell className=" bg-black">Author name</Table.HeadCell>
            <Table.HeadCell className=" bg-black">Category</Table.HeadCell>
            <Table.HeadCell className=" bg-black">Price</Table.HeadCell>
            <Table.HeadCell className=" bg-black">
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {Array.isArray(allBooks) &&
            allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className=" bg-gray-700 dark:border-gray-700 dark:bg-gray-800  hover:bg-gray-600">
                  <Table.Cell className="whitespace-nowrap font-medium text-white dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell className="text-white">
                    {book.authorName}
                  </Table.Cell>
                  <Table.Cell className="text-white">
                    {book.category}
                  </Table.Cell>
                  <Table.Cell className="text-white">$10.00</Table.Cell>
                  <Table.Cell>
                    <Link
                      href="#"
                      className="font-medium text-cyan-500 hover:underline dark:text-cyan-500 mr-5"
                      to={`/admin/dashboard/edit-book/${book._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                    >
                      delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBook;
