import React from "react";
import { Link, useParams } from "react-router-dom";
import { DeleteCard } from "./DeleteCard";

export default function CardList({ deck }) {
    const { deckId } = useParams();

    return (
        <div className="container">
            <h3>Cards</h3>
            <div className="card-list">
                {deck.cards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <div className="container">
                                <div className="row justify-content-start my-2">
                                    <div className="col-6">
                                        {card.front}
                                    </div>
                                    <div className="col-6">
                                        {card.back}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-9">
                                    </div>
                                    <div className="row-3 pt-2 pb-1">
                                        <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className='btn btn-secondary mr-1'>Edit</Link>
                                        <DeleteCard card={card} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
