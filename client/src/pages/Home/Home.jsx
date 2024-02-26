import React from "react";
import Banner from "../../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <Review />
    </div>
  );
};

export default Home;
