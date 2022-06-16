import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Layout/Nav';
import { DeleteDeck } from './DeleteDeck';
import { readDeck } from '../utils/api';
import CardList from '../Card/CardList';

export default function Deck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function getDeck() {
            if (deckId) {
                const foundDeck = await readDeck(deckId);
                setDeck(() => foundDeck);
            }
        }
        getDeck();
    }, [deckId]);


    if (deck.id) {
        return (
            <div>
                <Nav Link={`/decks/${deckId}`} name={deck.name} currentPage={deck.name} />
                <div className="card w-100 my-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <h3 className="card-title">{deck.name}</h3>
                            </div>
                            <div className="col-3 text-muted">
                                <p>{deck.cards.length} cards</p>
                            </div>
                            <p className='card-text'>{deck.description}</p>
                            <div className='row'>
                                <div className='col'>
                                    <Link to={`/decks/${deck.id}/edit`} className='btn btn-secondary mr-2'>Edit</Link>
                                    <Link to={`/decks/${deck.id}/study`} className='btn btn-primary'>Study</Link>
                                </div>
                                <div className='row'>
                                    <DeleteDeck deck={deck} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CardList deck={deck} />
            </div>
        )
    }
    return (
        <div>
            <h4>This deck doesn't exist. Why not create one?</h4>
            <h5>Or just go Home...</h5>
        </div>
    )
}
