import { useState, useEffect } from "react";
import Result from "../components/Result";
import NewResult from "../components/NewResult";
import { useParams } from "react-router-dom";
import { FetchData1 } from "../FetchData1";
import Loader from "../components/Loader";
const Products = () => {
  let { category } = useParams();
  let [data, setData] = useState([]);
  let [title, setTitle] = useState("");
  useEffect(() => {
    let fetch = async () => {
      let data = await FetchData1(category);
      setData(data.products);

      setTitle(data.categoryName);
    };
    fetch();
  }, [category]);

  return (
    <>
      {data.length > 1 ? (
        <NewResult
          data={data}
          title={`Result For : ${title}`}
          category={category}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;

// .slice((page - 1) * 10, (page - 1) * 10 + 10)
