import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import Parser from "html-react-parser";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
let Result = ({ data, title, category }) => {
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  let ref = useRef();
  function createPagination(array, number) {
    let str = "";
    for (var i = 1; i <= Math.ceil(array.length / number); i++) {
      str += `
      <li className="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >${i}</li>`;
    }

    return str;
  }

  let handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  let handleNext = () => {
    if (page < Math.ceil(data.length / 16)) {
      setPage((prev) => prev + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    setPage(1);
  }, [category]);

  function handleClick() {
    for (let e of ref?.current?.children) {
      e.addEventListener("click", (e) => {
        setPage(eval(e.target.innerHTML));
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }

  let SortData = (data) => {
    let newArray = data;
if (key == "LowToHigh") {
      newArray = data.sort(
        (p1, p2) =>
          //  p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
          p1.price - p2.price
      );
    } else if (key == "HighToLow") {
      newArray = data.sort(
        (p1, p2) =>
          //  p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
          p2.price - p1.price
      );
    
    } else if (key == "RatingHigh") {
      newArray = data.sort(
        (p1, p2) =>
          //  p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
          p2.rating - p1.rating
      );
    }
     else if (key == "RatingLow") {
      newArray = data.sort(
        (p1, p2) =>
          //  p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
          p1.rating - p2.rating
      );
    }
    //console.log(newArray)
    
    return newArray;
  };

  let style =
    "block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  useEffect(() => {
    setTimeout(function () {
      handleClick();
    }, 1000);
  }, []);
  console.log(page);
  return (
    <div className="mt-2">
      <div className="container flex justify-between">
        <p className="text-lg">{title}</p>
        <div className="flex gap-1 flex-col">
          Sort By :

          <p className="bg-blue-500 p-1" onClick={() => setKey("LowToHigh")}>
            Price: Low to Hight{" "}
          </p>
          <p className="bg-blue-500 p-1" onClick={() => setKey("HighToLow")}>
            Price: Hight to Low{" "}
            </p>
          <p className="bg-blue-500 p-1" onClick={() => setKey("RatingHigh")}>
            Rating: Hight to Low{" "}
          </p>
          <p className="bg-blue-500 p-1" onClick={() => setKey("RatingLow")}>
            Rating: Low to High{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center flex-row flex-wrap gap-y-2 mt-2">
        {SortData(data)
          ?.slice((page - 1) * 16, (page - 1) * 16 + 16)
          .map((i) => (
            <Card
              key={i.id}
              price={i.price}
              brand={i.brand}
              title={i.title}
              thumb={i.thumbnail}
              rating={i.rating}
              discount={i.discountPercentage}
              id={i.id}
            />
          ))}
      </div>
      {data.length > 16 ? (
        <div className="flex justify-center my-2">
          <div
            data-nav="left"
            onClick={handlePrev}
            className={`${style} rounded-l-lg`}
          >
            <GrFormPrevious />
          </div>
          <ul className="inline-flex items-center " ref={ref}>
            {Parser(createPagination(data, 16))}
          </ul>
          <div className={`${style} rounded-r-lg`} onClick={handleNext}>
            <GrFormNext />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;

/*
     <button className="bg-red-600" onClick={() => setPage(page + 1)}>
        Click me
      </button>
      
      
      
                  <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>

*/
