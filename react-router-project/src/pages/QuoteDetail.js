import Comments from "../components/comments/Comments";
import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getsinglequote} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
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

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);

  const {
    sendRequest,
    status,
    data: loadedquote,
    error,
  } = useHttp(getsinglequote, true);

  const match = useRouteMatch();

//   console.log(match);
  //   const quote = quotesr.find((q) => q.id === params.quoteId);
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if (status==='pending') {
    return <div className="centered"><LoadingSpinner/></div>;
  }


  if(error){
      return <p className="centered">{error}</p>
  }

  if(!loadedquote.text){
      return <p className="centered">No quote found!</p>
  }
  return (
    <>
      <HighlightedQuote text={loadedquote.text} author={loadedquote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={params.quoteId} />
      </Route>
    </>
  );
};

export default QuoteDetail;
