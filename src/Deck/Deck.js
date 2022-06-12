import React, { useState } from 'react';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { DeckList } from './DeckList';


//Routes to '/decks/:deckId'
//Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen or delete the deck

const Deck = ({ deck, index }) => {

    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                    <li className='breadcrumb-item active' aria-current='page'>**Deck Name**</li>
                </ol>
            </nav>
        </div>
    )
}

export default Deck;