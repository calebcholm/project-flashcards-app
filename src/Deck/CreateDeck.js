import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../utils/api";
import ErrorMessage from "../Layout/ErrorMessage";

export default function CreateDeck() {
  const initialState = {
    name: "",
    description: "",
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
    history.push('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const abortController = new AbortController();

    createDeck(formData, abortController.signal)
      .then((data) => setFormData(data))
      .catch(setError);

    return () => abortController.abort();
  };

  useEffect(() => {
    if (formData.id) {
      history.push(`/decks/${formData.id}`);
      window.location.reload();
    }
  }, [formData.id, history]);

  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (formData)
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home" /> Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
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
              value={formData.name}
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
              value={formData.description}
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
    );
}
