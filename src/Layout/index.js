import React, { useEffect, useState, Fragment } from "react";
import { listDecks } from "../utils/api";
import Header from "./Header";
import CreateDeck from "../Deck/CreateDeck";
import ErrorMessage from "./ErrorMessage";
import DeckList from "../Deck/DeckList";
import NotFound from "./NotFound";
import { Route, Link, Switch } from 'react-router-dom';

function Layout() {
  const [decks, setDecks] = useState([]);
  const [error] = useState(undefined);

  useEffect(() => {
    setDecks([]);
    const abortController = new AbortController();

    async function loadDecks() {
      const response = await listDecks(abortController.signal);
      setDecks(response);
    }
    
    loadDecks();

    return () => abortController.abort();
  }, []);

  if (error) {
    return (
      <ErrorMessage error={error}>
        <h4>
          <Link to={`/`}>Return Home</Link>
        </h4>
      </ErrorMessage>
    );
  };



  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route exact path='/'>
            <DeckList decks={ decks } />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
