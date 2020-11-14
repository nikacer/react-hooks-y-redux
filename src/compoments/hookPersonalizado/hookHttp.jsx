import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFetching(false);
      });
  }, [url]);

  return [data, isFetching];
};

export default useFetch;
