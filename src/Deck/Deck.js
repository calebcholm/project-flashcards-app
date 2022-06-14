import React from 'react';
import { Route } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { DeleteDeck } from './DeleteDeck';


//Routes to '/decks/:deckId'
//Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen or delete the deck

export default function Deck({ deck }) {
    const { deckId } = useParams();

    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                    <li className='breadcrumb-item active' aria-current='page'>{`${deck.name}`}</li>
                </ol>
            </nav>
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
                                <Route>
                                <Link to={`/decks/${deckId}`} className='btn btn-secondary'>View</Link>
                                </Route>
                                <Route>
                                <Link to={`/decks/${deckId}/study`} className='btn btn-primary'>Study</Link>
                                </Route>
                            </div>
                            <div className='row'>
                                <div>
                                    <DeleteDeck deck={deck} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
