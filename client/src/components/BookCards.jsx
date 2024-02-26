import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BookCards = ({ headline, books }) => {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="my-6 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-black my-3 sm:my-4 md:my-5 ">
        {headline}
      </h1>
      <div className="mt-6 sm:mt-8 md:mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide
              key={book._id}
              className="max-w-sm rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 py-6 sm:py-8 bg-gray-800 text-white hover:bg-black transition duration-300"
            >
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img
                    src={book.imageURL}
                    alt=""
                    className="rounded-t-lg w-full h-52 sm:h-60 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-md">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-tight text-white mt-2">
                    {truncateTitle(book.bookTitle || "Title not available", 20)}
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p>$20.00</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
