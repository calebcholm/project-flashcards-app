import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../utils/api';
import ErrorMessage from './ErrorMessage';

//Routes to '/decks/:deckId/study'
//Allows the user to study the cards from a specified deck

function Study({ decks }) {
    /*const { deckId } = useParams();
    const targetDeck = decks.find((deck) => deck.id === Number(deckId));

    const [deck, setDeck] = useState({});
    const [error] = useState(undefined);
    console.log(deck)

    useEffect(() => {
        setDeck({});
    
        async function loadDeck() {
          const response = await readDeck(targetDeck.id);
          setDeck(response);
        }

        loadDeck();
      }, {});
    
      if (error) {
        return (
          <ErrorMessage error={error}>
            <h4>
              <Link to={`/`}>Return Home</Link>
            </h4>
          </ErrorMessage>
        );
      };
*/
      //if (deck) {
          return (
        <div>Study Deck Component</div>
          )
      }
//}

export default Study;

