import { useState, useRef, useLayoutEffect } from "react";
import { AppState } from "../AppState";
import Loader from "./Loader";
let ProductInfo = ({ data }) => {
  let { addToCart } = AppState();
  let ref = useRef();
  let [value, setValue] = useState(1);

  let item = {
    price: data.price,
    title: data.title,
    thumb: data.thumbnail,
    id: data.id,
    number: value,
  };
  let ref2 = useRef();

  function addClassList() {
    
    ref?.current?.childNodes.forEach((e) => {
      e.addEventListener("click", (i) => {
        ref?.current?.childNodes.forEach((e) => {
          e.classList.remove("img-active");
        });
        e.classList.add("img-active");
        ref2.current.src = e.src;
      });
    });
  }
  setTimeout(function () {
    addClassList();
  }, 10);

  return (
    <div className="bg-[#eee] ">
   
   {
     data.price? <>
   
      <div className="container pt-2 mx-auto flex flex-col gap-2 md:flex-row ">
        {/*Photos container*/}
        <div className="flex flex-col gap-2 items-center md:w-full">
          <div className="flex items-center justify-center h-[380px] overflow-hidden">
            <img
              src={data?.thumbnail}
              className="w-[300px] rounded-lg "
              ref={ref2}
            />
          </div>
          <div className="w-full h-[60px] flex gap-2 justify-center " ref={ref}>
            {data?.images?.map((e) => (
              <img key={e} src={e} className="h-full w-[60px] rounded-lg  " />
            ))}
          </div>
        </div>
        {/*Info container*/}
        <div className="w-full p-2 flex flex-col gap-1 md:justify-center">
          <p className="text-sm md:text-lg bg-gray-400 w-fit rounded">{data.brand}</p>
          <h3 className="text-xl md:text-3xl font-bold">{data.title}</h3>
          <div className="Stars" style={{ "--rating": data.rating }} />
          <p className="text-xl md:text-3xl font-bold text-green-500">
            ${(data.price * (1 - data.discountPercentage / 100)).toFixed(2)}
            <span className="line-through	ml-2 text-sm text-red-300">
              ${data.price}
            </span>
          </p>
          <p className="opacity-80 text-lg md:text-xl">{data.description}</p>
          <div className="flex gap-2 justify-center items-center h-[70px]">
            <select
              name="1"
              className="w-[60px] text-3xl h-full bg-gray-400 text-center rounded-lg"
              onChange={(e) => setValue(eval(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button
              className="bg-indigo-500 rounded-lg w-full text-white font-bold py-2  h-full md:text-3xl"
              onClick={() => addToCart(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      </> : <Loader />
   }
    </div>
  );
};

export default ProductInfo;
