import React, { useEffect, useState, Fragment } from "react";
import { listDecks } from "../utils/api";
import Header from "./Header";
import CreateDeck from "../Deck/CreateDeck";
import EditDeck from "../Deck/EditDeck";
import AddCard from "../Card/AddCard";
import EditCard from "../Card/EditCard";
import Study from "./Study";
import ErrorMessage from "./ErrorMessage";
import DeckList from "../Deck/DeckList";
import NotFound from "./NotFound";
import { Route, Link, Switch } from 'react-router-dom';
import Deck from "../Deck/Deck";

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
          <Route path='/decks/:deckId'>
            <Deck />
          </Route>
          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>
          <Route exact path='/decks/:deckId/study'>
            <Study />
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
