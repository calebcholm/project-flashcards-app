import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";
import Nav from "../Layout/Nav";
import CardForm from "./CardForm";

export default function EditCard() {
    const history = useHistory();
    const { deckId, cardId } = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const edit = true;

    useEffect(() => {
        async function getDeck() {
            const foundDeck = await readDeck(deckId);
            setDeck(foundDeck);
        }
        getDeck();

        async function getCard() {
            const foundCard = await readCard(cardId);
            setCard(foundCard);
        }
        getCard();
    }, [deckId, cardId]);

    const handleChange = ({ target }) => {
        const value = target.value;

        setCard({
            ...card,
            [target.name]: value,
        });
    };

    const handleReset = () => {
        history.push(`/decks/${deckId}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateToCard() {
            if (cardId) {
                await updateCard(card)
                    .then(() => alert(`Card ${card.id} in '${deck.name}' updated!`));
                history.push(`/decks/${deckId}`);
            }
        }
        updateToCard();
    };

    return card ? (
        <div>
            <Nav link={`/decks/${deckId}`} name={deck.name} currentPage={`Edit Card ${card.id}`} />
            <h3>Edit Card</h3>
            <CardForm card={card} handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} deck={deck} edit={edit} />
        </div>
    ) : <div>Loading card ...</div>
}
