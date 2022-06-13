import React from 'react';
import { Link, useParams } from 'react-router-dom';


//Routes to '/decks/:deckId'
//Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen or delete the deck

export default function Deck({ decks, deleteDeck }) {
    const { deckId } = useParams();
    const deck = decks.find((deck) => deck.id === Number(deckId));
    
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
                                    <Link to={`/decks/${deck.id}/study`} className='btn btn-primary'>Study</Link>
                                </div>
                                <div className='row'>
                                    <div className='btn btn-danger' onClick={deleteDeck}>Delete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
