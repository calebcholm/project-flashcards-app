import React from "react";

export default function CardList({ deck }) {
    return (
        <div>This will be a list of {deck.cards.length} cards in '{deck.name}'</div>
    )
}