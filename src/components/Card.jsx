import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../AppState";
function Card({ price, brand, title, rating, thumb, discount, id }) {
  let navigate = useNavigate();
  let { cart, setCart, addToCart } = AppState();

  let item = { price, title, thumb, id, number: 1 };

  /*  
   if(cart.indexOf(item) == -1 )
    console.log(cart.indexOf(item))*/
  /*setCart([...cart, { price, title, thumb, id, number: 1 }]);*/

  return (
    <div className="inline-block max-w-xs shadow w-[260px] rounded-lg group mr-2 bg-gray-100">
      <div className="p-4 rounded">
        <div
          className="h-[200px] rounded-lg bg-white overflow-hidden cursor-pointer"
          onClick={() => {
            navigate(`/product/${id}`);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={thumb}
            className="h-[200px] object-contain  w-full rounded-lg group-hover:scale-[1.3] transition-all"
            alt=""
          />
        </div>

        <Link
          to={`/product/${id}`}
          className="mt-4 text-lg block font-bold hover:underline truncate w-full overflow-hidden"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {title}
        </Link>
        <div className="Stars" style={{ "--rating": rating }} />

        <h4 className="text-xl font-bold text-red-600">
          ${(price * (1 - discount / 100)).toFixed(2)}{" "}
          <span className="line-through	ml-2 text-sm">${price}</span>
        </h4>
        <p className="text-sm text-gray-400">Save extar with No Cost EMI</p>
        <p className="text-sm text-gray-600">Free Delivert by larainfo</p>
        <div className="w-full flex">
          <button
            className="bg-indigo-500 rounded-lg w-[70%] text-white font-bold py-2 mt-1 "
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

/*
<Link
      to={`/product/${id}`}
      className="flex flex-col w-[240px] bg-white py-2 px-2 rounded-lg h-[300px] hover:drop-shadow-xl transition-all hover:scale-105 overflow-hidden"
    >
      <div className="flex flex-column h-[60%]">
        <img
          className="w-full h-[160px] object-cover rounded-lg "
          src={thumb}
        />
      </div>
            <h3 className="text-left text-lg font-bold">{title}</h3>
<div className="rating rating-sm rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input checked type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
</div>
      
      
      

      <p className="opacity-50">{brand}</p>
      <p className="text-lg font-medium">
        ${(price * (1 - discount / 100)).toFixed(2)}{" "}
        <span className="line-through	ml-2 text-sm">${price}</span>
      </p>

      <button className="bg-indigo-500 rounded-full w-[80%] mx-auto text-white font-bold py-2 mt-1 relative z-50">
        Add to cart
      </button>
    </Link>


*/
