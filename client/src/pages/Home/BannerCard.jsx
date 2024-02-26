import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCard.css";

// import required modules
import { EffectCards } from "swiper/modules";

const BannerCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-store-app.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);

  return (
    // Swiper
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <img src={book.imageURL} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCard;
