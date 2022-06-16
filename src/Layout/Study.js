import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readDeck } from '../utils/api';

//Routes to '/decks/:deckId/study'
//Allows the user to study the cards from a specified deck

function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function getDeck() {
            if (deckId) {
                const foundDeck = await readDeck(deckId);
                setDeck(foundDeck);
            }
        }

        getDeck();

    }, [deckId]);

      if (deck.id) {
          return (
        <div>Study Deck Component</div>
          )
      }
}

export default Study;
