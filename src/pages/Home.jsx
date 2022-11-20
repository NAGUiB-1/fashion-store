import React from "react";
import HeroBanner from "../components/HeroBanner";
//import CategoryAds from "../components/CategoryAdd";
import MostPopular from "../components/MostPopular";
import Explore from "../components/Explore";
import OurSellers from "../components/OurSellers";
import Collections from "../components/Collections";
import Recommended from "../components/Recommended";
import {AppState} from '../AppState'

const Home = () => {
  
  return (
    <div>
      <HeroBanner />
       <OurSellers />
       <Collections />
     {/* <MostPopular />
      <Explore />
      <Recommended /> */}
    </div>
  );
};

export default Home;
