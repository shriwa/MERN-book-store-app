import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 px-4 lg:px-24">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-12">
        <div className=" md:w-1/2">
          <h2 className=" text-4xl font-bold mb-6 leading-snug text-white">
            Dive into an enchanting world with our latest book!{" "}
            <span>
              {" "}
              <p className="text-2xl my-5">Enjoy a 20% discount </p>
            </span>
          </h2>
          <Link to="/shop" className="block">
            <button className=" bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>

        <div>
          <img src={bookPic} alt="" className=" w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
