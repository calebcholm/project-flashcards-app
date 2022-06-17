import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import StudyCard from '../Card/StudyCard';
import { readDeck } from '../utils/api';

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

    if (Object.keys(deck).length) {
    return (
        <div>
            <Nav link={`/decks/${deckId}`} name={deck.name} currentPage={'Study'} />
            <h1>{deck.name}: Study</h1>
            <StudyCard cards={deck.cards} />
        </div>
    )
    } else {
        return `Loading ... `
    }
}

export default Study;
