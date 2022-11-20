import { AppState } from "../AppState";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
let PopupCart = () => {
  let { cart, setCart, showCart, setShowCart, totalPrice, totalItems } =
    AppState();

  let navigate = useNavigate();
  console.log(totalPrice);
  return (

    <div className="fixed top-[0] right-0 w-full md:w-[400px] z-[100] h-screen bg-[#eee]  anim-slide overflow-hidden ">
      <div className="flex flex-row h-[55px] w-full justify-between items-center p-1">
        <div className='text-2xl font-bold border-2 border-red-600 border-solid rounded-[50%] w-[30px] h-[30px] flex justify-center items-center text-red-600' onClick={() => setShowCart(!showCart)}> x</div>
        <div className='text-center'             > Shopping Cart</div>
        <div className="relative self-end">
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
      <div className=" gap-2 h-[calc(100%-55px-120px)] overflow-y-auto overflow-x-hidden">
        {cart?.map((e) => (
          <CartItem
            number={e.number}
            thumb={e.thumb}
            id={e.id}
            title={e.title}
            price={e.price}
            key={e.id}
          />
        ))}
      </div>
      <div className="h-[120px] rounded-t-[20px] bg-black w-full md:w-[400px] overflow-hidden  flex flex-col gap-3 p-3 fixed bottom-0">
        <div className="flex flex-row gap-3">
          <form className="w-full flex-50">
            <input
              type="text"
              className="border-2 border-solid border-white text-center text-white w-full bg-black rounded-xl h-10 uppercase"
              placeholder="VOUCHER CODE"
              maxlength="10" 
            />
          </form>
          <div className=" text-white w-full bg-red-600 rounded-xl flex items-center justify-center h-10 font-bold">
            {" "}
            TOTAL : $ {totalPrice}
          </div>
        </div>
        <button className="text-white w-full bg-green-500 rounded-xl flex items-center justify-center h-12 font-bold" 
        onClick={()=>{navigate('/checkout'); setShowCart(!showCart)}}
        >
          Checkout
        </button>
      </div>
    </div>
    
  );
};
export default PopupCart;
