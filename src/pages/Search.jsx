import NewResult from "../components/NewResult";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../fetchData";
import axios from 'axios'
const Search = () => {
  let { search } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async (search) => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v2/list",
        params: {
          id: 0,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
          q: search,
          limit: 100,
        },
        headers: {
          "X-RapidAPI-Key":
            "fdb1ff9997msh3f51186bae4b431p18dbfajsna38a5eef13ef",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };
      const data = await axios.request(options).then((res) => res.data);
      setData(data.products);
    };
    fetchData(search);
  }, [search]);

  return (
    <>
    {
    data.length? <NewResult data={data} title={`Result For : ${search}`} /> : <Loader />
      
    }
    </>
    
  );
};

export default Search;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
