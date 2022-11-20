import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";
import Row from "./Row";

import axios from "axios";

function MostPopular() {
  let [data, setData] = useState([]);

  /*


  */
  useEffect(() => {
    const getMostPopular = async () => {
      let data = await fetchData("https://dummyjson.com/products?limit=10");
      setData(data);
    };
    getMostPopular();
  }, []);
  console.log(data.products);

  return (
    <>
      <Row data={data.products} title="Most Popular" />
    </>
  );
}

export default MostPopular;
