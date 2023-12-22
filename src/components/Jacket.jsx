import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";
import Row from "./Row";

import axios from "axios";

function Jacket() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async (q) => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v2/list",
        params: {
          id: 0,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
          q: q,
          limit: 20,
        },
        headers: {
          "X-RapidAPI-Key":
            "8b24513a95msh2b17cf471b9989dp1efe0ejsnf43fb098dc8a",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };
      const data = await axios.request(options).then((res) => res.data);
      setData(data.products);
    };
    fetchData("jacket");
  }, []);

  return (
    <>
      <Row data={data} title="Jackets" />
    </>
  );
}

export default Jacket;
