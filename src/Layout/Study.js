import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readDeck } from '../utils/api';

//Routes to '/decks/:deckId/study'
//Allows the user to study the cards from a specified deck

function Study() {
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        setDeck([]);
        const abortController = new AbortController();
    
        async function loadDeck() {
          const response = await readDeck(abortController.signal);
          setDecks(response);
        }
        
        loadDeck();
    
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
        <button>Study Component</button>
    )
}

export default Study;
