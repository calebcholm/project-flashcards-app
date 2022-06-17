import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";
import Nav from "../Layout/Nav";

export default function EditCard() {
    const history = useHistory();
    const { deckId, cardId } = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Front
                    </label>
                    <textarea
                        type="textarea"
                        className="form-control"
                        id="front"
                        name="front"
                        placeholder="Front side of card"
                        onChange={handleChange}
                        value={card.front}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Back
                    </label>
                    <textarea
                        type="textarea"
                        className="form-control"
                        id="back"
                        name="back"
                        placeholder="Back side of card"
                        onChange={handleChange}
                        value={card.back}
                    />
                </div>
                <button
                    className="btn btn-secondary m-2"
                    type="reset"
                    onClick={handleReset}
                >
                    Cancel
                </button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">
                    Save
                </button>
            </form>
        </div>
    ) : <div>Loading card ...</div>
}
