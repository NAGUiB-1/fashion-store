import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../AppState";
function NewCard({ oldPrice, price, brand, title, rating, thumb, id }) {
  let navigate = useNavigate();

  let { cart, setCart, addToCart, setLastViewed, lastViewed } = AppState();

  let item = { oldPrice, price, title, thumb, id, number: 1 };

  let handleClick = () => {
    let arr = [];
    arr.push(...lastViewed) 
    lastViewed?.forEach((e,i)=>{
      if(e.id == item.id) {
        arr.splice(i,1)
      }
    })
    arr.unshift(item);
    setLastViewed([...arr]);
    console.log(arr);
  };
  

  /*  
   if(cart.indexOf(item) == -1 )
    console.log(cart.indexOf(item))*/
  /*setCart([...cart, { price, title, thumb, id, number: 1 }]);*/

  return (
    <div
      className="inline-block w-full transition-all rounded-lg group bg-white "
      onClick={handleClick}
    >
      <div className="rounded ">
        <div
          className="rounded w-full h-[280px] bg-[#eee] overflow-hidden cursor-pointer"
          onClick={() => {
            navigate(`/product/${id}`);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={`https://${thumb}`}
            className="h-full w-full object-cover    group-hover:scale-[1.3] transition-all mx-auto"
            alt=""
          />
        </div>

        <Link
          to={`/product/${id}`}
          className="mt-4 h-[40px] text-sm block hover:underline  w-full overflow-hidden"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {title}
        </Link>
        <div className="Stars" style={{ "--rating": 4.4 }} />

        <h4 className="text-xl font-bold text-red-600">
          ${price.toFixed(2)}
          {oldPrice < price && oldPrice ? (
            <span className="line-through	ml-2 text-sm">
              ${oldPrice?.toFixed(2)}
            </span>
          ) : (
            ""
          )}
        </h4>
        <p className="text-sm text-gray-400">Save extar with No Cost EMI</p>
        <p className="text-sm text-gray-600">Free Delivert by larainfo</p>
        <div className="w-full flex">
          <button
            className="bg-[#eee] rounded-lg w-full mx-auto text-black font-bold py-2 mt-1 "
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCard;

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
