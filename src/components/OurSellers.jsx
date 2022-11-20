import { Link } from "react-router-dom";
import Nike from "../assets/nike.jpg";
import Adidas from "../assets/adidas.jpg";
import Jack from "../assets/jack.avif";
import Noak from "../assets/noak.jpg";
import North from "../assets/north.jpeg";
import NewLook from "../assets/new-look.jpg";
import Topman from "../assets/topman.avif";

export default function OurSellers() {
  return (
    <div className=" bg-[#eee] ">
      <div className=" container mx-auto font-sans py-4">
        <p className=" w-full text-center text-4xl pb-4 uppercase font-bold"> Our Sellers </p>
        <div className='w-full overflow-x-auto' >  
        <div className=" w-fit flex gap-2">
          <Link to="/products/7113" className='w-[200px]' >
            <img className='grayscale rounded-lg' src={Adidas} alt="adidas" />
          </Link>
          <Link to="/products/4766" className='w-[200px]' >
            <img className='grayscale rounded-lg' src={Nike} alt="nike" />
          </Link>
          <Link to="/products/29065" className='w-[200px]' >
            <img className='grayscale rounded-lg' src={Topman} alt="topman" />
          </Link>
          <Link to="/products/9828" className='w-[200px]' >
            <img className='grayscale rounded-lg' src={Jack} alt="jack" />
          </Link>
          <Link to="/products/21115" className='w-[200px]'>
            <img className='grayscale rounded-lg' src={Noak} alt="Noak" />
          </Link>
          <Link to="/products/5715" className='w-[200px]'>
            <img className='grayscale rounded-lg' src={North} alt="North" />
          </Link>
          <Link to="/products/17311" className='w-[200px]'>
            <img className='grayscale rounded-lg' src={NewLook} alt="newlook" />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
