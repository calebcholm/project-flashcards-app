import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Nav from '../Layout/Nav';
import { updateDeck } from '../utils/api';
import { readDeck } from '../utils/api';

function EditDeck() {
    const initialState = {
        name: '',
        description: '',
    };

    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({...initialState});

    useEffect(() => {
        async function getDeck() {
            if (deckId) {
                const foundDeck = await readDeck(deckId);
                setDeck(foundDeck);
            }
        }
        getDeck();
    }, [deckId]);

    const handleChange = ({ target }) => {
        const value = target.value;

        setDeck({
            ...deck,
            [target.name]: value,
        });
    };

    const handleReset = () => {
        history.push(`/decks/${deckId}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateToDeck() {
            if (deckId) {
                await updateDeck(deck)
                .then(() => alert(`'${deck.name}' updated!`));
                history.push(`/decks/${deckId}`);
            }
        }
        updateToDeck();
    };


    return deck ? (
        <div>
            <Nav link={`/decks/${deckId}`} name={deck.name} currentPage={'Edit Deck'} />
            <h1>Edit Deck</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Deck Name"
                onChange={handleChange}
                value={deck.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="textarea"
                className="form-control"
                id="description"
                name="description"
                placeholder="Brief description of the deck"
                onChange={handleChange}
                value={deck.description}
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
              Submit
            </button>
          </form>
        </div>
    ) : <div>Loading ...</div>
}

export default EditDeck;