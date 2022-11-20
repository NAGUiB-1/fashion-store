import { useEffect, useState } from "react";
import { FetchData1 } from "../FetchData1";
import NewCard from "../components/NewCard";

export default function Main() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let fetch = async () => {
      let data = await FetchData1();
      setData(data.products)
      console.log(data.products);
    };
    fetch();
  }, []);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg,:gap-4 container mx-auto '>
      {data.map((i) => (
      
       
       <NewCard
          key={i.id}
          title={i.name}
          brand={i.brandName}
          price={i.price.current.value}
          thumb={`http://${i.imageUrl}`}
oldPrice={i.price.previous.value}
          //discount={i.discountPercentage}
          id={i.id}
        />
      ))}
    </div>
  );
}

//rating={i.rating}













