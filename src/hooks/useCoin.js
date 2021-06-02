import { useState, useEffect } from "react";
import { coinGecko } from "../initialData";

function useCoin (initAry) {
  const [coinData, setCoinData] = useState(initAry);

  useEffect(() => {
    coinGecko.get("")
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return [coinData];
}

export default useCoin;
