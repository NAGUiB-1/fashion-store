import clothes from "../assets/clothes.jpeg";
import shoe from "../assets/shoe.jpeg";
import sport from "../assets/sport.jpeg";
import accessories from "../assets/accessories.jpeg";
import sportsAcc from "../assets/sports_accessories.webp";
import SportsAll from "../assets/sports_viewall.webp";
import sportsHood from "../assets/sports_hoodies.webp";
import sportsShorts from "../assets/sports_shorts.webp";
import sportsTop from "../assets/sports_tops.webp";

import shoes_all from "../assets/shoes_viewall.webp";
import shoes_boots from "../assets/shoes_boots.webp";
import shoes_loafers from "../assets/shoes_loafers.webp";
import shoes_sandals from "../assets/shoes_sandals.webp";
import shoes_trainer from "../assets/shoes_trainers.webp";

import accessories_viewall from "../assets/accessories_viewall.webp";
import accessories_bags from "../assets/accessories_bags.webp";
import accessories_ties from "../assets/accessories_ties.webp";
import accessories_watch from "../assets/accessories_watch.webp";
import accessories_sunglasses from "../assets/accessories_sunglasses.webp";

import clothing_designer from "../assets/clothing_designer.webp";
import clothing_jackets from "../assets/clothing_jackets.webp";
import clothing_new from "../assets/clothing_new.webp";
import clothing_tshirts from "../assets/clothing_shirts.webp";
import clothing_shirts from "../assets/clothing_tshirts.webp";

import new_all from "../assets/new_all.webp";
import new_accessories from "../assets/new_accessories.webp";
import new_clothing from "../assets/new_clothing.webp";
import new_shoes from "../assets/new_shoes.webp";
import new_trending from "../assets/new_trending.webp";

import New from "../assets/new.webp";
import { useNavigate, useParams } from "react-router-dom";

