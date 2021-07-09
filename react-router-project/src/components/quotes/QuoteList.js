import {Fragment} from "react";
import {useHistory, useRouteMatch, useLocation} from "react-router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortquotes = (quotes, asc) => {
  return quotes.sort((quoteA, quoteB) => {
    if (asc) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id > quoteB.id ? -1 : 1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();

  const location = useLocation();

  // console.log((location));
  const queryparams = new URLSearchParams(location.search);

  const isSortingAsc = queryparams.get("sort") === "asc";
  // console.log(isSortingAsc);

  const sortedquotes = sortquotes(props.quotes, isSortingAsc);

  const changesortinghandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
    });
    // history.push(`${location.pathname}?sort=${isSortingAsc ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changesortinghandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedquotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
