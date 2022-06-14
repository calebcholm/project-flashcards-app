import React from "react";
import Deck from "./Deck";
import { Link } from 'react-router-dom';

export const DeckList = ({ decks }) => {

    return (
        <div>
            <Link to='/decks/new' className="btn btn-secondary">Create Deck</Link>
            {decks.map((deck) => (
                <Deck deck={deck} key={deck.id} />))}
        </div>
    );
}


export default DeckList;
