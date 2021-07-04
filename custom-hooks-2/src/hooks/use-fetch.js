import {useState, useCallback} from "react";

const useFetch = (applydata) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendrequest = useCallback(
    async (reqconfig) => {
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
    },
    [applydata]
  );

  return {
    isLoading: isLoading,
    error: error,
    sendrequest: sendrequest,
  };
};

export default useFetch;
