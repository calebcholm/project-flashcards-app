import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

export default function StudyCard({ cards }) {
    const { deckId } = useParams();
    const history = useHistory();

    const initialState = {
        cardBack: false,
        currentCard: 0,
    };

    const [study, setStudy] = useState({ ...initialState });

    const handleNextCard = () => {
        if (study.currentCard < cards.length - 1) {
            setStudy({
                ...study,
                currentCard: study.currentCard + 1,
                cardBack: false,
            })
        } else {
            const response = window.confirm(`Restart cards? Click 'cancel' to return to the home page.`);
            if (response) {
                setStudy(initialState);
            } else {
                history.push('/');
            }
        }
    };

    const handleCardFlip = () => {
        if (study.cardBack) {
            setStudy({
                ...study,
                cardBack: false
            })
        } else {
            setStudy({
                ...study,
                cardBack: true
            })
        }
    }

    if (cards.length > 2) {
        return (
            <div className="container">
                <div className="card w-100">
                    <div className="card-body">
                        <h4 className="card-title">
                            Card {study.currentCard + 1} of {cards.length}
                        </h4>
                        <p className="card-text font-weight-lighter">
                            {study.cardBack ? cards[study.currentCard].back : cards[study.currentCard].front}
                        </p>
                        <button className="btn btn-secondary mr-1" onClick={handleCardFlip}>Flip</button>
                        {study.cardBack && (<button className="btn btn-primary" onClick={handleNextCard}>Next</button>)}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Not enough cards.</h3>
                <div className="row my-2">
                    <p>You need at least 3 cards to study. This deck has {cards.length} cards.</p>
                </div>
                <div className="row">
                    <Link to={`/decks/${deckId}/cards/new`} className='btn btn-primary'>
                        Add Card
                    </Link>
                </div>
            </div>
        )
    }

}