import React from "react";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";

const HeroBanner = () => {
  return (
    <div className="h-auto md:h-[400px] bg-[#eee] w-screen">
      <div className="  md:h-full flex flex-col md:flex-row w-full h-full container mx-auto">
        <div className=" w-full md:w-1/2 h-full flex items-center p-4 ">
          <div className="flex flex-col gap-2 mx-auto text-center md:text-left md:mx-0">
            <p className=" font-mono "> INFINITE Fashion </p>
            <div className="text-4xl font-bold">
              {" "}
              Things go better <br /> with Fashion{" "}
            </div>
            <button className=" w-fit text-white bg-[#333] py-4 px-6 rounded font-mono font-bold uppercase  mx-auto md:mx-0">
              <a href="#featured">Discover Now</a>
            </button>
          </div>
        </div>

        <div className=" h-[400px] md:h-full md:h-full w-full md:w-1/2 grid-1 relative  bg-[#ddd] grid grid-cols-12 grid-rows-1 p-4 ">
          <div className=" absolute z-20 top h-full">
            <img src={Hero1} alt="Hero" className="h-full" />
          </div>
          <div className="absolute z-10 bottom h-full">
            <img src={Hero2} alt="Hero" className="h-full" />
          </div>
        </div>
      </div>
      {/*  <CategoryAds /> */}
    </div>
  );
};

export default HeroBanner;
