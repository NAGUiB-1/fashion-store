import { useState, useEffect } from "react";

import Row from "./Row";
import axios from "axios";
import { fetchData } from "../fetchData";

const Similar = ({ q }) => {
  const [data, setData] = useState([]);

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
          q:q,
          limit:20,
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
    fetchData(q);
  }, [q]);

  
  return (
    <>
      <Row data={data} title="Same Brand " />
    </>
  );
};

export default Similar;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
