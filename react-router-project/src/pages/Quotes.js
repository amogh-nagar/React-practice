import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getallquotes} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const quotesr = [
//   {
//     id: "q1",
//     author: "Mark Zuckerberg",
//     text: "Hello guyz",
//   },
//   {
//     id: "q2",
//     author: "James Bond",
//     text: "i'm detective",
//   },
// ];

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: loadedquotes,
    error,
  } = useHttp(getallquotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedquotes || loadedquotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedquotes} />;
};

export default Quotes;
