import { useEffect, useState, useRef } from "react";
import { FetchData1 } from "../FetchData1";
import NewCard from "../components/NewCard";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Parser from "html-react-parser";

export default function Main({ data, title }) {
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");

  let style =
    "block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  let liStyle =
    "block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ";

  let handlePrev = () => {
    
    if (page > 1) {
      setPage((prev) => prev - 1);
      console.log(page)
      checkActive(ref.current, page-1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
    }
    
  };
  let handleNext = () => {
    
    if (page < Math.ceil(data.length / 16)) {
      setPage((prev) => prev + 1);
      checkActive(ref.current, page+1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
    }
  };

  let handleLiClick = (e) => {
    let list = e.target.parentElement.children;
    for (let x of list) {
        x.classList.remove("active");
      }
      e.target.classList.add("active");
    
    if (eval(e.target.innerHTML) != page) {
      setPage(eval(e.target.innerHTML));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
  };
}
  let ref = useRef(null);

  function checkActive(list, page) {
    for (let x of list.children) {
      x.classList.remove("active");
    }
    for (let i of list.children) {
      if(i.textContent == page) {
      console.log(i.textContent, page)
        i.classList.add('active')
      }
    }
  }

  const createPagination = (array, number) => {
    let arr = [];
    for (var i = 1; i <= Math.ceil(array.length / number); i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    setPage(1);
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg,:gap-4 container mx-auto ">
      <h4 className="col-[1/-1]"> {title} </h4>
      {data.slice((page - 1) * 16, (page - 1) * 16 + 16).map((i) => (
        <NewCard
          key={i.id}
          title={i.name}
          brand={i.brandName}
          price={i.price.current.value}
          thumb={`${i.imageUrl}`}
          oldPrice={i.price.previous.value}
          //discount={i.discountPercentage}
          id={i.id}
        />
      ))}

      {data.length > 16 ? (
        <div className=" col-[1/-1]  w-full flex justify-center items-center my-2">
          <div
            data-nav="left"
            onClick={handlePrev}
            className={`${style} rounded-l-lg`}
          >
            <GrFormPrevious />
          </div>
          <ul className="inline-flex  items-center " ref={ref}>
            {createPagination(data, 16).map((e) => (
              <li key={e} onClick={handleLiClick} className={liStyle}>
                {e}
              </li>
            ))}
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
}

//rating={i.rating}
