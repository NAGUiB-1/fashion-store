import { useState, useEffect } from "react";
import NewProductInfo from "../components/NewProductInfo";
import Similar from "../components/Similar";
import LastViewed from "../components/LastViewed";
import { useParams } from "react-router-dom";
import { fetchData } from "../fetchData";
import axios from 'axios'
const Product = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    /*
    const getProduct = async () => {
      let data = await fetchData( `https://dummyjson.com/products/${id}`);
      setData(data);
    };
    const getSimilar = async () => {

      let data2 = await fetchData( `https://dummyjson.com/products/category/${data.category}`);

      setSimilar(data2.products);
    };
    
    getProduct();
    getSimilar();
    
    
    */
    let fetchData = async (id) => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {
          id: id,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "fdb1ff9997msh3f51186bae4b431p18dbfajsna38a5eef13ef",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };
      const data = await axios.request(options).then((res) => res.data);
      setData(data);
    };
    
    fetchData(id);
  }, [id]);

  return (
    <>
      <NewProductInfo data={data} />
      <Similar q={data?.brand?.name} />
      <LastViewed />
    </>
  );
};

export default Product;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
