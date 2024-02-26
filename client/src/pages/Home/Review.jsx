import React, { useRef, useState } from "react";

// react icons
import { FaStar } from "react-icons/fa6";

// Flowbite
import { Avatar } from "flowbite-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import proPic from "../../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="lg:px-22 py-6 px-4">
      <h1 className="text-5xl font-bold text-center mb-10 leading-snug ">
        Our Customers
      </h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" shadow-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black py-8 px-4 md:m-5 rounded-lg border text-white">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className=" mt-7">
                <p className=" mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  similique ullam, ab quidem officiis fugiat dolorem alias totam
                  minima cupiditate.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className=" w-10 mb-4"
                />
                <h5 className=" text-lg font-medium">Mark Ping</h5>
                <p className=" text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" shadow-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black py-8 px-4 md:m-5 rounded-lg border text-white">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className=" mt-7">
                <p className=" mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  similique ullam, ab quidem officiis fugiat dolorem alias totam
                  minima cupiditate.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className=" w-10 mb-4"
                />
                <h5 className=" text-lg font-medium">Mark Ping</h5>
                <p className=" text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" shadow-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black py-8 px-4 md:m-5 rounded-lg border text-white">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className=" mt-7">
                <p className=" mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  similique ullam, ab quidem officiis fugiat dolorem alias totam
                  minima cupiditate.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className=" w-10 mb-4"
                />
                <h5 className=" text-lg font-medium">Mark Ping</h5>
                <p className=" text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" shadow-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black py-8 px-4 md:m-5 rounded-lg border text-white">
            <div className=" space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className=" mt-7">
                <p className=" mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  similique ullam, ab quidem officiis fugiat dolorem alias totam
                  minima cupiditate.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className=" w-10 mb-4"
                />
                <h5 className=" text-lg font-medium">Mark Ping</h5>
                <p className=" text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Review;
