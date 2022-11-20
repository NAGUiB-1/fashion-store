import axios from "axios";
export const FetchData1 = async (id) => {
  
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: id,
      limit: "48",
      country: "US",
      sort: "freshness",
      q: "",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "fdb1ff9997msh3f51186bae4b431p18dbfajsna38a5eef13ef",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  const data = await axios.request(options).then((res) => res.data);
  return data;
};
