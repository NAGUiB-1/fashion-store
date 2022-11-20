import { AppState } from "../AppState";
import { useNavigate } from "react-router-dom";
function CartItem({ number, title, thumb, item, price, id }) {
  let navigate = useNavigate()
  let { cart, totalItems, setCart, handleAdd, handleRemove, setShowCart } = AppState();
  let button =
    "w-[30px] h-[30px] rounded-[50%] border-2 border-solid border-black text-white font-bold text-black";

  return (
    <div className="h-[100px] w-full container mx-auto bg-gray-100 flex mb-2 p-2 bg-[#eee] border-b-2  gap-2">
      <div className="h-full w-[35%]  flex justify-center items-center rounded-lg overflow-hidden" onClick={()=>{navigate(`/product/${id}`); setShowCart(false)}}>
        <img src={`https://${thumb}`} className="h-full object-contain" />
      </div>
      <div className="h-full w-[65%] flex justify-between ">
        <div className="flex flex-col justify-between">
          <h3 className="w-[160px] truncate overflow-hidden font-bold hover:underline" onClick={()=>{navigate(`/product/${id}`); setShowCart(false)}}>{title}</h3>
          <p className="border-2 border-solid border-red-600 rounded-full text-center w-[90px] text-red-600 font-bold">
            ${price * number}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <button className={button} onClick={() => handleRemove(id)}>
            -
          </button>
          <span className="">{number}</span>
          <button className={button} onClick={() => handleAdd(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
