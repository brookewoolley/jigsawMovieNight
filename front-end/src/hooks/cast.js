import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../config";

const useCast = movie => {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCastData = async event => {
    const res = await axios(
      `${baseUrl}movie/${movie.id}/credits?api_key=${apiKey}`
    );

    setCastList(res.data.cast);
    setLoading(false);
    console.log(res.data.cast);
  };

  useEffect(() => {
    fetchCastData();
  }, []);

  return {
    castList,
    setCastList,
    loading
  };
};

export default useCast;
