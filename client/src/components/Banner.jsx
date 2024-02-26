import React from "react";
import BannerCard from "../pages/Home/BannerCard";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-14 lg:px-24  flex items-center rounded ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 my-19 py-10">
        {/* left side */}
        <div className=" space-y-8 md:w-1/2 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Explore & Discover{" "}
            <span className="text-black">the World of Endless Stories</span>
          </h2>

          <p className=" md:w-4/5">
            Discover a world of literary wonders at our book store, where
            shelves brim with tales waiting to be explored. Immerse yourself in
            the magic of words and embark on unforgettable journeys through the
            pages of diverse genres. A haven for book lovers, our store invites
            you to indulge in the timeless joy of reading.
          </p>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search a book"
              className="py-2 px-2 rounded-s-sm outline-none rounded"
            />
            <button className=" bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded">
              Search
            </button>

            <Link to="/shop" className=" mt-12 block">
              <button className=" bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="px-4 lg:px-24 flex items-center">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};
export default Banner;
