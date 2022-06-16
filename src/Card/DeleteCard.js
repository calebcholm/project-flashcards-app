import React from "react";
import { deleteCard } from "../utils/api";
import { useHistory } from 'react-router-dom';

export const DeleteCard = ({ card }) => {

    const handleDelete = async () => {
        const result = window.confirm("Delete this card? You will not be able to recover it.");
        if (result && card) {
            await deleteCard(card.id);
            window.location.reload();
        }
    };

    return (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
    )
}
