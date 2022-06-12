import React from "react";
import { Link } from 'react-router-dom';
import Deck from './Deck';

export const DeckList = ({ decks, deleteDeck }) => {

    return (
        <div>
            <Link to='/decks/new' className="btn btn-secondary">Create Deck</Link>
            {decks.map((deck, index) => (
                <div className="card w-100 my-4" key={index}>
                    <Deck deck={deck} index={index} />
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
                                    <Link to={`/decks/${deck.id}`} className='btn btn-secondary'>View</Link>
                                    <Link to={`/decks/${deck.id}/study`} className='btn btn-primary'>Study</Link>
                                </div>
                                <div className='row'>
                                    <div className='btn btn-danger' onClick={deleteDeck}>Delete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default DeckList;
