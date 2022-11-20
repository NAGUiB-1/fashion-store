import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { AppState } from "../AppState";
import PopupCart from "./PopupCart";
const Navbar = () => {
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  let { showCart, setShowCart, totalItems, totalPrice } = AppState();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <div className=" bg-[#333] sticky top-0 z-[100] px-1">
      <div className="container mx-auto flex flex-row justify-between h-[70px] py-1 md:py-1 items-center relative z-[150] text-white ">
      {/*<div className='flex text-white justify-center items-center gap-4'>
        <AiOutlineMenu size={30}/>
        </div>*/}
        <Link to="/" className="h-auto font uppercase font-bold  p-1">
          <img src={Logo} alt="e-commerce" className="h-[50px] rounded-lg" />
        </Link>

          <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-center border-2 rounded-full outline-none w-[160px] md:w-[240px] py-1 font-bold text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch
              size={15}
              className="absolute right-3 top-[.65rem] cursor-pointer text-black "
              onClick={handleSearch}
            />
          </div>
        </form> 

        <div className="flex flex-row gap-4">
          <CgProfile size={30} className="cursor-pointer" />
          <div className="relative">
            <AiOutlineShoppingCart
              size={30}
              className="cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />

            <div className="absolute top-[-15px] right-[0px] w-5 h-5 text-white font-bold flex justify-center items-center rounded-full bg-green-600">
              {totalItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*

import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { AppState } from "../AppState";
import PopupCart from "./PopupCart";
const Navbar = () => {
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  let { showCart, setShowCart, totalItems, totalPrice } = AppState();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) navigate(`/search/${search}`);
    setSearch("");
  };

  
  return (
    <div className=" bg-[#eee] sticky top-0 z-[100] px-1">
      <div className="container mx-auto flex flex-row justify-between py-1 md:py-1 items-center relative z-[150] bg-[#eee]">
        <Link to="/" className="h-auto">
          <img src={Logo} alt="e-commerce" className="h-[60px]" />
        </Link>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-center border-2 rounded-full outline-none w-[160px] md:w-[240px] py-1 font-bold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch
              size={15}
              className="absolute right-3 top-[.65rem] cursor-pointer "
              onClick={handleSearch}
            />
          </div>
        </form>
        <div className="flex flex-row gap-4">
          <CgProfile size={30} className="cursor-pointer" />
          <div className="relative">
            <AiOutlineShoppingCart
              size={30}
              className="cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />

            <div className="absolute top-[-15px] right-[0px] w-5 h-5 text-white font-bold flex justify-center items-center rounded-full bg-green-600">
              {totalItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/
