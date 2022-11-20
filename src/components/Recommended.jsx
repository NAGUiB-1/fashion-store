import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";
import Row from "./Row";

function Recomended() {
  let [data, setData] = useState([]);

  /*


  */
  useEffect(() => {
    const getMostPopular = async () => {
      let data = await fetchData(
        "https://dummyjson.com/products?limit=10&skip=10"
      );
      setData(data);
    };
    getMostPopular();
  }, []);
  

  return (
    <>
      <Row data={data.products} title="Recomended For You" />
    </>
  );
}

export default Recomended;
