import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { fetchData } from "../fetchData";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Category = () => {
  const [collapse, setCollapse] = useState(true);
  let style =
    "hover:border-white px-[8px] transition-all rounded-full cursor-pointer capitalize border-[1.3px] border-gray-800";
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fethCategoryData = async () => {
      let data = await fetchData("https://dummyjson.com/products/categories");
      setItems(data);
    };
    fethCategoryData();
  }, []);

  return (
    <div className="bg-gray-800 py-1 ">
      <div
        className={`container mx-auto flex felx-row transition-all text-white gap-2 flex-wrap justify-center items-center select-none ${
          collapse ? "overflow-hidden h-[30px]" : "h-auto"
        }`}
      >
        {collapse ? (
          <AiOutlineArrowDown onClick={() => setCollapse(!collapse)} />
        ) : (
          <AiOutlineArrowUp onClick={() => setCollapse(!collapse)} />
        )}
        <NavLink
          className={style}
          to="/products/all"
          onClick={() => setCollapse(true)}
        >
          All
        </NavLink>
        {items?.map((i) => (
          <NavLink
            key={i}
            to={`/products/${i}`}
            className={style}
            onClick={() => setCollapse(true)}
          >
            {i}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
