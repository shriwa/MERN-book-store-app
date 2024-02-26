import React from "react";
import { Link } from "react-router-dom";
import FavBookImg from "../../assets/favoritebook.jpg";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className=" md:w-1/2">
        <img
          src="https://assets.brightspot.abebooks.a2z.com/dims4/default/ff71e12/2147483647/strip/true/crop/1580x760+0+0/resize/1996x960!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2Ff5%2Fb4%2Fc466423a41a097cc7fd5a896c93a%2Fcarousel-coffeetable-collection2.png"
          alt=""
          className="rounded md:w-3/3"
        />
      </div>

      <div className=" md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold my-5 md:w-3/4 leading-snug">
          Discover your favourite{" "}
          <span className=" text-blue-700">Book Here!</span>
        </h2>
        <p className=" mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque
          praesentium quas minus ducimus tenetur autem placeat voluptatibus
          voluptas perferendis, aspernatur numquam aliquid provident ab
          doloremque! Iusto, sunt accusantium soluta commodi blanditiis id,
          tenetur ipsa unde non voluptatum eius nisi?
        </p>

        {/* stats */}
        <div className=" flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className=" text-3xl font-bold">2000+</h3>
            <p>Book Listing</p>
          </div>
          <div>
            <h3 className=" text-3xl font-bold">1000+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3 className=" text-3xl font-bold">1200+</h3>
            <p>Downloads</p>
          </div>
        </div>

        <Link to="/shop" className=" mt-12 block">
          <button className=" bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};
// 3.09.00
export default FavBook;
