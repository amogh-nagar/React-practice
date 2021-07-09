import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from "react-router";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  console.log("status: ", status);

  const addquotehandler = (quotedata) => {
    console.log(quotedata);
    sendRequest(quotedata);
    // console.log(history);
    // history.push("/quotes");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addquotehandler} />
  );
};

export default NewQuote;