export default function Collections() {
  let navigate = useNavigate();
  let pStyle =
    "text-xl justify-center flex items-center text-center font-bold uppercase  font-sans w-fit h-fit  py-2 px-4 rounded-lg bg-[rgba(255,255,255,.5)]  trans transition-all dur  border  ";
  let liStyle =
    "h-1/5 w-full text-white border-b-2 border-b-white flex items-center gap-2 cursor-pointer";
  let pStyle2 = "font-mono  text-lg uppercase hover:underline futura";

  let ulStyle =
    "w-full h-full flex flex-col items-center justify-between p-1  ";

  let divStyle =
    "transition-all w-full h-full bg-[#333] absolute top-full left-0 group-hover:top-0";

  let imgStyle = "h-[80%] rounded-full";
  return (
    <div className=" bg-[#ddd] py-8" id="featured">
      <div className=" container mx-auto">
        <p className=" w-full text-center text-4xl pb-4 uppercase  font-bold uppercase ">
          Featured Collection
        </p>

        <div className="h-[2000px] gap-1 md:gap-0 md:h-[600px] lg:h-[600px] xl:h-[700px] grid  grid-cols-1 md:grid-cols-3 md:grid-row-2 ">
          <div
            style={{ backgroundImage: `url(${sport})` }}
            className=" bg-center dur transition-all group relative overflow-hidden bg-no-repeat  bg-[#eee] bg-cover  "
          >
            <div className=" w-full  h-full flex items-center  justify-center transition-all">
              <p className={pStyle}>Sportswear</p>
            </div>

            <div className={divStyle}>
              <ul className={ulStyle}>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/26090")}
                >
                  <img className={imgStyle} src={SportsAll} alt="viewAll" />
                  <p className={pStyle2}> View All </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27181")}
                >
                  <img className={imgStyle} src={sportsTop} alt="tops" />
                  <p className={pStyle2}> Tops </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27178")}
                >
                  <img className={imgStyle} src={sportsShorts} alt="shorts" />
                  <p className={pStyle2}> Shorts </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27176")}
                >
                  <img className={imgStyle} src={sportsAcc} alt="Accessories" />
                  <p className={pStyle2}> Accessories</p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/16769")}
                >
                  <img className={imgStyle} src={sportsHood} alt="Hoodies" />
                  <p className={pStyle2}> Hoodies & Sweatshirts </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${shoe})` }}
            className=" bg-no-repeat relative overflow-hidden group bg-[#eee] bg-cover bg-center "
          >
            <div className=" w-full mr-auto h-full flex items-center justify-center">
              <p className={pStyle}>Shoes</p>
            </div>

            <div className={divStyle}>
              <ul className={ulStyle}>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/4209")}
                >
                  <img className={imgStyle} src={shoes_all} alt="viewAll" />
                  <p className={pStyle2}> View All </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/5774")}
                >
                  <img className={imgStyle} src={shoes_boots} alt="boots" />
                  <p className={pStyle2}> Boots </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/11247")}
                >
                  <img className={imgStyle} src={shoes_loafers} alt="loafers" />
                  <p className={pStyle2}> Loafers </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/5775")}
                >
                  <img
                    className={imgStyle}
                    src={shoes_trainer}
                    alt="shoes_trainer"
                  />
                  <p className={pStyle2}> Trainers</p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/6593")}
                >
                  <img className={imgStyle} src={shoes_sandals} alt="Sandlas" />
                  <p className={pStyle2}> Sandals </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className=" relative overflow-hidden md:col-[2/3] md:row-[1/3] bg-[#eee]  bg-center md:bg-center bg-no-repeat group  bg-[#eee]   md: 2 bg-cover "
            style={{ backgroundImage: `url(${clothes})` }}
          >
            <div className=" w-full md:w-full  ml-auto md:mb-auto h-full flex items-center md:items-end  justify-center md: justify-center ">
              <p className="  text-xl justify-center flex items-center text-center font-bold uppercase  font-sans w-fit h-fit group-hover:w-full group-hover:h-full hover:text-white  py-2 px-4 rounded-lg bg-[rgba(255,255,255,.5)]  trans transition-all dur  border hover:bg-[#333]">
                clothes
              </p>
            </div>

            <div className={divStyle}>
              <ul className={ulStyle}>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/6993")}
                >
                  <img className={imgStyle} src={clothing_new} alt="new" />
                  <p className={pStyle2}> New </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/3602")}
                >
                  <img
                    className={imgStyle}
                    src={clothing_shirts}
                    alt="shirts"
                  />
                  <p className={pStyle2}> Shirts </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/7616")}
                >
                  <img
                    className={imgStyle}
                    src={clothing_tshirts}
                    alt="tshirts"
                  />
                  <p className={pStyle2}>tshirts </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/3606")}
                >
                  <img
                    className={imgStyle}
                    src={clothing_jackets}
                    alt="jackets"
                  />
                  <p className={pStyle2}> Jackets </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27111")}
                >
                  <img
                    className={imgStyle}
                    src={clothing_designer}
                    alt="clothing_designer"
                  />
                  <p className={pStyle2}> Designers </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${accessories})` }}
            className=" relative overflow-hidden group bg-center bg-no-repeat  bg-[#eee] bg-cover   "
          >
            <div className=" w-full mr-auto h-full flex items-center justify-center">
              <p className={pStyle}>Accessories</p>
            </div>

            <div className={divStyle}>
              <ul className={ulStyle}>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/4210")}
                >
                  <img
                    className={imgStyle}
                    src={accessories_viewall}
                    alt="viewAll"
                  />
                  <p className={pStyle2}> View All </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/9265")}
                >
                  <img className={imgStyle} src={accessories_bags} alt="bags" />
                  <p className={pStyle2}> Bags </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/19855")}
                >
                  <img
                    className={imgStyle}
                    src={accessories_watch}
                    alt="watch"
                  />
                  <p className={pStyle2}>Watchs </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/6519")}
                >
                  <img
                    className={imgStyle}
                    src={accessories_sunglasses}
                    alt="sunglasses"
                  />
                  <p className={pStyle2}> sunglasses</p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/6520")}
                >
                  <img className={imgStyle} src={accessories_ties} alt="ties" />
                  <p className={pStyle2}> Ties </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${New})` }}
            className=" relative overflow-hidden group bg-center bg-no-repeat  bg-[#eee] bg-cover   "
          >
            <div className=" w-full ml-auto h-full flex items-center  justify-center">
              <p className={pStyle}>Newly</p>
            </div>

            <div className={divStyle}>
              <ul className={ulStyle}>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27110")}
                >
                  <img className={imgStyle} src={new_all} alt="viewAll" />
                  <p className={pStyle2}> View All </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/6993")}
                >
                  <img
                    className={imgStyle}
                    src={new_clothing}
                    alt="new_clothing"
                  />
                  <p className={pStyle2}> Clothing </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/17184")}
                >
                  <img className={imgStyle} src={new_shoes} alt="new_shoes" />
                  <p className={pStyle2}> Shoes </p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/27112")}
                >
                  <img
                    className={imgStyle}
                    src={new_accessories}
                    alt=" Accessories"
                  />
                  <p className={pStyle2}> Accessories</p>
                </li>
                <li
                  className={liStyle}
                  onClick={() => navigate("/products/13500")}
                >
                  <img
                    className={imgStyle}
                    src={new_trending}
                    alt="new_trending"
                  />
                  <p className={pStyle2}> Trending </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
26090
27181
27178
27176
16769













onClick={() => navigate("/products/4209")}
7616
onClick={() => navigate("/products/7616")}
4210
onClick={() => navigate("/products/4210")}
27110
onClick={() => navigate("/products/27110")}
*/
