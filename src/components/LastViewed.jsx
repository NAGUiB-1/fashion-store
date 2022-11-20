import { useState, useEffect } from "react";
import { AppState } from "../AppState";
import Row from "./Row";

import { fetchData } from "../fetchData";

const LastViewd = ({ q }) => {
  let {lastViewed} = AppState()
  const [data, setData] = useState([]);

  console.log(lastViewed)
  return (
    <>
    {
    lastViewed.length >= 1 ? <Row data={lastViewed} title=" Last Viewd " /> : ''
    }
    </>
  );
};

export default LastViewd;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
