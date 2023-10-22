import { useCallback, useState } from "react";
import spacexService from "../lib/spacex";

export const useItem = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const onFetch = useCallback(async (endpoint, id) => {
    try {
      setLoading(true);
        
      const newData = await spacexService.getItem(endpoint, id);
      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    onFetch,
  };
};
