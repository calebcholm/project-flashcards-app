import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import ErrorMessage from "../Layout/ErrorMessage";
import Nav from "../Layout/Nav";

export default function AddCard() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function getDeck() {
            if (deckId) {
                const foundDeck = await readDeck(deckId);
                setDeck(foundDeck);
            }
        }
        getDeck();
    }, [deckId]);

    const initialState = {
        front: "",
        back: "",
        deckId: deckId,
        id: 0,
    };

    const [formData, setFormData] = useState({ ...initialState });
    const [error, setError] = useState(undefined);
    const history = useHistory();

    const handleChange = ({ target }) => {
        const value = target.value;

        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleReset = () => {
        setFormData({ ...initialState });
        history.push(`/decks/${deckId}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        async function addCard() {
            await createCard(deckId, formData)
            .then(() => alert(`Card in '${deck.name}' saved! Add another or click Done.`))
            .then((data) => setFormData({ ...initialState }))
            .catch(setError);
        }
        addCard();
    };

    

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (formData)
        return (
            <div>
                <Nav link={`/decks/${deckId}`} name={deck.name} currentPage={"Add Card"} />
                <h3>{deck.name}: Add Card</h3>
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
                            value={formData.front}
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
                            value={formData.back}
                        />
                    </div>
                    <button
                        className="btn btn-secondary m-2"
                        type="reset"
                        onClick={handleReset}
                    >
                        Done
                    </button>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">
                        Save
                    </button>
                </form>
            </div>
        );
}
