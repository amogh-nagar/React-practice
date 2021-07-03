import {useState} from "react";

const useFetch = (reqconfig, applydata) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendrequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqconfig.url, {
        method: reqconfig.method ? reqconfig.method : "GET",
        headers: reqconfig.headers ? reqconfig.headers : {},
        body: reqconfig.body ? JSON.stringify(reqconfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      console.log("data: ", data);
      const data = await response.json();

      applydata(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading: isLoading,
    error: error,
    sendrequest: sendrequest,
  };
};

export default useFetch;
