import axios from "axios";
export const fetchData = async (url) => {
    const data = await axios.get(url).then(res => res.data)
    return data
}
