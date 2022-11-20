import { useState, useEffect } from "react";
import Result from "../components/Result";
import NewResult from "../components/NewResult";
import { useParams } from "react-router-dom";
import { fetchData } from "../fetchData";
import { FetchData1 } from "../FetchData1";
const Products = () => {
  let { category } = useParams();
  let [data, setData] = useState([]);
  let [title, setTitle] = useState('');
  useEffect(() => {
    let fetch = async () => {
      let data = await FetchData1(category);
      setData(data.products)

      setTitle(data.categoryName)
      
    };
    fetch();
  }, [category]);
  
  return (
    <>
    <NewResult data= {data} title={`Result For : ${title}`} category={category}/>
    </>
  );
};

export default Products;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
