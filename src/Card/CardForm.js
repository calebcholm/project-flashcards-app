import React from "react";

export default function CardForm({ card, handleChange, handleSubmit, handleReset, formData, edit }) {

    if (edit) {
        return (
            <div>
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
                        Done
                    </button>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary m-2">
                        Save
                    </button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
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
        )
    }
}