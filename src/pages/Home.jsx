import React from "react";
import HeroBanner from "../components/HeroBanner";
//import CategoryAds from "../components/CategoryAdd";
import Explore from "../components/Explore";
import OurSellers from "../components/OurSellers";
import Collections from "../components/Collections";
import { AppState } from "../AppState";
import Jacket from "../components/Jacket";
import Shoes from "../components/MostPopular";

const Home = () => {
  return (
    <div className="max-w-screen overflow-x-hidden ">
      <HeroBanner />
      <OurSellers />
      <Collections />
      <Shoes />
      <Explore />
      <Jacket />
    </div>
  );
};

export default Home;
