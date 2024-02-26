import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBook = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();

  const booksCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Thriller",
    "Bibliography",
    "Autobiography",
    "History",
    "self-help",
    "Memoir",
    "Business",
    "Children",
    "Travel",
    "Research",
    "Religion",
    "Art",
    "Science",
    "Drama",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    booksCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // handle book update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);

    // update book data
    fetch(`https://mern-book-store-app.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Book Updated Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to update book");
      });
  };

  return (
    <div className="px-2 mx-1 sm:px-4 md:px-6 lg:px-8 xl:px-12 my-12 sm:mx-4 md:mx-12 lg:mx-20 xl:mx-40">
      <h2 className="mb-8 text-3xl font-bold">Update the book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[980px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* Book Name */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Title"
              required
              defaultValue={bookTitle}
            />
          </div>

          {/* Author */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Authur Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              defaultValue={authorName}
              required
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* Book Image */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              defaultValue={imageURL}
              required
            />
          </div>

          {/* Category */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {booksCategories.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            className="w-full"
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description...."
            rows={6}
            defaultValue={bookDescription}
            required
          />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            defaultValue={bookPDFURL}
            required
          />
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
