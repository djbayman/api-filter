import { useState } from "react";
import axios from "axios";

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.publicapis.org/${query}`,
        params
      );
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData: (params) => fetchData(params),
    response,
    isLoading,
    error,
  };
};

export default useAxios;
