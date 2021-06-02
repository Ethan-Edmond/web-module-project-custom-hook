import { useState, useEffect } from "react";
import axios from "axios";
import { axiosData } from "../initialData";

function useCoin (initAry) {
  const [coinData, setCoinData] = useState(initAry);

  useEffect(() => {
    axios.get(axiosData.baseURL)
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return [coinData];
}

export default useCoin;
