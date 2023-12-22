import Phone from "../assets/Phone.jpeg";
import shoes from "../assets/shoes.webp";

import jeans from "../assets/jeans.jpg";
import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();
  const textStyle =
    "outline-stroke font-mono  uppercase text-7xl md:text-9xl text-center flex items-center  justify-center h-full absolute z-50 w-full";
  return (
    <div className=" flex flex-col md:flex-row h-[700px] md:h-[500px] relative cursor-pointer">
      <div
        className=" group bg-gray-300 w-full h-full relative overflow-hidden"
        onClick={() => navigate("/search/men shoes")}
      >
        <img
          src={shoes}
          alt="shoes"
          className="h-full w-full absolute object-cover group-hover:scale-150 transition"
        />
        <p className={textStyle}> BEST SHOES </p>
      </div>
      <div
        className="overflow-hidden group bg-gray-50 w-full h-full relative"
        onClick={() => navigate("/search/men jeans")}
      >
        <img
          src={jeans}
          alt="phones"
          className="group-hover:scale-150 transition h-full w-full absolute object-cover"
        />
        <p className={textStyle}>Jeans</p>
      </div>
    </div>
  );
}

export default Explore;
