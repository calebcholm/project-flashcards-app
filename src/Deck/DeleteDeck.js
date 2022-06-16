import React from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from 'react-router-dom';

export const DeleteDeck = ({ deck }) => {
    const history = useHistory();

    const handleDelete = async () => {
        const result = window.confirm("Delete this deck? You will not be able to recover it.");
        if (result && deck) {
            await deleteDeck(deck.id);
            history.push('/');
            window.location.reload();
        }
    };

    return (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
    )
}
