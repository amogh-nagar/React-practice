import React, {Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
// import NewQuote from "./pages/NewQuote";
// import Quotes from "./pages/Quotes";
// import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail=React.lazy(()=>import('./pages/QuoteDetail'))
const NotFound=React.lazy(()=>import('./pages/NotFound'))
const Quotes=React.lazy(()=>import('./pages/Quotes'))


function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
